import { onError } from '@apollo/client/link/error'
import { useApollo } from '../client'
import { REFRESH_USER } from '../auth/refresh/mutations'
import { returnTokenDependingOnOperation } from '../../helpers/graphql'
import { Observable } from 'rxjs'
import { setupUser } from '../../helpers/setupUser'
import { ITokens } from '../../redux/user/interfaces/tokens.interface'
import { Cookies } from 'react-cookie'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default onError(async ({ graphQLErrors, networkError, operation, forward }) => {
  console.log('graphQLErrors', graphQLErrors)
  // const [cookies, setCookie] = useCookies();
  // console.log('cookies', cookies);
  // console.log('setCookie', setCookie);
  const client = useApollo()
  console.log('client', client)
  returnTokenDependingOnOperation(operation)
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      switch (err.extensions?.code) {
        case 'UNAUTHENTICATED': {
          const test = new Observable((observer) => {
            client
              .mutate({ mutation: REFRESH_USER })
              .then((refreshResponse) => {
                const {
                  data: { refresh: responseTokens },
                } = refreshResponse
                const cookies = new Cookies()
                try {
                  setupUser(responseTokens.tokens as ITokens, cookies.set)
                } catch (e) {
                  console.log('e')
                }
                operation.setContext(({ headers = {} }) => ({
                  headers: {
                    // Re-add old headers
                    ...headers,
                    // Switch out old access token for new one
                    authorization: `Bearer ${responseTokens.tokens.accessToken}` || null,
                  },
                }))
              })
              .then(() => {
                const subscriber = {
                  next: observer.next.bind(observer),
                  error: observer.error.bind(observer),
                  complete: observer.complete.bind(observer),
                }
                console.log('SUBSCRIBER')
                // Retry last failed request
                forward(operation).subscribe(subscriber)
              })
              .catch((error) => {
                // No refresh or client token available, we force user to login
                observer.error(error)
              })
          })
          return await test.toPromise()
          // const oldHeaders = operation.getContext().headers
          // const response = await client.mutate({ mutation: REFRESH_USER })
          // const {
          //   data: { refresh: tokensResponse },
          // } = response;
          // const cookies = new Cookies();
          // setupUser(tokensResponse.tokens as ITokens, cookies.set, cookies);
          // operation.setContext({
          //   headers: {
          //     ...oldHeaders,
          //     authorization: localStorage.getItem('accessToken')
          //         ? `Bearer ${localStorage.getItem('accessToken')}`
          //         : '',
          //   },
          // })
          // return forward(operation)
        }
      }
    }
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    )
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
})

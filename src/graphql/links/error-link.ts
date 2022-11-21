import { onError } from '@apollo/client/link/error';
import { useApollo } from '../client';
import { REFRESH_USER } from '../auth/refresh/mutations';
import { returnTokenDependingOnOperation } from '../../helpers/graphql';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default onError(async ({graphQLErrors, networkError, operation, forward}) => {
    console.log('graphQLErrors', graphQLErrors);
    // const [cookies, setCookie] = useCookies();
    // console.log('cookies', cookies);
    // console.log('setCookie', setCookie);
    const client = useApollo();
    console.log('client', client);
    returnTokenDependingOnOperation(operation);
    if (graphQLErrors) {
        for (const err of graphQLErrors) {
            console.log('ERROR', err)
            switch (err.extensions?.code) {
                case 'UNAUTHENTICATED':
                    // eslint-disable-next-line no-case-declarations
                    const oldHeaders = operation.getContext().headers;
                    // eslint-disable-next-line no-case-declarations
                    const response = await client.mutate({ mutation: REFRESH_USER });
                    console.log('s', response);
                    // eslint-disable-next-line no-case-declarations
                    const { data: { refresh: tokens  } } = response;
                    console.log('tokens', tokens);
                    operation.setContext({
                        headers: {
                            ...oldHeaders,
                            authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : '',
                        },
                    });
                    return forward(operation);
            }
        }
        graphQLErrors.map(({message, locations, path}) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        );
    }

    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});
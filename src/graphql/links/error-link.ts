import { onError } from '@apollo/client/link/error';
import { useApollo } from '../client';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default onError(({ graphQLErrors, networkError, operation, forward }) => {
    console.log('graphQLErrors', graphQLErrors);
    const client = useApollo();
    console.log('client', client);
    if (graphQLErrors) {
        for (const err of graphQLErrors) {
            console.log('ERROR', err)
            switch (err.extensions?.code) {
                case 'UNAUTHENTICATED':
                    // eslint-disable-next-line no-case-declarations
                    const oldHeaders = operation.getContext().headers;
                    localStorage.setItem('token', 'token')
                    operation.setContext({
                        headers: {
                            ...oldHeaders,
                            authorization: 'HELLLO NAHUI"',
                        },
                    });
                    return forward(operation);
            }
        }
        graphQLErrors.map(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        );
    }

    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});
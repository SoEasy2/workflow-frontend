import { setContext } from '@apollo/client/link/context';

export default setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    };
});
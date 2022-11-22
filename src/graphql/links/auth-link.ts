import { setContext } from '@apollo/client/link/context'
import { returnTokenDependingOnOperation } from '../../helpers/graphql'

export default setContext((_, { headers }) => {
  const token = returnTokenDependingOnOperation(_)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

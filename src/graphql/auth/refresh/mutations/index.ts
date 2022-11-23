import { gql } from '@apollo/client'

export const REFRESH_USER = gql`
  mutation refresh {
    refresh {
      tokens {
        refreshToken
        accessToken
      }
      user {
        id
        email
        phone
        stepRegistration
        sendCodeDate
        codeEmail
      }
    }
  }
`

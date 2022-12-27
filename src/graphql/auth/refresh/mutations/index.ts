import { gql } from '@apollo/client';

export const REFRESH_USER = gql`
  mutation refresh {
    refresh {
      tokens {
        refreshToken
        accessToken
      }
      user {
        id
        username
        email
        phone
        stepRegistration
        sendCodeDate
        codeEmail
        typeRegistration
        currentCompany {
          name
          user
          targetUser
          id
          amountOfEmployees
          code
        }
      }
    }
  }
`;

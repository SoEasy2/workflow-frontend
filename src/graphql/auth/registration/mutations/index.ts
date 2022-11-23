import { gql } from '@apollo/client'

export const REGISTER_USER = gql`
  mutation registerUser($user: RegisterUserInput!) {
    registerUser(registerUserInput: $user) {
      user {
        id
        email
        phone
        stepRegistration
        sendCodeDate
        codeEmail
      }
      tokens {
        accessToken
        refreshToken
      }
    }
  }
`
export const VERIFICATION_CODE = gql`
  mutation verification($emailCode: String!) {
    verificationUser(emailCode: $emailCode) {
      stepRegistration
    }
  }
`

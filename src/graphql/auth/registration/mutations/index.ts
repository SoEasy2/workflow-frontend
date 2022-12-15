import { gql } from '@apollo/client';

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
`;
export const VERIFICATION_CODE = gql`
  mutation verification($emailCode: String!) {
    verificationUser(emailCode: $emailCode) {
      stepRegistration
    }
  }
`;

export const RESEND_VERIFICATION_CODE = gql`
  mutation resendVerificationCode {
    resendVerificationCode {
      sendCodeDate
    }
  }
`;

export const DETAILS_USER = gql`
  mutation details($detailsInput: DetailsInput!) {
    details(detailsInput: $detailsInput) {
      currentCompany {
        name
        user
        targetUser
        id
        amountOfEmployees
      }
      username
      stepRegistration
    }
  }
`;

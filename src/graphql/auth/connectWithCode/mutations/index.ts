import { gql } from '@apollo/client';

export const CONNECT_WITH_CODE = gql`
  mutation connectWithCode($code: String!) {
    registerByCodeCompany(code: $code)
  }
`;
export const DETAILS_BY_CODE_COMPANY = gql`
    mutation detailsByCodeCompany($detailsByCodeCompanyInput: DetailsByCodeCompanyInput!){
        detailsByCodeCompany(detailsByCodeCompanyInput: $detailsByCodeCompanyInput){
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
`

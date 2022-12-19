import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($loginUserInput: LoginUserInput!){
        login(loginUserInput: $loginUserInput) {
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
                currentCompany {
                    name
                    user
                    targetUser
                    id
                    amountOfEmployees
                }
            }
        }
    }
`
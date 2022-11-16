import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
    mutation registerUser($user: RegisterUserInput!) {
        registerUser(registerUserInput: $user){
            user{
                id
                email
                phone
                
            }
            tokens{
                accessToken
                refreshToken
            }
        }   
    }    
`;
import { gql } from '@apollo/client';

export const CHANGE_PASSWORD = gql`
  mutation changePasswordUser($changePasswordInput: ChangePasswordInput!) {
    changePasswordUser(changePasswordInput: $changePasswordInput)
  }
`;

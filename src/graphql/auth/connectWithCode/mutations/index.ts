import { gql } from '@apollo/client';

export const CONNECT_WITH_CODE = gql`
  mutation connectWithCode($code: String!) {
    registerByCodeCompany(code: $code)
  }
`;

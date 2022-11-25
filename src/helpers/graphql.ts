import { GraphQLRequest } from '@apollo/client';
import { Cookies } from 'react-cookie';
import { refreshOperation } from './constants/graphql';

const isRefreshRequest = (operation: GraphQLRequest): boolean => {
  return operation.operationName === refreshOperation;
};

export const returnTokenDependingOnOperation = (operation: GraphQLRequest): string => {
  if (isRefreshRequest(operation)) {
    const cookies = new Cookies();
    return cookies.get('refresh_token');
  } else return localStorage.getItem('accessToken') || '';
};

import { GraphQLRequest, Observable } from '@apollo/client'
import { Cookies } from 'react-cookie'
import { refreshOperation } from './constants/graphql'

const isRefreshRequest = (operation: GraphQLRequest): boolean => {
  return operation.operationName === refreshOperation
}

export const returnTokenDependingOnOperation = (operation: GraphQLRequest): string => {
  if (isRefreshRequest(operation)) {
    const cookies = new Cookies()
    return cookies.get('refresh_token')
  } else return localStorage.getItem('accessToken') || ''
}

export const promiseToObservable = (promise: Promise<any>) =>{
    console.log('this', promise)
    return new Observable((subscriber: any) => {
        promise.then(
            value => {
                console.log('subscriber', subscriber);
                if (subscriber.closed) return;
                subscriber.next(value);
                subscriber.complete();
            },
            err => subscriber.error(err)
        );
    })
};
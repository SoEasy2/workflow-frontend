import { ITokens } from '../redux/user/interfaces/tokens.interface'
import { CookieSetOptions } from 'universal-cookie';

export const setupUser = (
  tokens: ITokens,
  setCookie: (name: string, value: any, options?: CookieSetOptions | undefined) => void,
  cookies: any,
) => {
  const { accessToken, refreshToken } = tokens
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken)
  }
  if (refreshToken) {
    setCookie('refresh_token', refreshToken, { expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30) })
  }
  return cookies;
}

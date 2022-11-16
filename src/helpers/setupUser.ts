import { ITokens } from '../redux/user/interfaces/tokens.interface';
import { IUser } from '../redux/user/interfaces/user.interface';

export const setupUser = (tokens: ITokens, user: IUser, setCookie: (key: string, value: string) => void) => {
    const { accessToken, refreshToken } = tokens;
    if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
    }
    if (refreshToken) {
        setCookie('refreshToken', refreshToken);
    }
}
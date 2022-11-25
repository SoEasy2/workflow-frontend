import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '../defaultes';
import { IUser } from '../interfaces/user.interface';
import { IUserState } from '../interfaces/userState.interface';

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userSet(state: IUserState, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    userUpdate(state: IUserState, action: PayloadAction<Partial<IUser>>) {
      state.user = { ...state.user, ...action.payload } as IUser;
    },
  },
});

export default userSlice.reducer;

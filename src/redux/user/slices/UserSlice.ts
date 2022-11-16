import { createSlice } from "@reduxjs/toolkit";
import { initialState } from '../defaultes/initialState';

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
})

export default userSlice.reducer;
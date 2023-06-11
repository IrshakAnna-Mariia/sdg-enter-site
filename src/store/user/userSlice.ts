import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import { UserProps } from './user.types';

const initialState: UserProps = {
    username: '',
    email: '',
    password: '',
    role: '',
    phone: '',
    birthdate: '',
    first_name: '',
    last_name: '',
    accessToken: '',
    idToken: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (
      state,
      { payload: { accessToken, idToken } }: PayloadAction<{ accessToken: string; idToken: string }>,
    ) => {
      state.accessToken = accessToken;
      state.idToken = idToken;
    },
    setUser: (state, action: PayloadAction<UserProps>) => {
    },
    clearUser: (): UserProps => {
      Cookies.remove('accessToken');
      return initialState;
    },
  },
});

export const { setToken, setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;

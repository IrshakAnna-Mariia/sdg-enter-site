import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import { UserBody, UserProps } from './user.types';

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
  refreshToken: '',
  level: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, { payload: { access, refresh } }: PayloadAction<{ access: string; refresh: string }>) => {
      state.accessToken = access;
      state.refreshToken = refresh;
      Cookies.set('access', access);
    },
    setUser: (state, action: PayloadAction<{ access: string; refresh: string; user: UserBody }>) => {
      Cookies.set('access', action.payload.access);
      return { accessToken: action.payload.access, refreshToken: action.payload.refresh, ...action.payload.user };
    },
    clearUser: () => {
      Cookies.remove('access');
      return initialState;
    },
  },
});

export const { setToken, setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;

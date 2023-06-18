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
  refreshToken: '',
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
    setUser: (state, action: PayloadAction<UserProps>) => {},
    clearUser: () => {
      Cookies.remove('access');
      return initialState;
    },
  },
});

export const { setToken, setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

export interface UserInfo {
  email: string;
  password: string;
}

export interface AuthState {
  user: UserInfo | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
    updateUser(state, action: PayloadAction<UserInfo>) {
      state.user = { ...state.user, ...action.payload };
      state.isAuthenticated = true;
    },
  },
});

const persistConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['user', 'isAuthenticated'],
};

export const { logout, updateUser } = userSlice.actions;
export default persistReducer<AuthState>(persistConfig, userSlice.reducer);

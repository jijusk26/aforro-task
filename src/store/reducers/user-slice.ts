import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

export interface UserInfo {
  email: string;
  password: string;
}

export interface AddressBO {
  address: string;
  landmark: string;
  city: string;
  type: 'Home' | 'Office' | 'Other';
  isDefault: boolean;
  pinCode: string | number;
}

export interface AuthState {
  user: UserInfo | null;
  isAuthenticated: boolean;
  address: AddressBO[];
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  address: [],
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
    addAddress(state, action: PayloadAction<AddressBO>) {
      if (!action.payload.isDefault) {
        state.address = [...state.address, action.payload];
      } else {
        const address = [...state.address];

        let filtered = address.map(ad => {
          return { ...ad, isDefault: false };
        });

        state.address = filtered.concat(action.payload);
      }
    },
  },
});

const persistConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['user', 'isAuthenticated', 'address'],
};

export const { logout, updateUser, addAddress } = userSlice.actions;
export default persistReducer<AuthState>(persistConfig, userSlice.reducer);

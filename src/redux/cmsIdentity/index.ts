import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CmsIdentity {
  identityId?: string;
  username: string;
  fullName: string;
  avatarUrl?: string;
  isLoggedIn: boolean;
  isOAuthOk?: boolean;
}

export const cmsIdentity = createSlice({
  name: 'brj/cmsIdentity',
  initialState: null as CmsIdentity | null,
  reducers: {
    setIdentity: (state, action: PayloadAction<CmsIdentity | null>) => {
      return action.payload;
    },
    setOAuthStatus: (state, action: PayloadAction<boolean>) => {
      if (!state) return;
      state.isOAuthOk = action.payload;
    },
  },
});

export const { setIdentity, setOAuthStatus } = cmsIdentity.actions;

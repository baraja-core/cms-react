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
  },
});

export const { setIdentity } = cmsIdentity.actions;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum OAuthStatus {
  Ok = 'ok',
  NotOk = 'notOk',
  Waiting = 'waiting',
}

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
  initialState: {
    loaded: false,
    identity: null as CmsIdentity | null,
  },
  reducers: {
    setIdentity: (state, action: PayloadAction<CmsIdentity | null>) => {
      state.loaded = true;
      state.identity = action.payload;
    },
    setIdentityLoaded: (state) => {
      state.loaded = true;
    },
    setOAuthStatus: (state, action: PayloadAction<boolean | undefined>) => {
      if (!state.identity) return;
      state.identity.isOAuthOk = action.payload;
    },
  },
});

export const { setIdentity, setIdentityLoaded, setOAuthStatus } = cmsIdentity.actions;

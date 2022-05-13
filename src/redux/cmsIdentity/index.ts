import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CmsIdentity {
  username: string;
  fullName: string;
  avatarUrl?: string;
  isLoggedIn: boolean;
}

export const cmsIdentity = createSlice({
  name: "brj/cmsIdentity",
  initialState: null as CmsIdentity | null,
  reducers: {
    setIdentity: (state, action: PayloadAction<CmsIdentity>) => {
      return action.payload;
    },
  },
});

export const { setIdentity } = cmsIdentity.actions;

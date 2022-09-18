import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationQueue } from '../../core/notification/NotificationContext';

export interface Settings {
  theme: string;
  notificationQueue: NotificationQueue;
}

export type SettingsDiff = Partial<Settings>;

const initialState: Settings = {
  theme: 'light',
  notificationQueue: { items: [], ignorableTags: [] },
};

export const settings = createSlice({
  name: 'brj/settings',
  initialState: initialState,
  reducers: {
    setSettingsDiff: (state, action: PayloadAction<SettingsDiff>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setSettingsDiff } = settings.actions;

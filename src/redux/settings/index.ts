import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationQueue } from '../../core/notification/NotificationContext';

export interface Settings {
  theme: string;
  notificationQueue: NotificationQueue;
  serverSettings?: ServerSettings;
}

export interface GlobalSettingsResponse {
  startWeekday: number;
}

export interface MenuItem {
  key: string;
  title: string;
  pluginName: string;
  priority: number;
  link: string;
  icon?: string;
  child: MenuItem[];
}

export interface ServerSettings {
  isDebug: boolean;
  basePath: string;
  staticAssets: unknown[];
  projectName: string;
  locale: string;
  menu: MenuItem[];
  globalSettings: GlobalSettingsResponse;
  settings: { user: Record<string, string | null | undefined> };
  currentVersion: string;
  installationHash: string;
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

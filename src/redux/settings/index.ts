import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLeading } from 'redux-saga/effects';
import { apiClient } from '../apiClient';
import { NotificationQueue } from '../../core/notification/NotificationContext';

export interface Settings {
  loading: boolean;
  theme: string;
  online?: boolean;
  runnerRegistered?: boolean;
  keepAuthOk?: boolean | 'error';
  keepAuthLastCall?: number;
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
  loading: false,
  theme: 'light',
  notificationQueue: { items: [], ignorableTags: [] },
};

export const settings = createSlice({
  name: 'brj/settings',
  initialState: initialState,
  reducers: {
    loadSettings(state) {
      state.loading = true;
    },
    setSettingsDiff: (state, action: PayloadAction<SettingsDiff>) => ({ ...state, loading: false, ...action.payload }),
  },
});

export const { loadSettings, setSettingsDiff } = settings.actions;

function* loadSettingsEndpointSaga() {
  const settingsEndpoint = () => apiClient.get<ServerSettings>(`api/v1/cms/settings`);
  const response: Awaited<ReturnType<typeof settingsEndpoint>> = yield call(settingsEndpoint);
  yield put(setSettingsDiff({ serverSettings: response.data }));
}

export function* loadSettingsSaga() {
  yield takeLeading(loadSettings.type, loadSettingsEndpointSaga);
}

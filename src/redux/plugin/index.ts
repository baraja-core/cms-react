import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLeading } from 'redux-saga/effects';
import { apiClient } from '../apiClient';

export interface PluginComponent {
  key: string;
  name: string;
  tab: string;
  source: string;
  position: number;
  params: Record<string, string | number | null>;
}

export interface PluginStructure {
  staticAssets: { format: string; url: string }[];
  title?: string;
  activeKey: string;
  components: PluginComponent[];
}

export interface PluginResponse {
  name: string;
  plugin: PluginStructure;
}

export interface PluginState {
  structureList: Record<string, PluginStructure | null>;
  selectedPlugin?: string;
}

const initialState: PluginState = {
  structureList: {},
};

export const plugin = createSlice({
  name: 'brj/plugin',
  initialState: initialState,
  reducers: {
    loadPlugin: (state, action: PayloadAction<string>) => {
      state.structureList[action.payload] = null;
    },
    loadPluginSuccess: (state, action: PayloadAction<PluginResponse>) => {
      const { name, plugin } = action.payload;
      state.structureList[name] = plugin;
    },
    selectPlugin: (state, action: PayloadAction<string | undefined>) => {
      state.selectedPlugin = action.payload;
    },
  },
});

export const { loadPlugin, loadPluginSuccess, selectPlugin } = plugin.actions;

function* loadPluginEndpointSaga(request: PayloadAction<string>) {
  const pluginEndpoint = () => apiClient.get<PluginStructure>(`api/v1/cms/plugin?name=${request.payload}`);
  const response: Awaited<ReturnType<typeof pluginEndpoint>> = yield call(pluginEndpoint);
  yield put(loadPluginSuccess({ name: request.payload, plugin: response.data }));
}

export function* loadPluginSaga() {
  yield takeLeading(loadPlugin.type, loadPluginEndpointSaga);
}

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLeading } from 'redux-saga/effects';
import { CmsIdentity, setIdentity } from '../../redux/cmsIdentity';
import { apiClient } from '../apiClient';
import { resolveDefaultOrganisation } from '../../core/cas/resolveDefaultOrganisation';

export interface OrganisationResponse {
  slug: string;
  name: string;
  default: boolean;
  adminAccess: boolean;
  description?: string;
}

export interface CasResponse {
  organisations: OrganisationResponse[];
  identity?: CmsIdentity;
}

export interface CasLoginResponse {
  isLoggedIn: boolean;
  errorMessage?: string;
  identityId: string;
  requireOtp: boolean;
  fullName: string;
  avatarUrl: string;
}

export interface CasState {
  success: boolean;
  selectedOrganisation?: string;
  organisations: OrganisationResponse[];
}

const initialState: CasState = {
  success: false,
  selectedOrganisation: undefined,
  organisations: [],
};

export const cas = createSlice({
  name: 'brj/cas',
  initialState: initialState,
  reducers: {
    loadCasDefault() {},
    setCasDefault: (state, action: PayloadAction<CasResponse>) => {
      const { organisations } = action.payload;
      state.success = true;
      state.organisations = organisations;
    },
    selectOrganisation: (state, action: PayloadAction<string>) => {
      state.selectedOrganisation = action.payload ? action.payload : undefined;
    },
  },
});

export const { loadCasDefault, setCasDefault, selectOrganisation } = cas.actions;

function* loadCasDefaultEndpointSaga() {
  const casDefaultEndpoint = () => apiClient.get<CasResponse>(`api/v1/cas`);
  const response: Awaited<ReturnType<typeof casDefaultEndpoint>> = yield call(casDefaultEndpoint);
  const defaultOrganisation = resolveDefaultOrganisation(response.data.organisations);
  yield put(setCasDefault(response.data));
  if (defaultOrganisation) yield put(selectOrganisation(defaultOrganisation.slug));
  if (response.data.identity) yield put(setIdentity(response.data.identity));
}

export function* loadCasDefaultSaga() {
  yield takeLeading(loadCasDefault.type, loadCasDefaultEndpointSaga);
}

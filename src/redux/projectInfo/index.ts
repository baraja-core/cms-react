import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLeading } from 'redux-saga/effects';
import { getProjectInfoEndpoint } from './api';
import { ApiState, createApiState } from '../apiState';

export interface ProjectInfo {
  projectName: string;
}

const initialState: ApiState<ProjectInfo> = createApiState();

export const projectInfo = createSlice({
  name: 'brj/projectInfo',
  initialState: initialState,
  reducers: {
    setProjectInfo: (state, action: PayloadAction<ProjectInfo>) => {
      return {
        ...state,
        data: action.payload,
        loading: false,
        success: true,
      };
    },
  },
});

export function* fetchProjectInfo(action: PayloadAction) {
  const response: Awaited<ReturnType<typeof getProjectInfoEndpoint>> = yield call(
    getProjectInfoEndpoint /*, action.payload*/
  );

  yield put(setProjectInfo(response.data));
}

export function* projectInfoSaga() {
  yield takeLeading(setProjectInfo.type, fetchProjectInfo);
}

export const { setProjectInfo } = projectInfo.actions;

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all, spawn } from 'redux-saga/effects';
import { brjReducer } from './reducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    brj: brjReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

function* rootSaga() {
  yield all([...sagas].map((saga) => spawn(saga)));
}

sagaMiddleware.run(rootSaga);

import { combineReducers } from 'redux';
import { localization } from './localization';
import { cmsIdentity } from './cmsIdentity';
import { settings } from './settings';

export const brjReducer = combineReducers({
  cmsIdentity: cmsIdentity.reducer,
  localization: localization.reducer,
  settings: settings.reducer,
});

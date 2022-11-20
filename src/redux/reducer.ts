import { combineReducers } from 'redux';
import { cas } from './cas';
import { cmsIdentity } from './cmsIdentity';
import { localization } from './localization';
import { plugin } from './plugin';
import { settings } from './settings';

export const brjReducer = combineReducers({
  cas: cas.reducer,
  cmsIdentity: cmsIdentity.reducer,
  localization: localization.reducer,
  plugin: plugin.reducer,
  settings: settings.reducer,
});

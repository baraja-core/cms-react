import { combineReducers } from 'redux';
import { localization } from './localization';
import { cmsIdentity } from './cmsIdentity';
import { projectInfo } from './projectInfo';
import { settings } from './settings';

export const brjReducer = combineReducers({
  cmsIdentity: cmsIdentity.reducer,
  localization: localization.reducer,
  projectInfo: projectInfo.reducer,
  settings: settings.reducer,
});

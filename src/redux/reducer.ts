import { combineReducers } from "redux";
import { localization } from "./localization";
import { cmsIdentity } from "./cmsIdentity";
import { projectInfo } from "./projectInfo";

export const brjReducer = combineReducers({
  localization: localization.reducer,
  cmsIdentity: cmsIdentity.reducer,
  projectInfo: projectInfo.reducer,
});

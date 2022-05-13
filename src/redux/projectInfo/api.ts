import { ProjectInfo } from "./index";
import { apiClient } from "../apiClient";

export const getProjectInfoEndpoint = () => {
  return apiClient.get<ProjectInfo>(`api/v1/cms/project-info`);
};

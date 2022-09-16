import { ProjectInfo } from './index';
import { apiClient } from '../apiClient';

export const getProjectInfoEndpoint = () => apiClient.get<ProjectInfo>(`api/v1/cms/project-info`);

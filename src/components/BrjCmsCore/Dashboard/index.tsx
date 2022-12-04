import { useState } from 'react';
import { useEffectOnce } from '../../../hook/useEffectOnce';
import { DashboardTopicEditor } from './DashboardTopicEditor';
import { DashboardFeed } from './DashboardFeed';
import { Box } from '@mui/material';
import { apiClient } from '../../../redux/apiClient';
import { DefaultButton, Spinner } from '@fluentui/react';

interface DashboardFeedItemUser {
  id: number;
  username: string;
  avatarUrl?: string;
}

export interface DashboardFeedItem {
  id: number;
  message: string;
  pinned: boolean;
  showSince: string;
  user: DashboardFeedItemUser;
  children: { id: number; message: string; showSince: string; user: DashboardFeedItemUser }[];
}

export interface DashboardResponse {
  feed: DashboardFeedItem[];
}

export const Dashboard = () => {
  const [dashboard, setDashboard] = useState<DashboardResponse | undefined>();
  const [openNewTopic, setOpenNewTopic] = useState(false);

  const loadData = () => {
    apiClient.get<DashboardResponse>(`api/v1/cms-dashboard/feed`).then((response) => setDashboard(response.data));
  };

  useEffectOnce(() => {
    loadData();
  });

  return (
    <Box>
      <h1>Intranet</h1>
      <Box sx={{ marginBottom: '.5em' }}>
        <DefaultButton onClick={() => setOpenNewTopic(!openNewTopic)}>Compose a new topic</DefaultButton>
      </Box>
      {openNewTopic && <DashboardTopicEditor updateCallback={() => loadData()} />}
      {dashboard ? <DashboardFeed items={dashboard.feed} updateCallback={() => loadData()} /> : <Spinner size={3} />}
    </Box>
  );
};

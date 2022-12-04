import { FC } from 'react';
import { Box } from '@mui/material';
import { PersonaSize } from '@fluentui/react';
import { DashboardFeedItem } from './index';
import { DashboardTopicEditor } from './DashboardTopicEditor';
import { UserPersona } from '../../User/UserPersona';

interface DashboardFeedProps {
  items: DashboardFeedItem[];
  updateCallback?: () => void;
}

export const DashboardFeed: FC<DashboardFeedProps> = ({ items, updateCallback }) => {
  return (
    <Box>
      {items.map((item) => (
        <Box
          key={item.id}
          sx={{
            border: '1px solid #ddd',
            borderRadius: '0.25rem',
            boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
            padding: 1,
            margin: '1em 0',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Box>
              <UserPersona id={item.user.id} username={item.user.username} size={PersonaSize.size40} />
            </Box>
            <Box>
              <Box>
                <b>{item.user.username}</b>
              </Box>
              <Box>{item.showSince}</Box>
            </Box>
          </Box>
          <Box sx={{ marginTop: '.5em', marginBottom: '1em' }}>{item.message}</Box>
          {item.children.length > 0 && (
            <Box>
              {item.children.map((comment) => (
                <Box
                  key={comment.id}
                  sx={{ display: 'flex', borderTop: '1px solid #ccc', marginTop: 1, paddingTop: 1 }}
                >
                  <Box sx={{ marginRight: '.5em' }}>
                    <UserPersona id={comment.user.id} username={comment.user.username} />
                  </Box>
                  <Box sx={{ width: '100%' }}>
                    <Box>
                      <b>{comment.user.username}</b>
                    </Box>
                    <Box>{comment.message}</Box>
                  </Box>
                </Box>
              ))}
            </Box>
          )}
          <Box sx={{ display: 'flex', marginTop: 1, paddingTop: 1 }}>
            <Box sx={{ marginRight: '.5em' }}>
              <UserPersona id="me" />
            </Box>
            <Box sx={{ width: '100%' }}>
              <DashboardTopicEditor parent={item.id} updateCallback={updateCallback} />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

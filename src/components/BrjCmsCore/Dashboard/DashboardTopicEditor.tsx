import React, { FC, useState } from 'react';
import { Box, TextField } from '@mui/material';
import { PrimaryButton, Spinner } from '@fluentui/react';
import { apiClient } from '../../../redux/apiClient';

interface DashboardTopicEditorProps {
  parent?: number;
  updateCallback?: () => void;
}

export const DashboardTopicEditor: FC<DashboardTopicEditorProps> = ({ parent, updateCallback }) => {
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const post = () => {
    if (!message) return;
    setSending(true);
    apiClient.post(`api/v1/cms-dashboard/post-topic`, { message: message, parentId: parent }).then((response) => {
      setSending(false);
      setMessage('');
      updateCallback && updateCallback();
    });
  };

  return (
    <Box>
      <TextField
        value={message}
        size="small"
        multiline={true}
        rows={parent ? 2 : 4}
        onChange={(e) => setMessage(e.target.value)}
        fullWidth
        sx={{ marginBottom: '.5em' }}
      />
      {(!parent || message) && (
        <Box sx={{ minHeight: '3em' }}>
          {sending ? (
            <Spinner size={3} />
          ) : (
            <PrimaryButton onClick={() => post()}>{parent ? 'Post a comment' : 'Post'}</PrimaryButton>
          )}
        </Box>
      )}
    </Box>
  );
};

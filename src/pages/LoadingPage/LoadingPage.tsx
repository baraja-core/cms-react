import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { Spinner } from '@fluentui/react';
import theme from '../../theme/theme';

export const LoadingPage = () => (
  <Box
    sx={{
      background: theme.palette.background,
      display: 'flex',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <Box sx={{ width: '6em', margin: 'auto' }}>
      <CssBaseline />
      <Spinner size={3} />
    </Box>
  </Box>
);

import React, { FC, ReactNode } from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import theme from '../../theme/theme';

interface CenteredContentProps {
  children?: ReactNode;
}

export const CenteredContent: FC<CenteredContentProps> = ({ children }) => {
  return (
    <Box
      sx={{
        background: theme.palette.background,
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Container maxWidth="sm">
        <CssBaseline />
        <Box sx={{ borderRadius: '0.25rem', boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)' }}>{children}</Box>
      </Container>
    </Box>
  );
};

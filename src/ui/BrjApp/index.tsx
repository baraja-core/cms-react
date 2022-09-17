import { FC, ReactNode } from 'react';
import { Box } from '@mui/system';

interface AppProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  stickyHeader?: boolean;
}

const BrjApp: FC<AppProps> = ({ children, header, footer, stickyHeader }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    {stickyHeader ? (
      <Box
        sx={{
          zIndex: 1000,
          position: 'fixed',
          left: 0,
          top: 0,
          width: '100%',
        }}
      >
        {header}
      </Box>
    ) : (
      header
    )}
    {stickyHeader ? <Box sx={{ marginTop: '50px' }}>{children}</Box> : children}
    {footer}
  </Box>
);

export default BrjApp;

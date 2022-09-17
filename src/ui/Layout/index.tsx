import { FC, ReactNode } from 'react';
import { Container } from '@mui/material';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => <Container sx={{ marginTop: '1.5em' }}>{children}</Container>;

export default Layout;

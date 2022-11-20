import { FC, ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import { Theme } from '../../core/ThemeContext';
import Logo from '../Logo';
import { Color } from '../palette';

interface HeaderProps {
  children?: ReactNode;
}

const Header: FC<HeaderProps> = ({ children }) => (
  <Box
    sx={{
      height: '50px',
      padding: '.6em',
      borderBottom: '1px solid black',
      background: Color.Dark,
      color: 'white',
    }}
  >
    <Container maxWidth="xl">
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '.5em' }}>
          <a href="/">
            <Logo height={20} theme={Theme.Dark} />
          </a>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right', width: '100%' }}>{children}</Box>
      </Box>
    </Container>
  </Box>
);

export default Header;

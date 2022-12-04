import { FC } from 'react';
import { Box } from '@mui/material';
import { Theme } from '../../core/ThemeContext';
import { Color } from '../../ui/palette';
import AdminBarUser from './AdminBarUser';
import AdminBarSearch from './AdminBarSearch';
import Logo from '../../ui/Logo';
import HomeIcon from '@mui/icons-material/Home';
import { DefaultButton } from '@fluentui/react';

const AdminBar: FC = () => (
  <Box
    sx={{
      zIndex: 99999,
      position: 'fixed',
      left: 0,
      top: 0,
      background: Color.GrayDark,
      width: '100%',
      maxWidth: '100vw',
      height: '45px',
      boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.05)',
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    }}
  >
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', padding: '0 .5em' }}>
        <Logo height={20} theme={Theme.Dark} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <a href="/">
          <HomeIcon />
        </a>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', margin: '0 .25em' }}>
        <DefaultButton href="/admin">Admin</DefaultButton>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', margin: '0 .25em' }}>
        <DefaultButton href="/api-documentation" target="_blank" rel="noreferrer">
          API&nbsp;Doc
        </DefaultButton>
      </Box>
      <Box sx={{ width: '100%' }}>Content</Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <AdminBarSearch />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }} role="navigation">
        <AdminBarUser />
      </Box>
    </Box>
  </Box>
);

export default AdminBar;

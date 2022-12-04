import { FC, useState } from 'react';
import { Box, Button, ButtonBase } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useCas } from '../../hook/useCas';
import { DefaultButton, PersonaSize } from '@fluentui/react';
import { Color } from '../../ui/palette';
import { UserAvatar } from '../User/UserAvatar';
import { UserPersona } from '../User/UserPersona';
import { useLinkGenerator } from '../../hook/useLinkGenerator';
import useCmsIdentity from '../../hook/useCmsIdentity';

const AdminBarUser: FC = () => {
  const [open, setOpen] = useState(false);
  const { getIdentity } = useCmsIdentity();
  const { logout } = useCas();
  const { link } = useLinkGenerator();
  const identity = getIdentity();

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        sx={{
          color: 'white',
          background: open ? 'rgba(255,255,255,.2)' : undefined,
          textTransform: 'none',
          padding: 0,
          paddingLeft: 1,
          height: '45px',
        }}
      >
        {identity && (
          <>
            <UserPersona id="me" size={PersonaSize.size32} />
            <span style={{ whiteSpace: 'nowrap' }}>{identity.fullName}</span>
          </>
        )}
        <ExpandMore />
      </Button>
      {identity && open && (
        <Box
          sx={{
            position: 'absolute',
            width: '300px',
            top: '45px',
            right: 0,
            marginRight: '10px',
            color: '#333',
            backgroundColor: '#fff',
            border: 0,
            borderBottomLeftRadius: '.5rem',
            borderBottomRightRadius: '.5rem',
            listStyle: 'none',
            padding: 0,
            zIndex: 99998,
            boxShadow: '0 .5rem 2rem rgba(0, 0, 0, .20)',
          }}
        >
          <Box sx={{ textAlign: 'center', padding: '1em' }}>
            <UserAvatar size={64} centered />
            <Box sx={{ marginTop: 1 }}>
              <span style={{ whiteSpace: 'nowrap' }}>{identity.fullName}</span>
            </Box>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <DefaultButton href={link('my-profile')}>Manage your account</DefaultButton>
          </Box>
          <Box sx={{ marginTop: '1em' }}>
            <ButtonBase
              href={link('settings')}
              sx={{ width: '100%', marginBottom: '.5em', padding: '.75em', background: Color.GrayLight }}
            >
              Settings
            </ButtonBase>
          </Box>
          <Box sx={{ display: 'flex', padding: '1em', marginTop: '.5em', borderTop: '1px solid black' }}>
            <Box sx={{ width: '45%' }}>
              <DefaultButton onClick={() => logout()}>Sign out</DefaultButton>
            </Box>
            <Box sx={{ width: '55%', textAlign: 'right' }}>
              <DefaultButton>Debug mode</DefaultButton>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default AdminBarUser;

import { FC, useState } from 'react';
import { Avatar, Box, Button, MenuItem } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import useCmsIdentity from '../../hook/useCmsIdentity';

const AdminBarUser: FC = () => {
  const [open, setOpen] = useState(false);
  const { getIdentity, logout } = useCmsIdentity();
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
            <Avatar src={identity.avatarUrl} alt="Avatar" sx={{ marginRight: 1, width: '32px', height: '32px' }} />
            <span style={{ whiteSpace: 'nowrap' }}>{identity.fullName}</span>
          </>
        )}
        <ExpandMore />
      </Button>
      {open && (
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            top: '45px',
            textAlign: 'center',
            color: '#333',
            backgroundColor: '#fff',
            border: 0,
            borderBottomLeftRadius: '.5rem',
            borderBottomRightRadius: '.5rem',
            listStyle: 'none',
            padding: 0,
            paddingBottom: '10px',
            zIndex: 99998,
            boxShadow: '0 .5rem 2rem rgba(0, 0, 0, .20)',
          }}
        >
          <MenuItem href="http://localhost:81/baraja/nordic-craft.cz/www/admin">Dashboard</MenuItem>
          <hr />
          <MenuItem href="http://localhost:81/baraja/nordic-craft.cz/www/admin/user/detail?id=1">My Profile</MenuItem>
          <hr />
          <MenuItem>Settings</MenuItem>
          <MenuItem>Sign out</MenuItem>
          <MenuItem>Debug mode</MenuItem>
        </Box>
      )}
    </>
  );
};

export default AdminBarUser;

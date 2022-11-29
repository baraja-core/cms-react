import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { CenteredContent } from '../../ui/Page/CenteredContent';
import { useCas } from '../../hook/useCas';
import FlashMessage from '../../components/BrjCmsCore/FlashMessage';
import AdminBar from '../../components/AdminBar';
import useCmsIdentity from '../../hook/useCmsIdentity';

export const OneTimePasswordPage = () => {
  const { isLoggedIn } = useCmsIdentity();
  const { verifyOAuthStatus, logout } = useCas();
  const [code, setCode] = useState('');

  useEffect(() => {
    const truncated = code.replace(/\s+/, '');
    if (code !== truncated) setCode(truncated);
    if (truncated.length === 6) verifyOAuthStatus(truncated);
  }, [code]);

  return (
    <CenteredContent>
      <>
        <FlashMessage />
        {isLoggedIn() && <AdminBar />}
        <Box sx={{ background: 'white', p: 2 }}>
          <Box>
            <TextField value={code} onChange={(e) => setCode(e.target.value)} placeholder="X X X X X X" fullWidth />
          </Box>
          <Box sx={{ marginTop: 3 }}>
            <Button variant="contained" onClick={() => verifyOAuthStatus(code)}>
              Verify
            </Button>
          </Box>
          <Box sx={{ marginTop: 3 }}>
            <Button variant="contained" onClick={() => logout()}>
              Logout
            </Button>
          </Box>
        </Box>
      </>
    </CenteredContent>
  );
};

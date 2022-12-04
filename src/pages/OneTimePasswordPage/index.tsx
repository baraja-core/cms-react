import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { DefaultButton, Spinner } from '@fluentui/react';
import { CenteredContent } from '../../ui/Page/CenteredContent';
import { OAuthStatus } from '../../redux/cmsIdentity';
import { useCas } from '../../hook/useCas';
import { useEffectOnce } from '../../hook/useEffectOnce';
import FlashMessage from '../../components/BrjCmsCore/FlashMessage';
import LoginHelpCenter from '../LoginPage/LoginHelpCenter';
import useCmsIdentity from '../../hook/useCmsIdentity';

export const OneTimePasswordPage = () => {
  const { verifyOAuthStatus, logout } = useCas();
  const { getOAuthStatus } = useCmsIdentity();
  const [code, setCode] = useState('');
  const [hasTry, setHasTry] = useState(false);
  const status = getOAuthStatus();
  const loading = hasTry && status === OAuthStatus.Waiting;
  const codeIdentifier = 'verification-code-input';

  useEffect(() => {
    const truncated = code.replace(/\s+|[^\d]+/g, '');
    if (code !== truncated) setCode(truncated);
    if (truncated.length === 6) {
      setHasTry(true);
      verifyOAuthStatus(truncated);
      setCode('');
    }
    document.getElementById(codeIdentifier)?.focus();
  }, [code, status]);

  useEffectOnce(() => {
    document.getElementById(codeIdentifier)?.focus();
  });

  return (
    <CenteredContent>
      <>
        <FlashMessage />
        <Box sx={{ background: 'white', p: '1.5em 1em', borderRadius: '.25rem' }}>
          <Box sx={{ fontSize: '18pt', textAlign: 'center', margin: '1em 0' }}>📱 Authentication code</Box>
          <Box>
            <TextField
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="X X X X X X"
              fullWidth
              autoComplete="one-time-code"
              sx={{ fontSize: '24pt', letterSpacing: '.25em' }}
              disabled={loading}
              id={codeIdentifier}
            />
          </Box>
          <Box sx={{ marginTop: 1 }}>
            <small>Enter the code from your 2-step verification application.</small>
          </Box>
          <Box sx={{ marginTop: 3, minHeight: '3em' }}>
            {loading ? (
              <Spinner size={3} />
            ) : (
              <Button variant="contained" fullWidth onClick={() => verifyOAuthStatus(code)}>
                Verify code
              </Button>
            )}
          </Box>
          <Box sx={{ display: 'flex', background: 'white', padding: '.5em 0' }}>
            <Box sx={{ width: '60%' }}>
              <DefaultButton onClick={() => logout()}>Logout</DefaultButton>
            </Box>
            <Box sx={{ width: '40%', display: 'flex', justifyContent: 'right' }}>
              <LoginHelpCenter />
            </Box>
          </Box>
        </Box>
      </>
    </CenteredContent>
  );
};

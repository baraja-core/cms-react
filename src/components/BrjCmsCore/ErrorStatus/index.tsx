import { useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { Color } from '../../../ui/palette';
import { useSettings } from '../../../hook/useSettings';
import { useSystemStatus } from '../../../hook/useSystemStatus';

export const ErrorStatus = () => {
  const [learnMore, setLearnMore] = useState(false);
  const { settings } = useSettings();
  const { callKeepConnection } = useSystemStatus();

  return (
    <>
      {(settings.online === false || settings.keepAuthOk === 'error') && (
        <Box sx={{ position: 'absolute', left: 0, top: '45px', width: '100%' }}>
          <Box
            sx={{
              background: Color.WarningBackground,
              border: `1px solid ${Color.WarningBorder}`,
              borderRadius: '4px',
              textAlign: 'center',
              padding: '.25em',
              margin: 'auto',
              maxWidth: '35em',
              boxShadow: 8,
            }}
          >
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Oops... Not connected. Results may be limited.
            </Box>{' '}
            <Box
              component="span"
              sx={{ textDecoration: 'underline', cursor: 'pointer' }}
              onClick={() => callKeepConnection()}
            >
              Retry&nbsp;now
            </Box>{' '}
            <Box
              component="span"
              sx={{ textDecoration: 'underline', cursor: 'pointer' }}
              onClick={() => setLearnMore(true)}
            >
              Learn&nbsp;more
            </Box>
          </Box>
        </Box>
      )}
      <Modal open={learnMore} onClose={() => setLearnMore(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '35em',
            background: Color.White,
            p: 2,
            boxShadow: 8,
          }}
        >
          <Typography variant="h6" component="h2">
            Offline CMS
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <p>
              CMS partially supports the offline mode you are currently in. You can tell when this mode is activated by
              the constantly displayed bar, which indicates that CMS is actively trying to connect to the server.
            </p>
            <p>
              In offline mode, some features may be unavailable. Searches are only performed on data that you have
              downloaded locally from the past. If you make changes, they may not always be saved (depending on the
              specific plugin).
            </p>
            <p>
              When you connect to the server, your local settings and changes will be automatically synchronized. We
              recommend not to use offline mode.
            </p>
          </Typography>
          <Button variant="outlined" onClick={() => setLearnMore(false)}>
            OK
          </Button>
        </Box>
      </Modal>
    </>
  );
};

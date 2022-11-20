import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

export const ForgottenPassword = () => {
  const [sent, setSent] = useState(false);

  const process = () => {
    setSent(true);
  };

  return (
    <Box>
      <TextField label="Enter your username or e-mail" size="small" fullWidth sx={{ margin: '1em 0' }} />
      <Button variant="contained" onClick={() => process()}>
        Send
      </Button>
    </Box>
  );
};

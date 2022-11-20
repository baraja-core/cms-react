import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

export const ForgottenUsername = () => {
  const [sent, setSent] = useState(false);

  const process = () => {
    setSent(true);
  };

  return (
    <Box>
      <p>
        Enter your real name and last name. If a user with this name exists, we will send further instructions to their
        email address.
      </p>
      <TextField label="Enter your full real name" size="small" fullWidth sx={{ margin: '1em 0' }} />
      <Button variant="contained" onClick={() => process()}>
        Send
      </Button>
    </Box>
  );
};

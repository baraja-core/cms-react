import { useState } from 'react';
import { Box, TextField } from '@mui/material';
import { PrimaryButton } from '@fluentui/react';

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
      <PrimaryButton onClick={() => process()}>Send</PrimaryButton>
    </Box>
  );
};

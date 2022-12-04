import { useState } from 'react';
import { Box, TextField } from '@mui/material';
import { PrimaryButton } from '@fluentui/react';

export const ForgottenPassword = () => {
  const [sent, setSent] = useState(false);

  const process = () => {
    setSent(true);
  };

  return (
    <Box>
      <TextField label="Enter your username or e-mail" size="small" fullWidth sx={{ margin: '1em 0' }} />
      <PrimaryButton onClick={() => process()}>Send</PrimaryButton>
    </Box>
  );
};

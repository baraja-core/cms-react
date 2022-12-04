import { useState } from 'react';
import { Box, TextField } from '@mui/material';
import { PrimaryButton } from '@fluentui/react';

export const OtherProblem = () => {
  const [sent, setSent] = useState(false);

  const process = () => {
    setSent(true);
  };

  return (
    <Box>
      {sent ? (
        <Box>
          <p>Your request has been sent.</p>
          <p>
            Thank you for submitting your request, which was automatically sent to the administrator of this project. If
            we need further information, we will contact you at the e-mail provided.
          </p>
          <p>
            Approximate response time cannot be predicted in advance, please be patient. In urgent cases, please contact
            the administrator by other means.
          </p>
        </Box>
      ) : (
        <Box>
          <p>
            Please describe your problem in as much detail as possible and be sure to mention all the important details.
            Your message will be delivered directly to the administrator of this project, who will contact you.
          </p>
          <TextField label="Problem description" size="small" fullWidth multiline rows={6} />
          <TextField type="email" label="Your contact e-mail" size="small" fullWidth sx={{ margin: '1em 0' }} />
          <PrimaryButton onClick={() => process()}>Send</PrimaryButton>
          <Box sx={{ marginTop: '1em' }}>
            <i>Never share personal information that cannot be seen by the administrator of this project.</i>
          </Box>
        </Box>
      )}
    </Box>
  );
};

import React, { ReactNode, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ForgottenPassword } from './ForgottenPassword';
import { ForgottenUsername } from './ForgottenUsername';
import { OtherProblem } from './OtherProblem';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

enum PageType {
  ForgotPassword = 'password',
  ForgotUsername = 'username',
  Other = 'other',
}

interface PageItem {
  type: PageType;
  label: string;
  body: ReactNode;
}

const pages: PageItem[] = [
  {
    type: PageType.ForgotPassword,
    label: 'Forgotten password',
    body: <ForgottenPassword />,
  },
  { type: PageType.ForgotUsername, label: 'Forgotten username', body: <ForgottenUsername /> },
  { type: PageType.Other, label: 'Other problem', body: <OtherProblem /> },
];

const HelpCenter = () => {
  const [page, setPage] = useState<PageType>();

  const currentPage = pages.find((pageItem) => pageItem.type === page);

  return (
    <Box>
      {currentPage ? (
        <Box>
          <Button onClick={() => setPage(undefined)} sx={{ marginBottom: '1em' }}>
            <ArrowBackIosIcon />
            Back
          </Button>
          <h3>{currentPage.label}</h3>
          {currentPage.body}
        </Box>
      ) : (
        <>
          <Typography sx={{ marginBottom: '1em' }}>What can we help you with?</Typography>
          {pages.map((pageItem) => (
            <Box key={pageItem.type}>
              <Button variant="outlined" onClick={() => setPage(pageItem.type)} sx={{ marginBottom: '.5em' }}>
                {pageItem.label}
              </Button>
            </Box>
          ))}
        </>
      )}
    </Box>
  );
};

export default HelpCenter;

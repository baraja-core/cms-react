import React, { ReactNode, useState } from 'react';
import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

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
    body: <Box>a</Box>,
  },
  { type: PageType.ForgotUsername, label: 'Forgotten username', body: <Box>a</Box> },
  { type: PageType.Other, label: 'Other problem', body: <Box>a</Box> },
];

const LoginHelpCenterBody = () => {
  const [page, setPage] = useState<PageType>();

  const currentPage = pages.find((pageItem) => pageItem.type === page);

  return (
    <Box>
      {currentPage ? (
        <Box>
          <Button onClick={() => setPage(undefined)}>Back</Button>
          <h3>{currentPage.label}</h3>
          {currentPage.body}
        </Box>
      ) : (
        <>
          <Typography>What can we help you with?</Typography>
          {pages.map((pageItem) => (
            <Box key={pageItem.type}>
              <Button onClick={() => setPage(pageItem.type)}>{pageItem.label}</Button>
            </Box>
          ))}
        </>
      )}
    </Box>
  );
};

export default LoginHelpCenterBody;

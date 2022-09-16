import { FC, useEffect } from 'react';
import { Box } from '@mui/material';
import AdminBar from '../AdminBar';
import reportWebVitals from './../../reportWebVitals';

const BrjCmsCoreInterface: FC = () => {
  reportWebVitals((metric: any) => {
    console.log(metric);
  });

  useEffect(() => {
    console.log(
      '%c Welcome to Baraja CMS. All components has been loaded successfully.',
      'background:#3c3c3c;color:#bada55'
    );
  }, []);

  return (
    <Box>
      <AdminBar />
      <Box sx={{ marginTop: '50px' }}>Abcd</Box>
    </Box>
  );
};

export default BrjCmsCoreInterface;

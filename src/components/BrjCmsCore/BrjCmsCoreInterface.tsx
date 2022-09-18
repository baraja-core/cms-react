import { FC, useEffect } from 'react';
import { Box } from '@mui/material';
import AdminBar from '../AdminBar';
import FlashMessage from './FlashMessage';
import Menu from './Menu';
import PluginCanvas from './PluginCanvas';
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
      <FlashMessage />
      <Box sx={{ display: 'flex', marginTop: '50px' }}>
        <Box sx={{ width: '30em' }}>
          <Menu />
        </Box>
        <Box sx={{ width: '100%' }}>
          <PluginCanvas />
        </Box>
      </Box>
    </Box>
  );
};

export default BrjCmsCoreInterface;

import { FC } from 'react';
import { Box } from '@mui/material';
import { ErrorStatus } from './ErrorStatus';
import { useSystemStatus } from '../../hook/useSystemStatus';
import { useEffectOnce } from '../../hook/useEffectOnce';
import AdminBar from '../AdminBar';
import FlashMessage from './FlashMessage';
import Menu from './Menu';
import PluginCanvas from './PluginCanvas';
import Footer from '../../ui/Footer';
import reportWebVitals from './../../reportWebVitals';

export const BrjCmsCore: FC = () => {
  useSystemStatus(true);

  reportWebVitals((metric: any) => {
    //console.log(metric);
  });

  useEffectOnce(() => {
    console.log(
      '%c Welcome to Baraja CMS. All components has been loaded successfully.',
      'background:#3c3c3c;color:#bada55'
    );
  });

  return (
    <Box>
      <AdminBar />
      <FlashMessage />
      <ErrorStatus />
      <Box sx={{ display: 'flex', marginTop: '50px' }}>
        <Box sx={{ width: '20em' }}>
          <Menu />
        </Box>
        <Box sx={{ width: '100%', padding: '0 .75em' }}>
          <PluginCanvas />
        </Box>
      </Box>
      <Footer>.</Footer>
    </Box>
  );
};

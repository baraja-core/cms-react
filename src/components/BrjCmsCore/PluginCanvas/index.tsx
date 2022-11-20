import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Color } from '../../../ui/palette';
import { usePlugin } from '../../../hook/usePlugin';

const PluginCanvas = () => {
  const { getByName, getSelectedPluginName } = usePlugin();
  const selectedPluginName = getSelectedPluginName();
  const structure = getByName(selectedPluginName ?? 'Dashboard');

  return (
    <Box>
      {structure ? (
        <>
          Plugin: {JSON.stringify(selectedPluginName)}
          <hr />
          {JSON.stringify(structure)}
        </>
      ) : (
        <Box sx={{ textAlign: 'center', padding: '5em 0' }}>
          <CircularProgress sx={{ color: Color.Orange }} />
        </Box>
      )}
    </Box>
  );
};

export default PluginCanvas;

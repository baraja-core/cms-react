import React from 'react';
import { Box } from '@mui/material';
import { Spinner } from '@fluentui/react';
import { Dashboard } from '../Dashboard';
import { usePlugin } from '../../../hook/usePlugin';

const PluginCanvas = () => {
  const { getByName, getSelectedPluginName } = usePlugin();
  const selectedPluginName = getSelectedPluginName();
  const structure = getByName(selectedPluginName ?? 'Dashboard');

  return (
    <Box>
      {!selectedPluginName || selectedPluginName === 'Dashboard' ? (
        <Dashboard />
      ) : structure ? (
        <>
          Plugin: {JSON.stringify(selectedPluginName)}
          <hr />
          {JSON.stringify(structure)}
        </>
      ) : (
        <Box sx={{ textAlign: 'center', padding: '5em 0' }}>
          <Spinner size={3} />
        </Box>
      )}
    </Box>
  );
};

export default PluginCanvas;

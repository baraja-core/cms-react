import { Box } from '@mui/material';
import { useSettings } from '../../hook/useSettings';
import { Spinner } from '@fluentui/react';
import { SourceCode } from '../../ui/SourceCode';

export const SettingsOverview = () => {
  const { getServerSettings } = useSettings();
  const settings = getServerSettings();

  return (
    <Box>
      Welcome to settings page.
      {settings ? (
        <Box>
          <Box sx={{ margin: '1em 0' }}>
            <h2>Global settings</h2>
            <SourceCode code={JSON.stringify(settings.globalSettings, null, 2)} />
          </Box>
          <Box sx={{ margin: '1em 0' }}>
            <h2>Common settings</h2>
            <SourceCode code={JSON.stringify(settings.settings, null, 2)} />
          </Box>
          <p>Project name: {settings.projectName}</p>
          <p>Locale: {settings.locale}</p>
          <p>Version: {settings.currentVersion}</p>
          <p>Installation hash: {settings.installationHash}</p>
        </Box>
      ) : (
        <Spinner size={3} />
      )}
    </Box>
  );
};

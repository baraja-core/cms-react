import { Box, CircularProgress } from '@mui/material';
import { useSettings } from '../../../hook/useSettings';
import { usePlugin } from '../../../hook/usePlugin';

const Menu = () => {
  const { getServerSettings } = useSettings();
  const { getSelectedPluginName, setPlugin } = usePlugin();
  const selectedPluginName = getSelectedPluginName();
  const menu = getServerSettings()?.menu;

  return menu ? (
    <Box>
      {menu.map((item) => (
        <Box
          key={item.key}
          sx={{
            border: '1px solid #eee',
            cursor: 'pointer',
            padding: '.1em .5em',
            ...(item.pluginName === selectedPluginName ? { background: '#edf0f1' } : {}),
            ':hover': {
              background: '#ebebeb',
            },
          }}
          onClick={() => setPlugin(item.pluginName)}
        >
          {/*item.icon*/}
          {item.title}
        </Box>
      ))}
    </Box>
  ) : (
    <Box>
      <CircularProgress />
    </Box>
  );
};

export default Menu;

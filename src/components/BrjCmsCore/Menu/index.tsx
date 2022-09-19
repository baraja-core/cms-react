import { Box, CircularProgress } from '@mui/material';
import { useSettings } from '../../../hook/useSettings';
import { FC } from 'react';

interface MenuProps {
  setPlugin: (name: string) => void;
}

const Menu: FC<MenuProps> = ({ setPlugin }) => {
  const { getServerSettings } = useSettings();
  const menu = getServerSettings()?.menu;

  return menu ? (
    <Box>
      {menu.map((item) => (
        <Box key={item.key} sx={{ border: '1px solid #eee' }} onClick={() => setPlugin(item.pluginName)}>
          {/*item.icon*/}
          {item.title},{item.pluginName}
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

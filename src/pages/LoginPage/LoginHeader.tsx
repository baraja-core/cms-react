import React, { FC } from 'react';
import { Box, Link, MenuItem, TextField } from '@mui/material';
import useLocalization from '../../hook/useLocalization';

interface LoginHeaderProps {
  projectName: string;
}

const LoginHeader: FC<LoginHeaderProps> = ({ projectName }) => {
  const { getLocale, getAvailableLocales, setLocale } = useLocalization();

  return (
    <Box sx={{ display: 'flex', padding: '.5em 1em', background: '#eee' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Link
          href={`https://baraja.cz/cms?locale=${getLocale()}`}
          underline="always"
          target="_blank"
          rel="noreferrer"
          sx={{ color: '#555' }}
        >
          {projectName}
        </Link>
      </Box>
      <Box sx={{ width: '6em', textAlign: 'right' }}>
        <TextField select size="small" value={getLocale()} onChange={(e) => setLocale(e.target.value)}>
          {getAvailableLocales().map((localeItem) => (
            <MenuItem key={localeItem.locale} value={localeItem.locale} sx={{ padding: '0 .5em', textAlign: 'center' }}>
              {localeItem.flag ? localeItem.flag : localeItem.locale}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Box>
  );
};

export default LoginHeader;

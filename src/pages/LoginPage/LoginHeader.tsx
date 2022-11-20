import React, { useEffect } from 'react';
import { Box, MenuItem, TextField } from '@mui/material';
import { useCas } from '../../hook/useCas';
import useLocalization from '../../hook/useLocalization';

const LoginHeader = () => {
  const { getLocale, getAvailableLocales, setLocale } = useLocalization();
  const { getOrganisations, getContextOrganisation, setOrganisation } = useCas();
  const organisation = getContextOrganisation()?.slug;

  useEffect(() => {
    if (!organisation) return;
    setOrganisation(organisation);
  }, [organisation]);

  return (
    <Box sx={{ display: 'flex', padding: '.5em 1em', background: '#eee' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <TextField select size="small" value={organisation ?? ''} onChange={(e) => setOrganisation(e.target.value)}>
          <MenuItem value={''}>Please select organisation</MenuItem>
          {getOrganisations().map((organisation) => (
            <MenuItem key={organisation.slug} value={organisation.slug}>
              {organisation.name}
            </MenuItem>
          ))}
        </TextField>
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

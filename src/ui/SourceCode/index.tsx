import { FC } from 'react';
import { Box } from '@mui/material';
import { Color } from '../palette';

interface SourceCodeProps {
  code: string;
  format?: 'json';
}

export const SourceCode: FC<SourceCodeProps> = ({ code, format }) => (
  <Box sx={{ background: Color.GrayLight, border: `1px solid ${Color.Gray}`, padding: '.5em' }}>
    <pre style={{ fontFamily: 'monospace', fontSize: '10pt' }}>{code}</pre>
  </Box>
);

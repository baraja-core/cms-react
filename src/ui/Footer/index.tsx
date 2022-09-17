import { FC, ReactNode } from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import FooterFlag from './FooterFlag';

interface FooterProps {
  children: ReactNode;
}

const Footer: FC<FooterProps> = ({ children }) => (
  <Box sx={{ marginTop: 'auto', paddingTop: '1.5em' }}>
    <Container>
      <Box sx={{ width: '250px', marginLeft: 'auto' }}>
        <FooterFlag />
      </Box>
    </Container>
    <Box sx={{ borderTop: '1px solid #EBEBEB', background: '#f8fafb', padding: '1em 2em' }}>
      {children}
      <Box sx={{ textAlign: 'center', marginTop: 2 }}>
        <a href="https://brj.cz" target="_blank" style={{ color: 'black', textDecoration: 'none' }}>
          <span style={{ fontFamily: 'monospace' }}>&lt;/BRJ&gt;</span>
        </a>
      </Box>
    </Box>
  </Box>
);

export default Footer;

import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo';

const Error404 = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Box sx={{ padding: '4em 0' }}>
        <Box sx={{ marginBottom: '2em' }}>
          <Logo />
        </Box>
        <p>
          <strong>404</strong>. <ins style={{ color: '#777', textDecoration: 'none' }}>That’s an error.</ins>
        </p>
        <p>
          The requested URL
          <code
            style={{
              background: '#ffeeee',
              borderRadius: '5px',
              padding: '.2em .4em',
              margin: '0 .3em',
              fontFamily: 'monospace',
            }}
          >
            {pathname}
          </code>
          was not found on this server.
          <br />
          <ins style={{ color: '#777', textDecoration: 'none' }}>That’s all we know.</ins>
        </p>
        <p>
          <a href="/">Go home</a>
        </p>
      </Box>
    </Container>
  );
};

export default Error404;

import { FC } from 'react';
import { Box } from '@mui/material';

interface EasterEggProps {
  username: string;
}

const LoginEasterEgg: FC<EasterEggProps> = ({ username }) => {
  return (
    <>
      {username === 'baraja' && (
        <Box sx={{ textAlign: 'center', margin: 4 }}>
          <a href="https://baraja.cz/janbarasek" target="_blank" rel="noreferrer">
            <img src="https://baraja.cz/content/jan-barasek.jpg" style={{ maxHeight: '8em' }} alt="Baraja" />
          </a>
        </Box>
      )}
      {username === '42' && (
        <Box>
          <p>
            What is the meaning of life, the universe and everything? <b>42</b>!
          </p>
          <p>
            Douglas Adams, the only person who knew what this question really was about is now dead, unfortunately. So
            now you might wonder what the meaning of death is...
          </p>
        </Box>
      )}
    </>
  );
};

export default LoginEasterEgg;

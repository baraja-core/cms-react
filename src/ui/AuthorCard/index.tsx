import { Avatar, Box } from '@mui/material';
import { FC } from 'react';

interface AuthorCardProps {
  avatarUrl?: string;
  authorName?: string;
}

const AuthorCard: FC<AuthorCardProps> = ({ avatarUrl, authorName }) => (
  <Box sx={{ margin: '1em 0' }}>
    <Box>
      <Box>
        <a href="https://baraja.cz/kontakt" target="_blank">
          <Avatar
            src={avatarUrl ?? 'https://baraja.cz/content/jan-barasek.jpg'}
            alt={authorName ?? 'Jan Barášek'}
            sx={{ width: '100%', height: 'auto' }}
          />
        </a>
      </Box>
      <Box>
        <p className="mb-1">
          <b>{authorName ?? 'Jan Barášek'}</b>
          &nbsp;&nbsp;&nbsp;
          <a href="/janbarasek" target="_blank">
            Více o&nbsp;autorovi
          </a>
        </p>
        <p>
          Autor článku pracuje jako seniorní vývojář a&nbsp;software architekt v&nbsp;Praze. Navrhuje a&nbsp;spravuje
          velké webové aplikace, které znáte a&nbsp;používáte. Od roku 2009 nabral bohaté zkušenosti, které tímto webem
          předává dál.
        </p>
        <p className="mb-1">Rád vám pomůžu:</p>
        <a href="https://baraja.cz/kontakt" target="_blank" className="btn btn-outline-primary btn-sm my-2">
          Kontakt
        </a>
        <a href="https://baraja.cz/kontakt" target="_blank" className="btn btn-outline-primary btn-sm my-2">
          Spolupráce
        </a>
      </Box>
    </Box>
  </Box>
);

export default AuthorCard;

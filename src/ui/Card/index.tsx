import { FC, ReactNode, useContext } from 'react';
import Palette from '../palette';
import { Box } from '@mui/material';
import { Theme, ThemeContext } from '../../core/ThemeContext';

interface CardProps {
  children: ReactNode;
  padding?: number;
  title?: string;
  icon?: ReactNode;
  background?: string;
}

const Card: FC<CardProps> = ({ children, padding, title, icon, background }) => {
  const { theme } = useContext(ThemeContext);

  const content = <Box sx={{ padding: padding ?? 0 }}>{children}</Box>;

  return (
    <Box
      sx={{
        border: `1px solid ${theme === Theme.Light ? Palette.color.gray : Palette.color.grayDarkBorder}`,
        borderRadius: '.25rem',
        margin: '.75em 0',
        ...(background ? { background: background } : {}),
      }}
    >
      {title && (
        <Box
          sx={{
            display: 'flex',
            padding: '.25em .75em',
            borderTopLeftRadius: '.25rem',
            borderTopRightRadius: '.25rem',
            background: theme === Theme.Light ? Palette.color.grayLight : Palette.color.grayDark,
          }}
        >
          {icon && <Box sx={{ paddingRight: 1 }}>{icon}</Box>}
          <Box>
            <h2 style={{ fontSize: '1.1rem', margin: 0 }}>{title}</h2>
          </Box>
        </Box>
      )}
      {content}
    </Box>
  );
};

export default Card;

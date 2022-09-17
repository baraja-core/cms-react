import { Box } from '@mui/system';
import palette from '../palette';

const FooterFlag = () => (
  <Box sx={{ overflow: 'auto' }}>
    {[
      palette.color.prideRed,
      palette.color.prideOrange,
      palette.color.prideYellow,
      palette.color.prideGreen,
      palette.color.prideBlue,
      palette.color.pridePurple,
    ].map((color) => (
      <Box key={color} sx={{ background: color, height: 6, float: 'left', width: 'calc(100% / 6)' }} />
    ))}
  </Box>
);

export default FooterFlag;

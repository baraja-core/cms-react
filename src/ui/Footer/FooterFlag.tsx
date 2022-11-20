import { Box } from '@mui/system';
import { Color } from '../palette';

const FooterFlag = () => (
  <Box sx={{ overflow: 'auto' }}>
    {[Color.PrideRed, Color.PrideOrange, Color.PrideYellow, Color.PrideGreen, Color.PrideBlue, Color.PridePurple].map(
      (color) => (
        <Box key={color} sx={{ background: color, height: 6, float: 'left', width: 'calc(100% / 6)' }} />
      )
    )}
  </Box>
);

export default FooterFlag;

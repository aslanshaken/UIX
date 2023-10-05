import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useTheme } from 'styled-components';
import Button from '@mui/material/Button';
import { smoothScroll } from '../../utils/service';
import Slider from '../slider';

type Props = {
  title: string;
  desc: string;
  price: any
  rate: any;
  items: string[];
}

export default function Business({ title, desc, price, rate, items }: Props) {
  const theme = useTheme();

  return (
    <Box sx={{
      borderRadius: 5,
      background: 'linear-gradient(180deg, #FFF 25%, #CFD4D4 100%);',
      border: .5,
      p: 2,
      '&:hover': {
        background: 'linear-gradient(180deg, #FFF 0%, #CADCFF 100%);'
      },
      '&:focused': {
        background: 'linear-gradient(180deg, #FFF 0%, #CADCFF 100%);'
      }
    }}>
      
      <Typography variant="h6" component="h5" gutterBottom fontWeight='bold' color={theme.palette.primary.main}>
        {title}
      </Typography>

      <Typography variant="body1" color="text.secondary" maxWidth='400px' fontWeight='medium' mt={0.5}>
        {desc}
      </Typography>

      {
        price && 
        <Typography variant="h5" color="text.secondary" maxWidth='400px' fontWeight='bold' mt={3} mb={4}>
          {price} 
        <Typography variant='caption'>{rate}</Typography>
        </Typography>
      }

      {
        title === 'Customized Price' 
        &&
        <Box marginBottom="85px">

        </Box>
      }


      <Button
        variant='contained'
        onClick={() => { smoothScroll('schedule') }}
        sx={{ display: 'flex',my: 5, mt: 0.5,  height: 'fit-content', fontSize: '0.75rem', '& .MuiButton-endIcon': { mt: -0.5 }}}
      >
        Book a Call
      </Button>

      {
        items.map((item, index) => (
          <Typography key={index} variant="subtitle2" color="text.secondary" maxWidth='400px' fontWeight='medium' mt={0.5}>
            {item}
          </Typography>
        ))
      }
    </Box>
  );
}

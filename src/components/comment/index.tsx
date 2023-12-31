import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

type Props = {
  text: string;
  component: JSX.Element;
}

export default function Comment({text, component}: Props) {
  return (
    <Box sx={{background: 'linear-gradient(180deg, #FFF 15%, #CFD4D4 100%);', borderRadius: 5, p: 3, py: 4}}>
      <Box
        component="img"
        sx={{
          width: 'auto',
          height: 23,
          objectFit: 'contain'
        }}
        alt="The house from the offer."
        src="/images/quote.png"
      />
      <Typography variant="body1" component="h3" gutterBottom textAlign='center' fontWeight='normal'  mt={2}>
        {text}
      </Typography>
      <Box sx={{display: 'flex', justifyContent: 'center', mt: 3}}>
        {component}
      </Box>
    </Box>
  );
}

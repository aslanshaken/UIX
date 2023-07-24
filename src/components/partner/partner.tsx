import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

type Props = {
  partner: string;
}

export default function Partner({ partner }: Props) {
  return (
    <Box sx={{borderRadius: 5, p: 3, py: 4}}>
      <Box
        component="img"
        sx={{
          width: 'auto',
          height: {xs: 55, sm: 50, md: 65},
          objectFit: 'contain'
        }}
        alt="The house from the offer."
        src={`/images/${partner}`}
      />
    </Box>
  );
}

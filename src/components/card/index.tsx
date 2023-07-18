import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useTheme } from 'styled-components';

type Props = {
  title: string;
  description: string;
}

export default function Card({ title, description }: Props) {
  const theme = useTheme();

  return (
    <Box sx={{border: '1px solid #D4D2E3', borderRadius: 5, p: 2, py: 2.5}}>
      
      <Typography variant="h6" component="h3" gutterBottom textAlign='center' fontWeight='bold' color={theme.palette.primary.main}>
        {title}
      </Typography>

      <Typography variant="body2" color="text.secondary" align="center" maxWidth='400px' mt={2}>
        {description}
      </Typography>
    </Box>
  );
}

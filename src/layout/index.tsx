import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from './Header';
import Footer from './Footer';

type Props = {
  children: JSX.Element
}

export default function Layout({children}: Props) {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 1 }}>
        <Header />
        {children}
        <Footer />
      </Box>
    </Container>
  );
}

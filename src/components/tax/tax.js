import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { redirect } from 'react-router-dom';



const defaultTheme = createTheme();

export default function Tax() {

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a download link for the PDF
    const downloadLink = document.createElement('a');
    downloadLink.href = 'https://drive.google.com/u/0/uc?id=1DUzTzsXLDRq405S6JkkHfx2_SEAG_haH&export=download';
    downloadLink.download = 'tax-100-deductions.pdf';

    // // Add an event listener to detect when the download is complete
    // downloadLink.addEventListener('click', () => {
    //   // Open a new tab after the download is complete
    //   window.open('https://forms.gle/wRVwDDd4PhwnxC5D8', '_blank');
    // });

    // Trigger the click event on the download link to initiate the download
    downloadLink.click();
  };


  return (
    <ThemeProvider theme={defaultTheme} id="tax-deductions">
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 3, bgcolor: 'secondary.main' }}>
            <AccountBalanceIcon />
          </Avatar>
          <Typography variant="h5" component="h3" gutterBottom textAlign='center' textTransform='uppercase'>
            Download Top 100 Tax Deducations
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit}>
            {/* <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Phone"
                  type="tel"
                  id="phone"
                  autoComplete="new-phone"
                />
              </Grid>
            </Grid> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Download
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
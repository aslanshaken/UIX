import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Layout from '../layout';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from 'styled-components';
import { Divider, Grid } from '@mui/material';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Comment from '../components/comment';
import { cards, comments, fields, partners } from '../utils/constants';
import Card from '../components/card';
import Carousel from 'react-material-ui-carousel';
import Partner from '../components/partner/partner';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

export default function App() {
  const theme = useTheme()

  return (
    <Layout>
      <Container maxWidth="lg">
        <Box mt={5} px={4} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h3" component="h3" gutterBottom textAlign='center'>
            Understand Your Business with Expert Bookkeeping and Strategic CFO Services
          </Typography>

          <Typography variant="h6" color="text.secondary" align="center" maxWidth={500} margin='auto' my={2}>
            {"One team for all your accounting needs. "}
            <Box component="span" sx={{fontWeight: 'bold'}}>
              Full cycle Bookkeeping, CFO, Tax Planner and Personalized Service
            </Box>
            {" for startups and growing businesses."}
          </Typography>

          <Button
            variant="contained"
            onClick={() => {console.log('jjj')}}
            sx={{ my: 2,  display: 'block', borderRadius: 10 }}
          >
            Get Started
          </Button>
        </Box>

        <Box mt={20}>
          <Typography variant="h5" component="h3" gutterBottom textAlign='center' color={theme.palette.primary.main} textTransform='uppercase'>
            {"Built by founders, for founders"}
          </Typography>

          <Typography variant="h5" component="h3" gutterBottom textAlign='center' fontWeight={'bold'}>
            {"We are the fast growing accounting firm in the USA that focuses on start up"}
          </Typography>

          <Divider sx={{ my: 2.5 }} />

          <Box sx={{display: {xs: 'block', md: 'flex'}}}>
            <Box flex={1} sx={{pr: {xs: 0, md: 4}, pb: {xs: 4, md: 0}}}>
              <Typography variant="h6" component="h3" gutterBottom textAlign='justify' color="text.secondary">
                {"Our team of professionals is based in the US and is passionate about helping your business thrive. We specialize in providing comprehensive Bookkeeping and CFO services."}
              </Typography>
              
              <Typography variant="h6" component="h3" gutterBottom textAlign='justify' color="text.secondary" mt={2}>
                {"From small two-founder startups to larger teams, we have worked with a wide range of businesses. We understand the unique needs of startups and offer tailored solutions to support your success."}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'end' } }} flex={1}>
              <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'end'}}>
                <Box
                  component="img"
                  sx={{
                    maxWidth: 500,
                    width: '100%',
                    height: 'fit-content',
                    objectFit: 'contain'
                  }}
                  alt="The house from the offer."
                  src="/images/dashboard.png"
                />
                <Box sx={{display: 'flex'}}>
                  <Button
                    variant="contained"
                    onClick={() => {console.log('jjj')}}
                    sx={{  display: 'block', my: 2, height: 'fit-content', fontSize: '0.75rem' }}
                  >
                    Schedule Demo
                  </Button>

                  <Button
                    onClick={() => { console.log('jjj') }}
                    sx={{ display: 'flex', my: 2, ml: 2, height: 'fit-content', fontSize: '0.75rem', '& .MuiButton-endIcon': { mt: -0.5 }}}
                    endIcon={<KeyboardArrowRightOutlinedIcon />}
                  >
                    Our Services
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box mt={15}>
          <Typography variant="h5" component="h3" gutterBottom textAlign='center' color={theme.palette.primary.main} textTransform='uppercase'>
            {"Why other love us"}
          </Typography>

          <Grid container gridTemplateColumns='repeat(auto-fill, minmax(300px, 1fr))' sx={{display: 'grid', gap: 6, mt: 5}}>
            {
              comments.map((comment, index) => (
                <Comment {...comment} key={index} />
              ))
            }
          </Grid>
        </Box>

        <Box mt={15} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h5" component="h3" gutterBottom textAlign='center' color={theme.palette.primary.main} textTransform='uppercase'>
            {"We partner with the world’s best"}
          </Typography>

          <Carousel>
            {partners.map((partner, i) => (
              <Partner key={i} partner={partner} /> 
            ))}
          </Carousel>

          <Typography variant="body2" color="text.secondary" align="center" maxWidth='400px' mt={0.5}>
            {"Seamlessly integrate with QuickBooks, Stripe, Shopify, Gusto, and more. Perfect for new US startups."}
          </Typography>
          
        </Box>

        <Box mt={20} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h5" component="h3" gutterBottom textAlign='center' color={theme.palette.primary.main} textTransform='uppercase'>
            {"What you get with us"}
          </Typography>

          <Typography variant="body2" color="text.secondary" align="center" maxWidth='400px' mt={0.5}>
            {"Your finance assistant, no matter where you are on your entrepreneurial journey"}
          </Typography>

          <Grid container gridTemplateColumns='repeat(auto-fill, minmax(300px, 1fr))' sx={{display: 'grid', gap: 3, mt: 4}}>
            {
              cards.map((card, index) => (
                <Card {...card} key={index} />
              ))
            }
          </Grid>
        </Box>

        <Box sx={{display: {xs: 'block', md: 'flex'},mt: 20}}>
          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'end' } }} flex={1}>
            <Box
              component="img"
              sx={{
                maxWidth: 500,
                width: '100%',
                height: 'fit-content',
                objectFit: 'contain'
              }}
              alt="The house from the offer."
              src="/images/dashboard1.png"
            />
          </Box>

          <Box flex={1} sx={{pl: {xs: 0, md: 5}, pt: {xs: 5, md: 0}}}>
            <Typography variant="h5" component="h3" gutterBottom color={theme.palette.primary.main} fontWeight="bold">
              {"We deeply care about every startup we work with, providing personalized support for their success"}
            </Typography>

            <Box>
              {
                fields.map((item, index) => (
                  <Box key={index} sx={{display: 'flex', alignItems: 'center', color: theme.palette.primary.main}}>
                    <CheckCircleRoundedIcon  />
                    <Typography variant="body2" component="h3" gutterBottom mt={1} ml={1} color='text.primary' fontWeight='bold'>
                      {item}
                    </Typography>
                  </Box>
                ))
              }
            </Box>
            <Button
              variant="contained"
              onClick={() => {console.log('jjj')}}
              sx={{  display: 'block', my: 2, height: 'fit-content', borderRadius: 10, fontSize: '0.75rem' }}
            >
              Schedule Demo
            </Button>
           
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

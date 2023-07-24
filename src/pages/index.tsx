import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Layout from '../layout';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from 'styled-components';
import { Divider, Grid, useMediaQuery } from '@mui/material';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Comment from '../components/comment';
import { FAQs, achieved, businesses, cards, comments, fields, partners } from '../utils/constants';
import Card from '../components/card';
import Partner from '../components/partner/partner';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Business from '../components/business';
import Faq from '../components/faq';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay } from 'swiper/modules';
import { smoothScroll } from '../utils/service';

export default function App() {
  const theme = useTheme()
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const downLgScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Layout>
      <Container maxWidth="lg">
        <Box mt={10} px={4} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h3" component="h6" gutterBottom textAlign='center' sx={{ fontSize: { xs: '2rem', sm: '3rem' } }}>
            Understand Your Business with 
            <br/>
            Expert Bookkeeping and Strategic CFO Services
          </Typography>

          <Typography variant="h5" color="GrayText" align="center" maxWidth={500} margin='auto' my={3}>
            {"One team for all your accounting needs"}
            <br/>
            <Box component="span" sx={{fontWeight: 'bold'}}>
              Full Cycle Bookkeeping, CFO and Tax Planner
            </Box>
            <br/>
            {" for startups and growing businesses"}
          </Typography>

          <Button
            variant="contained"
            onClick={() => {smoothScroll('schedule')}}
            sx={{ my: 2,  display: 'block', borderRadius: 10 }}
          >
            Get Started
          </Button>
        </Box>

        <Box id="about-us" mt={20}>
          <Typography variant="h5" component="h3" gutterBottom textAlign='center' color={theme.palette.primary.main} textTransform='uppercase'>
            {"Built by founders, for founders"}
          </Typography>
          <br/>
          <Typography variant="h5" component="h3" gutterBottom textAlign='center' fontWeight={'medium'}>
            {"We are the fast growing accounting firm in the USA that focuses on startups"}
          </Typography>

          <Divider sx={{ my: 2.5 }} />

          <Box sx={{display: {xs: 'block', md: 'flex'}}}>
            <Box flex={1} sx={{pr: {xs: 0, md: 4}, pb: {xs: 4, md: 0}}}>
              <Typography variant="h5" component="h3" gutterBottom textAlign='justify' color="text.secondary" sx={{fontSize: {xs: '1.3rem', sm: '1.5rem'}}}>
                Our team of professionals is based in the US 
                and is passionate about helping your business thrive. 
                We specialize in providing comprehensive Bookkeeping, CFO and Tax Planner services.
              </Typography>
              
              <Typography variant="h5" component="h3" gutterBottom textAlign='justify' color="text.secondary" mt={2} sx={{fontSize: {xs: '1.3rem', sm: '1.5rem'}}}>
                From small two-founder startups to larger teams, we have worked with 
                a wide range of businesses. We understand the unique needs of startups
                and offer tailored solutions to support your success.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'end' } }} flex={1}>
              <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'end'}}>
                <Box
                  component="img"
                  sx={{
                    maxWidth: 700,
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
                    onClick={() => {smoothScroll('schedule')}}
                    sx={{  display: 'block', my: 2, height: 'fit-content', fontSize: '0.75rem' }}
                  >
                    Schedule Demo
                  </Button>

                  <Button
                    onClick={() => { smoothScroll('services')}}
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
          <Swiper
            slidesPerView={onlySmallScreen ? 1 : downLgScreen ? 3: 4}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {partners.map((partner, i) => (
              <SwiperSlide key={i}>
                <Partner partner={partner} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          <Typography variant="h6" color="text.secondary" align="center" maxWidth='600px' mt={0.5}>
            Seamlessly integrate with 
            QuickBooks, Stripe, Shopify, Gusto, and more.
            Perfect for new US startups.
          </Typography>
          
        </Box>

        <Box id="services" my={20} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h5" component="h3" gutterBottom textAlign='center' color={theme.palette.primary.main} textTransform='uppercase'>
            {"What you get with us"}
          </Typography>

          <Typography variant="h6" color="text.secondary" align="center" maxWidth='400px' mt={0.5}>
            {"Your finance assistant, no matter where you are on your entrepreneurial journey"}
          </Typography>

          <Grid container gridTemplateColumns='repeat(auto-fill, minmax(300px, 1fr))' sx={{display: 'grid', gap: 3, mt: 7}}>
            {
              cards.map((card, index) => (
                <Card {...card} key={index} />
              ))
            }
          </Grid>
        </Box>

        <Box id="why-us" sx={{display: {xs: 'block', md: 'flex'}, mt: 5, pt: 5, pb: 8}}>
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
                    <Typography variant="h6" component="h3" gutterBottom mt={1} ml={1} color='text.primary' fontWeight='medium'>
                      {item}
                    </Typography>
                  </Box>
                ))
              }
            </Box>
            <Button
              variant="contained"
              onClick={() => {smoothScroll('schedule')}}
              sx={{  display: 'block', my: 2, height: 'fit-content', borderRadius: 10, fontSize: '0.75rem' }}
            >
              Schedule Demo
            </Button>
           
          </Box>
        </Box>

        <Box id="pricing" mt={15} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h5" component="h3" gutterBottom textAlign='center' color={theme.palette.primary.main} textTransform='uppercase'>
            {"Pricing designed for every stage of business"}
          </Typography>

          <Typography variant="h6" color="text.secondary" align="center" maxWidth='700px' mt={0.5}>
            {"Explore our straightforward and affordable pricing options designed to suit your business's specific requirements."}
          </Typography>

          <Grid container gridTemplateColumns='repeat(auto-fill, minmax(300px, 1fr))' sx={{display: 'grid', gap: 3, mt: 7}}>
            {
              businesses.map((business, index) => (
                <Business {...business} key={index} />
              ))
            }
          </Grid>
        </Box>

        <Box mt={20} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h5" component="h3" gutterBottom textAlign='center' color={theme.palette.primary.main} textTransform='uppercase'>
            {"Our startups have achieved top-tier recognition"}
          </Typography>

          <Box sx={{
            display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: {xs: 5, sm: 10}, mt: 7, flex: 1, mx: 1, '@media (max-width: 500px)': {
              flexWrap: 'nowrap',
              flexDirection: 'column'
          }}}>
            {
              achieved.map((achieve, index) => (
                <Box
                  key={index}
                  component="img"
                  sx={{
                    my: 2,
                    width: 'auto',
                    height: achieve.size,
                    marginTop: achieve.marginTop,
                    objectFit: 'contain',
                    cursor: 'pointer'
                  }}
                  alt="The house from the offer."
                  src={`/images/${achieve.logo}`}
                  onClick={() => window.open(achieve.url, '__blank')}
                />
              ))
            }
          </Box>
        </Box>

        <Box id="schedule" mt={20} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h5" component="h3" gutterBottom textAlign='center' color={theme.palette.primary.main} textTransform='uppercase'>
            {"Book an Intro Call "}
          </Typography>
          
          <Box
            component="div"
            sx={{ minWidth: { md: 1024, sm: 640, xs: 320}, height: {md: 700, sm: 1020, xs: 1000}}}
            className='calendly-inline-widget'
            data-url="https://calendly.com/aslanshaken/30min" 
                />
        </Box>

        <Box my={15} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center',  color: '#9795B5'}}>
          <Typography variant="h5" component="h3" gutterBottom textAlign='center' color={'#5D5A88'}>
            {"Frequently Asked Questions"}
          </Typography>

          <Typography variant="h6"  align="center" maxWidth='600px' mt={0.5}>
          We make business world better by making business owners more educated in their finances. 
          </Typography>

          <Box mt={4}>
            {
              FAQs.map((faq, index) => (
                <Faq key={index} {...faq} opened={index === 0} />
              ))
            }
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

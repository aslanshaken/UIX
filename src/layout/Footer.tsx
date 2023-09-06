import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Divider, useMediaQuery } from '@mui/material';
import { useTheme } from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const socials = [
  // {
  //   component: () => <FacebookIcon />,
  //   link: '/'
  // },
  {
    component: () => <InstagramIcon />,
    link: 'https://www.instagram.com/ainura.finance'
  },
  {
    component: () => <LinkedInIcon />,
    link: 'https://www.linkedin.com/company/go4profit/mycompany/'
  },
  {
    component: () => <YouTubeIcon />,
    link: 'https://www.youtube.com/@go4profitadvisor'
  },
];

function Footer() {
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Box
          component="img"
          sx={{
            width: 'auto',
            height: 95,
            mb: 2,
          }}
          alt="The house from the offer."
          src="/images/go4profit.png"
        />

        <Typography variant="body2" color="text.secondary" align="center">
          {"info@go4profit.us"}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" >
          {"+1(917) 200-7609"}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {"6500 River Place Blvd Building 7"}
        </Typography>

        <Typography variant="body2" color="text.secondary" align="center">
          {"Austin, TX 78730"}
        </Typography>

        <Box sx={{ display: 'flex', my: 3, mb: 1 }}>
          {
            socials.map((social, index) => (
              <Box key={index} sx={{color: "text.secondary", mx: 0.5, cursor: 'pointer'}} onClick={() => window.open(social.link, '__blank')}>
                <social.component />
              </Box>
              
            ))
          }
        </Box>

        <Divider sx={{width: '100%', my: 3}} />
        
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "} {new Date().getFullYear()} {" Go4Profit | All Rights Reserved"}
        </Typography>
      </Box>
    </Container>
  );
}
export default Footer;
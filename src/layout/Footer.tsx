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
  {
    component: () => <FacebookIcon />,
    link: '/'
  },
  {
    component: () => <TwitterIcon />,
    link: '/'
  },
  {
    component: () => <InstagramIcon />,
    link: '/'
  },
  {
    component: () => <LinkedInIcon />,
    link: '/'
  },
  {
    component: () => <YouTubeIcon />,
    link: '/'
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
        <Typography variant="body2" color="text.secondary" align="center" sx={{textDecoration: 'underline'}}>
          {"+1(510) 858-6558"}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Zeni Inc.420 Florence St,"}
        </Typography>

        <Typography variant="body2" color="text.secondary" align="center">
          {"Suite 300Palo Alto, CA 94301"}
        </Typography>

        <Box sx={{ display: 'flex', my: 3, mb: 1 }}>
          {
            socials.map((social, index) => (
              <Box key={index} sx={{color: "text.secondary", mx: 0.5}}>
                <social.component />
              </Box>
            ))
          }
        </Box>

        <Divider sx={{width: '100%', my: 3}} />
        
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "} {new Date().getFullYear()} {" BRIX Templates | All Rights Reserved"}
        </Typography>
      </Box>
    </Container>
  );
}
export default Footer;
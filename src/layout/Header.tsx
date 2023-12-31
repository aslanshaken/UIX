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
import { smoothScroll } from '../utils/service';

const pages = [
  { id: 'about-us', title: 'About Us' },
  { id: 'services', title: 'Services' },
  { id: 'why-us', title: 'Why Us' },
  { id: 'pricing', title: 'Pricing' }
];

function Header() {
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (id: string) => {
    setAnchorElNav(null);
    smoothScroll(id)
  };

  return (
    <AppBar position="fixed" sx={{background: 'white', boxShadow: 'none !important'}}>
      <Container maxWidth="xl" sx={{pl: {xs: 0, md: 0}}}>
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              width: 'auto',
              height: 95,
              cursor: 'pointer',
              '&:hover': {
                filter: 'brightness(1.2)',
              },
            }}
            alt="The house from the offer."
            src="/images/go4profit.png"
            onClick={()=> window.scrollTo({
              top: 0,
              behavior: 'smooth', // Optional: Smooth scrolling animation
            })}
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center',}}>
            {pages.map((page, index, {length}) => (
              <Box key={page.id} sx={{display: 'flex'}}>
                <Button
                  onClick={() => handleCloseNavMenu(page.id)}
                  sx={{ my: 2,  display: 'block', color: '#000' }}
                >
                  {page.title}
                </Button>
                {
                  index + 1 !== length && <Box sx={{display: 'flex', alignItems: 'center', mx: 1, color: '#000'}}>•</Box>
                }
              </Box>
            ))}
          </Box>

          <Box sx={{ flexGrow: {xs: 1, md: 0}, display: {xs: 'none', sm: 'flex'}, justifyContent: 'end' }}>
            <Button
              key={'schedule'}
              onClick={() => handleCloseNavMenu('schedule')}
              sx={{ my: 2, display: 'block', color: '#000' }}
            >
              Book a Call
            </Button>
          </Box>

          <Box sx={{ flexGrow: {xs: 1, sm: 0}, display: { xs: 'flex', md: 'none' }, justifyContent: 'end', ml: 1.5 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={() => handleCloseNavMenu(page.id)}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
              {
                onlySmallScreen &&
                <>
                  <Divider />
                  <MenuItem key={'schedule'} onClick={() => handleCloseNavMenu('schedule')}>
                    <Typography textAlign="center">Book a Call</Typography>
                  </MenuItem>
                </>
                
              }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
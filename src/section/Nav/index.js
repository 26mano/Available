import { AppBar, Button, Container, IconButton,  Menu, MenuItem, Toolbar,  Typography } from '@mui/material';
import React from 'react';
import NavLogo from "./navLogo.svg";
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import Label from '../../Pages/Components/Label';
// import MenuPopover from '../../Pages/Components/MenuPopover';
// import Services from "../Services";

const pages = [ 
  'Services' , 
  'Blog', 
  'Contact',
  'Login'
];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

//   const handleOpenUserMenu = 
//   (event) => 
//   {
//     setAnchorElUser(event.currentTarget);
//   };

  const handleOpenNavMenu = 
  (event) => 
  {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
   setAnchorElNav(null);
      };
    
//   const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//       };
 
    return (
        <div>
        <AppBar position="static" sx={{ width:"100%",bgcolor:"grey.900", boxShadow:"none" }} >
        <Container maxWidth="x1">
        <Toolbar disableGutters   >
        <img src={NavLogo}   alt="logo" style={{ display: { xs: 'none', md: 'flex' }, marginRight: 10  }} />
 
        <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'Flex' },
              flexGrow: 1,
              fontFamily: 'Josefin Sans',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'warning.main',
              textDecoration: 'none',
            }} >

              AVAILABLE
          </Typography>
         

           <Typography
            variant="body2"
            noWrap
            component="a"
            href=""
            sx={{
              
              justifyContent:"center",
              mr: 0,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 2,
              fontFamily: 'Josefin Sans',
              fontWeight: 500,
              letterSpacing: '.1rem',
              color: 'warning.main',
              textDecoration: 'none',
            }}  >

            Available
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' }}}>
           <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="warning"
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
                display: { xs: 'block', md: 'none' }
                
              }}
            >
              {pages.map((page) => (
                
                <MenuItem key={page} onClick={handleCloseNavMenu}  >
                 
                  <Link textAlign="center" to={page} style={{ textDecoration:"none", color:"warning.main" }}  > 
                  <Label  >
                     {page}
                    
                  </Label>
                  </Link>
                  {/* <Link to="/Login" >
                    <Label >
                    <Button >
                      Log In
                    </Button>
                    </Label>
                   
                  </Link> */}

                </MenuItem>
              ))}
            </Menu>
            </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex', lg: 'flex' } }}>
            {pages.map((page) => (
              <Link to={page} style={{ textDecoration:"none" }} >
                <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2,  display: 'block',  color:"warning.main" }}
              >
                {page}
              </Button>
              </Link>
            
            ))}
          </Box>

        </Toolbar>
        </Container>
        </AppBar>
        </div>
    );
};

export default NavBar;


// import { AppBar, Container, Toolbar, Typography } from '@mui/material';
// import React from 'react';
// import NavLogo from "./navLogo.svg";

// function index(children) {
//     return (
//         <div>
//             <Container >
//             <AppBar color="transparent">
//                 <Toolbar>
                 
//                <Typography sx={{display:"flex"  }} gutterBottom>
//                 <img src={NavLogo} width="130%"  alt="logo" />
//                </Typography>
//                 <Typography variant='subtitle1' color="warning.main"  sx={{ flexGrow:1, fontWeight:"bold"    }}  >
//                     AVAILABLE
//                 </Typography>
                
// {/* <nav  >
// <Link  to="#" > Blog </Link>
// <Link   to="#" > Become a Partner? </Link>
// <Link   to="#" > Login/Sign-up </Link>
// <Link   to="#" > Contact </Link>
// </nav> */}

//                 </Toolbar>
//                 </AppBar>
//     </Container>
           
//         </div>
//     );
// }

// export default index;

import { useLocation, Outlet } from 'react-router-dom';
// @mui
import { Box, Link, Container, Typography, Stack } from '@mui/material';
// components
import Logo from '../Components/navLogo.svg';
//
import MainFooter from './MainFooter.js';
import MainHeader from './MainHeader.js';

// ----------------------------------------------------------------------

export default function MainLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />

      <Outlet />

      <Box sx={{ flexGrow: 1 }} />

      {!isHome ? (
        <MainFooter />
      ) : (
        <Box
          sx={{
            py: 5,
            textAlign: 'center',
            position: 'relative',
            bgcolor: 'background.default',
          }}
        >
          <Container>
            <Logo sx={{ mb: 1, mx: 'auto' }} />

            <Typography variant="caption" component="p">
              © All rights reserved
              <br /> made by avalable.digital
              <Link href="https://minimals.cc/">minimals.cc</Link>
            </Typography>
          </Container>
        </Box>
      )}
    </Stack>
  );
}

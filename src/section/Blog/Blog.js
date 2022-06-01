import React from 'react';

// local
import Clip from './aboutus.svg';
import Footer from '../Footer';
// @helmat
import Helmet from 'react-helmet';
// @mui
import { Box, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
// @animate
import { AnimationOnScroll } from 'react-animation-on-scroll';
// @router-dom
import { Link } from 'react-router-dom';


function Blog(props) {
    return (
        <div>
            {/* -------------------------------------for Desktop------------------------------------------------------------------ */}
     <Stack style={{ width:"100%",height:"100%",display:{xs:"none", md:"flex"} , backgroundImage:"url('https://wallpaperaccess.com/full/1526048.jpg')"}} >
          
            <Helmet >
                <title> Available | About Us </title>
                <meta name='description' content='Available' />
            </Helmet>


            <Box  sx={{ display:{ md:"flex", xs:"none" } ,justifyContent:"flex-end" ,  pt:10, pb:-20 , pr:10}}>
                <Link to="/" style={{ position:"relative", textDecoration:"none",}} >
                <LogoutOutlinedIcon  fontSize='large' color='warning' />
                </Link >
             </Box>


             <div style={{ width:"100%" }}  >
               
                 <Typography variant='h3' ml={5}  mt={-5} color="warning.main" fontFamily= 'Josefin Sans' sx={{ display:{xs:"none", md:"flex"} }} >
                     About Us
                 </Typography>
                 
                 <Divider orientation="horizontal" color ="azure"  width ="100%" sx={{ display:{xs:"none", md:"flex"},alignItems:"center" , marginLeft:"0%" }} />
                 
            </div>         
            <Container  >
            <Grid container maxWidth="xlg" spacing={2} sx={{ width:"100%" ,display:{xs:"none" , md:"flex" } , justifyContent:"flex-end" ,pb:10 }} >
                <Grid item lg={7} mt={5}  >
                <AnimationOnScroll animateIn='animate__fadeInLeft'  >
                   <Box sx={{width:"100%" }}>
                   <Typography variant="h6" textAlign="justify" color="grey.300" >
                   You should now have a decent idea of what an About Us page should and shouldn’t contain.We’re going to follow this with a few tips to help youstand out and create an About Us page that works foryou and your business. Be creative. Don’t fall into the trap of simply writing a brief summary of your business and calling it a day.The best About Us pages are creative, informative, and interesting. Don’t follow the crowd. If someone’s reading your About page, there’s a good chance they’ve been reading (or will read) your competitors’ conversions
   
                   </Typography>
                   <Typography variant="h6" textAlign="justify" color="grey.300" >
                   You should now have a decent idea of what an About Us page should and shouldn’t contain.We’re going to follow this with a few tips to help youstand out and create an About Us page that works foryou and your business. Be creative. Don’t fall into the trap of simply writing a brief summary of your business and calling it a day.The best About Us pages are creative, informative, and interesting. Don’t follow the crowd. If someone’s reading your About page, there’s a good chance they’ve been reading (or will read) your competitors’ conversions
                   </Typography>
                   </Box>
                   </AnimationOnScroll>
                </Grid>

                <Grid item lg={5}  >
                    <AnimationOnScroll animateIn='animate__fadeInRight'>
                <Box sx={{ display:"flex", justifyContent:"flex-end", alignContent:"center" }}>
                <img src={Clip}  alt="logo" style={{ width:"100%" }} />
                </Box>
                </AnimationOnScroll>
                </Grid>
                </Grid>
             </Container>   
         
        </Stack>
        {/* -----------------------------------for Mobile-------------------------------------------------------------- */}
     <Stack style={{ width:"100%", height:"100%",display:{ xs:"flex", md:"none" } , backgroundImage:"url('https://wallpaperaccess.com/full/1526048.jpg')"}} >
            
     <Helmet >
                <title> Available | About Us </title>
                <meta name='description' content='Available' />
            </Helmet>
            <Box  sx={{ display:{ xs:"flex", md:"none"} ,justifyContent:"flex-end" ,  pt:2 , pr:2}}>
                <Link to="/" style={{ position:"relative", textDecoration:"none",flexGrow:0}} >
                <LogoutOutlinedIcon  fontSize='medium' color='warning' />
                </Link >
            
             </Box>
          
             <div style={{ width:"100%" }}  >
                 
                 <Typography variant='h6' ml={2}  mt={-4} color="warning.main" fontFamily= 'Josefin Sans' sx={{ display:{ xs:"flex" , md:"none" } }} >
                     About Us
                 </Typography>
                 
                 <Divider orientation="horizontal" color ="azure"  width ="100%" sx={{ display:{ xs:"flex", md:"none"}, alignItems:"center" , marginLeft:"0%" }} />
                 
            </div>         
            <AnimationOnScroll animateIn='animate__fadeIn' >
            <Container  >
            <Grid container maxWidth="xlg" spacing={2} sx={{ width:"100%" ,display:{xs:"flex" , md:"none" } , justifyContent:"flex-end" ,pb:10 }} >
                <Grid item lg={12} mt={5}  >
              
                   <Box sx={{width:"100%" }}>
                   <Typography variant="inherit" textAlign="justify" color="grey.300" gutterBottom>
                   You should now have a decent idea of what an About Us page should and shouldn’t contain.We’re going to follow this with a few tips to help youstand out and create an About Us page that works foryou and your business. Be creative. Don’t fall into the trap of simply writing a brief summary of your business and calling it a day.The best About Us pages are creative, informative, and interesting. Don’t follow the crowd. If someone’s reading your About page, there’s a good chance they’ve been reading (or will read) your competitors’ conversions
   
                   </Typography>
                   <Typography variant="inherit" textAlign="justify" color="grey.300" >
                   You should now have a decent idea of what an About Us page should and shouldn’t contain.We’re going to follow this with a few tips to help youstand out and create an About Us page that works foryou and your business. Be creative. Don’t fall into the trap of simply writing a brief summary of your business and calling it a day.The best About Us pages are creative, informative, and interesting. Don’t follow the crowd. If someone’s reading your About page, there’s a good chance they’ve been reading (or will read) your competitors’ conversions
                   </Typography>
                   </Box>
                  
                </Grid>

               
                </Grid>
             </Container>   
             </AnimationOnScroll>
             <Footer />
          
         
        </Stack>
        </div>
    );
}

export default Blog;
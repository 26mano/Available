import { Box, Button, Container, Divider, Grid, Icon, Stack, TextareaAutosize, TextField, Typography } from '@mui/material';
import React from 'react';
// import './Contact.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Footer from "../Footer";
import Helmet from 'react-helmet';
// import { AnimationOnScroll } from 'react-animation-on-scroll';
// import Helmet from 'react-helmet';

const Contact = () => {
    return (
        <div>
          <Helmet >
                <title> Available | Contact Us </title>
                <meta name='description' content='Available' />
            </Helmet>
            {/* ----------------------------------for desktop-------------------------------------------------------- */}
   <Stack sx={{display:{ xs:"none", md:"flex" ,lg:"flex" } ,width:"100%", height:"100vh" , backgroundImage:"url('https://cutewallpaper.org/21/contact-us-background-image/Contact-Us-Background-Chief-Sales-Leader.jpg')" }} >
          {/* <Helmet>
            <title> Contacts | Available </title>
            <meta name='description' content='Anytime, Anywhere, Anyservice, Anywork Contact US' />
          </Helmet> */}
          <Container  >
          <Box  sx={{ display:"flex",justifyContent:"flex-end" , pt:10 ,mb:-15 }}>
                <Link to="/" style={{ position:"relative",textDecoration:"none",}} >
                <LogoutOutlinedIcon  fontSize='large' color='warning' />
                </Link >
            
             </Box>
              <Stack >
            <Typography variant="h4" fontFamily="Josefin Sans" color="warning.main" textAlign="left" pt={10} >
                Contact Us
            </Typography>
              </Stack>
        

            <Divider orientation='horizontal' sx={{ bgcolor:"white", width:"100%", justifySelf:"center", mt:2 }} />
            <Grid container  marginTop={10} >
              <Grid container  item xs={5}  >
                <Grid container  spacing={4} sx={{position:"static"}} >
                <Grid item lg={6} >
                <Box sx={ {   bgcolor:"grey.800", borderRadius:"5%"  ,width:"100%", height:"100px" , display:"grid", padding:"10px"}}  >
                  <Icon  >
                  <LanguageIcon color='primary' />
                  </Icon>
                 
                  <Typography variant="body1" fontWeight="bold" sx={{  color:"warning.lighter" }} >
                   Our Official Site
                  </Typography>
                  <Typography variant="caption"  color="grey.300">
                   www.availble.digital
                 </Typography>
               </Box>

                </Grid>
                
                <Grid item lg={6} >
                <Box  sx={ {  bgcolor:"grey.800", borderRadius:"5%"  ,width:"100%", height:"100px" , display:"grid", padding:"10px" }} >
                  <Icon  >
                  <CallIcon color='info' />
                  </Icon>
                <Typography  variant="body1" fontWeight="bold" sx={{ color:"warning.lighter" }} >
                    PHONE NUMBER
                  </Typography>
                  <Typography variant="caption" color="grey.300" >
                   +91 94442 08901
                 </Typography>
               </Box>
                </Grid>

                <Grid item lg={12}  >
                <Box  sx={ {  bgcolor:"grey.800", borderRadius:"5%"  ,width:"100%", height:"100px" , display:"grid" , padding:"10px" }}  >
                <Icon  >
                  <EmailIcon sx={ { color:"error.light" }} />
                  </Icon>
                <Typography variant="body1" fontWeight="bold" sx={{ color:"warning.lighter"}} >
                   EMAIL
                  </Typography>
                 <Typography variant="caption" color="grey.300" >
                   available2k22@gmail.com
                 </Typography>
               </Box>
                </Grid>


                <Grid item lg={12}  >
                <Box  sx={ {  bgcolor:"grey.800", borderRadius:"5%"  ,width:"100%", height:"100px" , display:"grid" , padding:"10px" }}  >
                <Icon  >
                  <LocationOnIcon color='error'  />
                  </Icon>
                <Typography variant="body1" fontWeight="bold" sx={{ color:"warning.lighter"}} >
                   Address
                  </Typography>
                 <Typography variant="caption" color="grey.300" >
                  No. 24, Kothari Nagar, 1st Street, Ramapuram, Chennai - 600 089.
                 </Typography>
               </Box>
                </Grid>
              
              
             
             
              </Grid>
              </Grid>
            
          <Grid item xs={7} >

          <Box sx={{ display:"grid", justifyContent:"center" }} >
            <Typography  variant="h4" sx={{ color:"warning.lighter" , mb:2}} > Ping us Your Doubts! </Typography>

               <TextField  label='Name' variant="outlined" color='warning'  sx={{ fontWeight:"900", width:"100%",mb:2 , opacity:"100%"}} />
               <TextField  gutterBottom label='Email Id' variant="outlined" color='warning' sx={{ width:"100%",color:"warning.main" , mb:2 , opacity:"100%"}} />
               <TextareaAutosize  placeholder='Queries?' variant="outlined" color='warning'  minRows={3} style={{ maxWidth:"320px", opacity:"50%"}}  />
               <Box sx={{  justifyContent:"center",mt:4  }} >
               <Button  variant="contained" color='warning' sx={{ width:"50%" }}  >Submit</Button>
               </Box>
              
            </Box>

          </Grid>
            
            </Grid>
          
          </Container>
       
        </Stack>
        {/* --------------------------------------for Mobile------------------------------------------------------------ */}
        <Stack sx={{display:{ xs:"flex", md:"none" ,lg:"none" } ,width:"100vw", height:"100vh" , backgroundImage:"url('https://cutewallpaper.org/21/contact-us-background-image/Contact-Us-Background-Chief-Sales-Leader.jpg')" }} >
        
         <Container >
          <Box  sx={{ display:"flex",justifyContent:"flex-end" , pt:10 ,mb:-14 }}>
                <Link to="/" style={{ position:"relative",textDecoration:"none",}} >
                <LogoutOutlinedIcon  fontSize='medium' color='warning' />
                </Link >
            
             </Box>
              <Stack >
            <Typography variant="h6" fontFamily="Josefin Sans" color="warning.main" textAlign="left" pt={10} mb={-2} >
                Contact Us
            </Typography>
              </Stack>

       <Divider orientation='horizontal' sx={{ bgcolor:"white", width:"100%", justifySelf:"center", mt:2 }} />
            
              <Grid container  item xs={12}  >
                <Grid container  spacing={4} sx={{position:"static"}} mt={5} >
         
                <Grid item xs={6} >
                <Box sx={ {   bgcolor:"grey.800", borderRadius:"5%"  ,width:"100%", height:"100px" , display:"grid", padding:"10px"}}  >
                  <Icon  >
                  <LanguageIcon color='primary' />
                  </Icon>
                 
                  <Typography variant="body1" fontWeight="bold" sx={{  color:"warning.lighter" }} >
                   Our Official Site
                  </Typography>
                  <Typography variant="caption"  color="grey.300">
                   www.availble.digital
                 </Typography>
               </Box>

                </Grid>
         
 
                <Grid item xs={6} >
                <Box  sx={ {  bgcolor:"grey.800", borderRadius:"5%"  ,width:"100%", height:"100px" , display:"grid", padding:"10px" }} >
                  <Icon  >
                  <CallIcon color='info' />
                  </Icon>
                <Typography  variant="body1" fontWeight="bold" sx={{ color:"warning.lighter" }} >
                    PHONE NUMBER
                  </Typography>
                  <Typography variant="caption" color="grey.300" >
                   +91 94442 08901
                 </Typography>
               </Box>
                </Grid>
    
      
                <Grid item xs={12}  >
                <Box  sx={ {  bgcolor:"grey.800", borderRadius:"5%"  ,width:"100%", height:"100px" , display:"grid" , padding:"10px" }}  >
                <Icon  >
                  <EmailIcon sx={ { color:"error.light" }} />
                  </Icon>
                <Typography variant="body1" fontWeight="bold" sx={{ color:"warning.lighter"}} >
                   EMAIL
                  </Typography>
                 <Typography variant="caption" color="grey.300" >
                   available2k22@gmail.com
                 </Typography>
               </Box>
                </Grid>
       
        
                <Grid item lg={12}  >
                <Box  sx={ {  bgcolor:"grey.800", borderRadius:"5%"  ,width:"100%", height:"100px" , display:"grid" , padding:"10px" }}  >
                <Icon  >
                  <LocationOnIcon color='error'  />
                  </Icon>
                <Typography variant="body1" fontWeight="bold" sx={{ color:"warning.lighter"}} >
                   Address
                  </Typography>
                 <Typography variant="caption" color="grey.300" >
                  No. 24, Kothari Nagar, 1st Street, Ramapuram, Chennai - 600 089.
                 </Typography>
               </Box>
                </Grid>
         
             
             
              </Grid>
              </Grid>
 
            
            
          </Container>
   
      
        </Stack>
      
        <Footer />
        </div>
     
    );
};

export default Contact;

import {  Button, Grid,  Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import NavBar from '../Nav';
import Hint from "./Hint" 
import TopServices from "./Topservices";
// import { Link } from 'react-router-dom';
import Footer from "../Footer"
import { Link } from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Helmet from 'react-helmet';


const Home = () => {

    return (
      < >
<div style={{ width:"100%",height:"100%" , position:"relative" }} >

  <Helmet >
                <title>Available Services | Home </title>
                <meta name='description' content='Your Demand Has Been Completed by our Profesional Services' />
   </Helmet>

       {/* ---------------------------------Hero Home------------------------------------------------------------------------------------------ */}
        <div  style={{ position:"static",width:"100%", height:"100vh",  borderRadius:"0% 0% 0% 0% "  }} >
           
           <div>
           <NavBar />
           <div style={{ width:"100%",backgroundImage:"url('https://www.chiefsalesleader.com/wp-content/uploads/2018/03/Text-Book-Background.png')", clipPath: "ellipse(60% 87% at 45.12% 0%)" }} >
           
            <Grid container  >
                <Grid item xs={3}>
                    
                </Grid>
                <Grid item xs={6} sx={{ width:"100%" }} >
                 <Box sx={{height:"100vh", display:{xs:"none" , md:"flex", lg:"flex"}, alignItems:"center", justifyContent:"center", textAlign:"center" }} >
                    <Box>
                    <AnimationOnScroll animateIn="animate__flipInX">
                     
                     <Typography 
                     variant='h1' 
                    //  gutterBottom
                    //  component="a"
                     sx={{
                        //  marginTop:"0%",
                         fontFamily: 'Josefin Sans',
                         fontWeight: 500,
                         letterSpacing: '.3rem',
                         color: 'warning.light',
                           }}>
                       AVAILABLE
                     </Typography>
                    </AnimationOnScroll>

           <AnimationOnScroll animateIn="animate__fadeIn">
                     <Typography 
                     variant='h6' 
                     gutterBottom
                     sx={{
                        //  marginTop:"55%",
                         fontFamily: 'Tapestry',
                        //  padding:"10px",
                         fontWeight: 300,
                         letterSpacing: '.01rem',
                         color: 'grey.600',
                           }}>
                       Your Demand Has Been Completed by our Profesional Services
                     </Typography>
                     </AnimationOnScroll>
                     <Box sx={{ display:{xs:"none" , md:"flex"}, justifyContent:"center", textAlign:"center" }}  >
                       <Link to="/Services" style={{ textDecoration:"none", width:"100%" }}>
                       <Button 
                     variant='contained'
                     size='large'
                     color='warning'
                     sx={{
                         margin:"10%",
                         color:"white",
                         textAlign:"center",
                         boxShadow:"primary"

                     }}
                     
                     >
                         Make Order Now
                     </Button>
                       </Link>
                 

                     </Box>
                     </Box>
                     
                 </Box>
                </Grid>
                <Grid item xs={3}>

                </Grid>
            </Grid>
            </div>
            <Box sx={{ height:"100vh",backgroundImage:"url('https://www.chiefsalesleader.com/wp-content/uploads/2018/03/Text-Book-Background.png')", display:{xs:"flex" , md:"none"}, alignItems:"center", justifyContent:"center", textAlign:"center" }} >
                    <div>
                    <AnimationOnScroll animateIn="animate__flipInX">
                       <Typography 
                     variant='h3'
                     sx={{
                         alignSelf:"center",
                        //  display:"-ms-grid",
                        //  marginTop:"0%",
                         fontFamily: 'Josefin Sans',
                         fontWeight: 500,
                         letterSpacing: '.1rem',
                         color: 'warning.light',
                           }}>
                       AVAILABLE
                     </Typography>
                     </AnimationOnScroll>
                     <AnimationOnScroll animateIn="animate__fadeInDown" delay="500ms" >
                     <Typography 
                     variant='body2' 
                     gutterBottom
                     sx={{
                        //  marginTop:"55%",
                         fontFamily: 'Tapestry',
                         padding:"10px",
                         fontWeight: 300,
                         letterSpacing: '.1rem',
                         color: 'grey.600',
                           }}>
                       Your Demand Has Been Completed by our Profesional Services
                     </Typography>
                     </AnimationOnScroll>
                     <AnimationOnScroll animateIn='animate__fadeIn'>
                     <Box sx={{ display:{xs:"flex" , md:"none"}, justifyContent:"center", textAlign:"center" }}  >
                     <Button 
                     variant='contained'
                     size='small'
                     color='warning'
                     sx={{
                        //  margin:"10%",
                         color:"white",
                         textAlign:"center",
                         boxShadow:"primary"

                     }}
                     >
                         Make Order Now
                     </Button>

                     </Box>
                     </AnimationOnScroll>
              </div>
        </Box>
                 
        </div>
        </div>

</div>
        {/* -------------------------------Discription------------------------------------------------------------------------------------ */}

       <Hint />

 {/* --------------------------------OUR TOP SERVICES----------------------------------------------------------------------------------- */}
        <TopServices />
{/* ----------------------------------------------------------------------------------------------------------------------------- */}

        <Footer /> 
        </>

    );
};


export default Home;


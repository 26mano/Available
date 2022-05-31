import { Grid,  Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';


const index = () => {
    return (
        <div  >
          
             <div  style={{ width:"100%", height:"100%", borderRadius:"0% 0% 0% 20% "}} >
        <Grid  >
{/* --------------------------------For Mobile--------------------------------------------------- */}
<AnimationOnScroll animateOnce={false} animateIn="animate__slideInUp" >
        <Box sx={{ display:{xs:"flex" , md:"none", lg:"none"},  justifyContent:"center", textAlign:"center", backgroundImage:" url('https://i.pinimg.com/originals/74/43/a3/7443a31b6a19e5630b94a6538ff9bdd1.gif') ", pb:4 }} >
                    <Box  sx={{ justifyContent:"center",  }} >
                     <Typography 
                     variant='overline' 
                    //  gutterBottom
                    //  component="a"
                     sx={{
                         position:"inherit",
                         display:{xs:"flex" , md:"none", lg:"none"},
                         marginTop:"20%",
                         fontFamily: 'Josefin Sans',
                         fontWeight: 900,
                         letterSpacing: '.1rem',
                         color: 'error.dark',
                         
                           }}>
                      We’ve developed custom solutions for Fortune 500 companies, startups, enterprises and SMBs
                     </Typography>
                     </Box>
         </Box>
         </AnimationOnScroll>
{/* ----------------------------------For Desktop--------------------------------------------------- */}
         <Box  sx={{ height:"100%", display:{xs:" none" , md:"flex", lg:"flex"},  justifyContent:"center", textAlign:"center", padding:"10px 0px 10px 0px"  }} >
                     
                      <Box  >
           <AnimationOnScroll animateOnce={true} animateIn={'animate__backInRight'} >
           
                    <Typography 
                     variant='h4' 
                     sx={{
                         fontFamily: 'Josefin Sans',
                         fontWeight: 600,                        //  letterSpacing: '.01rem',
                         color: 'error.dark',
                           }}>
                      We’ve developed custom solutions for Fortune 500 companies, startups, enterprises and SMBs
                     </Typography>
                         
           </AnimationOnScroll>
                     </Box>
          
         </Box>  
       
                
            </Grid>
        </div>
        </div>
    );
};

export default index;
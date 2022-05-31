import { Container , Typography} from '@mui/material';
import { Box } from '@mui/system';
// import { MDBContainer, MDBFooter, MDBIcon } from 'mdb-react-ui-kit';
import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from '@mui/material';
// import { Link } from 'react-router-dom';

const index = () => {
    return (
        <div>
         <div style={{ position:"static" }}>
             
           <Box  width="100%" height="100%" sx={{ justifyContent:"center", display:{xs:"none", md:"grid"}, bgcolor:"grey.700", padding:"20px"}} >
               <Container  maxWidth="md"  sx={{ position:"relative"}} >
                <Link href="https://www.facebook.com/available2k22"  style={{ paddingLeft:"50px",paddingRight:"50px",  textDecoration:"none"}} >
                <FacebookOutlinedIcon color='warning' />
                </Link>
                <Link href="https://twitter.com/available2k22" style={{ paddingRight:"50px", textDecoration:"none"  }} >
                <TwitterIcon color='warning' />
                </Link>
                <Link href="https://www.instagram.com/available2k22/" style={{ paddingRight:"50px", textDecoration:"none"  }} >
                <InstagramIcon color='warning' />
                </Link>
                <Link href="/" style={{ paddingRight:"50px", textDecoration:"none" }} >
                <LinkedInIcon color='warning' />
                </Link>
               </Container>
              
           </Box>
           <Box width="100%" height="100%" sx={{ justifyContent:"center", display:{xs:"none", md:"grid"}, bgcolor:"grey.800", padding:"20px"}}>
            
           <Container maxWidth="lg"   >
                   <Typography variant='overline' color="grey.600" >
                   © 2020 Copyright: <span> 
                       <Link  href='https://available.digital/' style={{ textDecoration:"none" , color:"goldenrod" }}>
                         Available.digital
                       </Link> 
               </span>
                   </Typography>
               
               
               </Container>
                  
           </Box>

       </div>

       {/* ------------------------------------------------------------------------------------- */}

       <div >
           <Box  width="100%" height="100%" sx={{justifyContent:"center", display:{xs:"grid", md:"none"}, bgcolor:"grey.700", padding:"10px"}} >
               <Container  maxWidth="md" >
                <Link href="https://www.facebook.com/available2k22"   style={{ paddingLeft:"20px", paddingRight:"20px",  textDecoration:"none" , opacity:"50%"}} >
                <FacebookOutlinedIcon fontSize='xs' color='warning' />
                </Link>
                <Link href="https://twitter.com/available2k22" style={{ paddingRight:"20px", textDecoration:"none" , opacity:"50%"  }} >
                <TwitterIcon fontSize='xs' color='warning' />
                </Link>
                <Link href="https://www.instagram.com/available2k22/" style={{ paddingRight:"20px", textDecoration:"none"  , opacity:"50%" }} >
                <InstagramIcon fontSize='xs' color='warning' />
                </Link>
                <Link href="/" style={{ paddingRight:"20px", textDecoration:"none" , opacity:"50%" }} >
                <LinkedInIcon fontSize='xs' color='warning' />
                </Link>
               </Container>
              
           </Box>
           <Box width="100%" height="100%" sx={{ justifyContent:"center", display:{xs:"grid", md:"none"}, bgcolor:"grey.800", padding:"10px"}}>
            
           <Container maxWidth="xs"   >
                   <Typography fontSize="xs" variant='overline' color="grey.600"  >
                   © 2020 Copyright: <span> 
                       <Link  to='https://available.digital/' style={{ textDecoration:"none" , color:"goldenrod" }}>
                         Available.digital
                       </Link> 
               </span>
                   </Typography>
               
               
               </Container>
                  
           </Box>

       </div>
        </div>
       
    );
};

export default index;
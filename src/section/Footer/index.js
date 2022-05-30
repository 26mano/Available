import { Container , Typography} from '@mui/material';
import { Box } from '@mui/system';
// import { MDBContainer, MDBFooter, MDBIcon } from 'mdb-react-ui-kit';
import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const index = () => {
    return (
        <div>
         <div style={{ position:"relative" }}>
           <Box  width="100%" height="100%" sx={{ justifyContent:"center", display:{xs:"none", md:"grid"}, bgcolor:"grey.700", padding:"20px"}} >
               <Container  maxWidth="md"  sx={{ position:"relative"}} >
                <Link to="/"  style={{ paddingLeft:"50px",paddingRight:"50px",  textDecoration:"none"}} >
                <FacebookOutlinedIcon color='warning' />
                </Link>
                <Link to="/" style={{ paddingRight:"50px", textDecoration:"none"  }} >
                <TwitterIcon color='warning' />
                </Link>
                <Link to="/" style={{ paddingRight:"50px", textDecoration:"none"  }} >
                <InstagramIcon color='warning' />
                </Link>
                <Link to="/" style={{ paddingRight:"50px", textDecoration:"none" }} >
                <LinkedInIcon color='warning' />
                </Link>
               </Container>
              
           </Box>
           <Box width="100%" height="100%" sx={{ justifyContent:"center", display:{xs:"none", md:"grid"}, bgcolor:"grey.800", padding:"20px"}}>
            
           <Container maxWidth="lg"   >
                   <Typography variant='overline' color="grey.600" >
                   © 2020 Copyright: <span> 
                       <Link  to='https://available.digital/' style={{ textDecoration:"none" , color:"goldenrod" }}>
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
                <Link to="#"  style={{ paddingLeft:"20px", paddingRight:"20px",  textDecoration:"none" , opacity:"50%"}} >
                <FacebookOutlinedIcon fontSize='xs' color='warning' />
                </Link>
                <Link to="#" style={{ paddingRight:"20px", textDecoration:"none" , opacity:"50%"  }} >
                <TwitterIcon fontSize='xs' color='warning' />
                </Link>
                <Link to="#" style={{ paddingRight:"20px", textDecoration:"none"  , opacity:"50%" }} >
                <InstagramIcon fontSize='xs' color='warning' />
                </Link>
                <Link to="#" style={{ paddingRight:"20px", textDecoration:"none" , opacity:"50%" }} >
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
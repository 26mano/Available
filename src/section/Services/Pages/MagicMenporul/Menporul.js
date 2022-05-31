import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import "../Service.css";
import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import MMLogo from "./mmlogo.svg";
import why from "./whymm.svg";
import Benefit from "./mmbenefit.svg";
import Helmet from 'react-helmet';

const Menporul = () => {

    const content = [
        {   
            
            title: "Web Application Devolepment",
            description: "Full Stack",
            image :"https://hachinet.com/upload/2020/08/hinh-anh-bai-viet-202008310728_349402218.jpg",
            id : 0
            
            
        },
        {   
            
            title: "Internship Classes",
            description: "Both Online and Offline",
            image :"https://capital-placement.b-cdn.net/wp-content/uploads/2020/05/The-importance-of-an-internship.png",
            id : 0
            
            
        },
   
    ]
    
    return (
        <div>
            <Helmet>
                <title>Magic Menporul | Software Solution</title>
                <meta name='description' content='Magic Menporul Software Solution private Limited' />
                <meta name='keywords' content='web designing, web devolepment, android, internship, course complition and skills & Product improvement' />
            </ Helmet>

        <div className='software-head'>
      <Grid container maxWidth="lg" spacing={4} >
              <Grid item lg={7} >
                  <Box className="left-head"  >
                  <Typography variant='h2'  fontFamily="Fantacy" textAlign="left" >
                  <span style={{ fontFamily:"sans-serif" , color:"rgb(6, 70, 51)" , textShadow:"2px 1px 2px rgb(15, 90, 51)" }} > Magic </span> Menporul
                </Typography>
                <Typography variant='h5' gutterBottom fontFamily="Rye" textAlign="left" >Software Solutions (p) Ltd. </Typography>
                <Typography variant="subtitle2" paddingLeft="20px"  gutterBottom textAlign="left" fontFamily="sans-serif" > 
                A good job description starts with an attention-grabbing summary of the position and its role within your company. Your summary should provide an overview of your company and expectations for the position. Outline the types of activities and responsibilities required for the job so job seekers can determine if they are qualified, or if the job is suitable for them.
                </Typography>
                <Button variant="outlined" sx={{ color:"azure", marginLeft:"-70%",marginTop:"40px" , padding:"10px", border:"2px solid white" , justifyContent:"space-around" }} href="tel:+919444208901" >
                <CallIcon style={{ paddingRight:"10px" }} /> <span  > Call Us  </span>  
                </Button>
                  </Box>
              </Grid>

              <Grid item lg={5} >
              <Box className="right-head"  >
                  {/* <img src={Cloud} alt='Project-box' style={{ width:"600px", height:"600px" , }} /> */}
                  <img src={MMLogo} alt='Project-box' style={{ width:"600px", height:"600px" , }} />
                  </Box>
              </Grid>

          </Grid>
          <br />
          <br /> <br /> <br /> <br />
          <Container maxWidth="lg" className="container"  >
              <Box  padding="50px" >
                  <Grid container spacing={2} >
                      <Grid item md={6} >
                      <Typography variant='h5' color="black" gutterBottom fontFamily="fantasy" textAlign="left" >
                      Why choose <span color='purple' > Magic Menporul?  </span> 
                  </Typography> 
                  <Typography variant="inherit" color='gray' textAlign="justify" gutterBottom padding="20px"  >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Typography>
                
                      </Grid>

                      <Grid item md={6} >
                          <Box display="flex" justifyContent="center" >
                          <img src={why} alt='why' width="450px" paddingLeft="20px" />
                          </Box>
                        
                      </Grid>

                  </Grid>
                  
                 
              </Box>
          </Container>

          <Container maxWidth="lg" className='container2' >
              <Grid  container spacing={2} >
                  <Grid item lg={6} >
                 
                        <Box display="flex" justifyContent="center" >
                          <img src={Benefit} alt='why' width="550px"   />
                          </Box>
                        
                  </Grid>
                  <Grid item lg={6} >
                  <Typography variant='h4' gutterBottom fontFamily="fantasy" >
                      Benefits Of <span >Magic Menporul</span>
                  </Typography >
                  <Typography variant="body1" textAlign="left" sx={{ lineHeight:"40px" }}  >

                  
                  <li>Civil engineers are the people in charge of managing the construction projects.  </li>
                        
                  <li>Civil engineers can choose from many areas of specialization. </li>
                        
                  <li>Tendering the contracts and hire contractors</li>
                        
                  <li>Adhering to the guidelines created by the government, local bodies and clients when planning, creating and maintaining infrastructure</li>
                        
                  <li>Civil engineers are the people in charge of managing the construction projects.  </li>
                        
                  </Typography>
                  </Grid>
              </Grid>
          </Container>
          <br />
          <br /> <br /> <br /> <br />
          <Container maxWidth="lg" className="container"  >
              <Box  padding="50px" >
                  <Grid  >
                   
                      <Typography variant='h3' color="black" gutterBottom fontFamily="fantasy" textAlign="center" justifyContent="center" >
                       Our<span  > Services  </span> 
                       </Typography>
                 <Typography variant="subtitle1" color="black" textAlign="center" justifyContent="center" >
                     our services are highly reputable and budget friendly!
                 </Typography>
                        
                     
          <Grid container spacing={2} pt={5} >
             { content.map((card) => (  
             <Grid item lg={3}  pr="10px" >
              <Card sx={{  boxShadow :"4px 2px 8px #ccc" , border:"3px solid  rgb(13, 196, 141)", alignSelf:"stretch"}}>
              
                  <CardMedia
                      component="img"
                      height="180"
                      image= {card.image}
                      alt={card.id}
                    />
                   
                    <CardContent  >
                    
                      <Typography  variant="h5" component="div" fontFamily="fantasy" >
                        {card.title}
                      </Typography>
                      
                      <Typography gutterBottom  color="text.secondary">
                          {card.description}
                      </Typography>
                      <Box className='order-btn'  >
                      <Button variant="contained" fullWidth  >
                          Make Order
                      </Button>
                      </Box>
                      
                    </CardContent>
                  
                  
                </Card>
              </Grid>
              ) ) } 
              
          </Grid>

                  </Grid>
                  
                 
              </Box>
          </Container>
          <br /> <br />
          <Box display="block" textAlign="center" sx={{ bgcolor:"dimgray" , width:"100vw" , height:"89px" }} >
           <Typography variant='h5' fontFamily="serif" >
               For More Information
           </Typography>
           <Typography variant="subtitle1" >
               Call Us : +91 94442 08901 & +91 88381 42624
           </Typography>
           <Typography variant="subtitle1" >
               Visit : https://magicmenporul.com
           </Typography>
          </Box>
      </div>
  </div>
    );
};

export default Menporul;
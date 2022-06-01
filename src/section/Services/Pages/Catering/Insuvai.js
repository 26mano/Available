import React from 'react';
import { Button, Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import "../Service.css";
import CallIcon from '@mui/icons-material/Call';
import InsuvaiLogo from "./Insuvailogo.svg";
import MobileLogo from "./mobileLogo.svg";
import why from "./whyinsuvai.svg";
import Benefit from "./Benefitinsuvai.svg";
import Helmet from 'react-helmet';
import Footer from '../../../Footer';
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Insuvai = () => {
    const content = [
        {   
            title: "Marriage Function",
            description: "Menu is Your wish",
            image :"https://www.sumathicatering.com/images/slider1.jpg",
            id : 0,
            delay:0.4
            
        },
        {         
            title: "Party Stall",
            description: "All type of dishes we have",
            image :"https://i.ytimg.com/vi/WEsKqCK3pkM/maxresdefault.jpg",
            id : 0,
            delay:0.6
        },
        {         
            title: "Buffet System",
            description: "Menu is your wish",
            image :"https://lh3.googleusercontent.com/p/AF1QipOu98s7j3VoZVCLJV6T-qm2l21Z-G4ojMTziaBJ=w1080-h608-p-no-v0",
            id : 0,
            delay:0.8
        },
        {         
            title: "Catering Services",
            description: "Server boys",
            image :"https://4.imimg.com/data4/JO/KF/GLADMIN-9357094/leaflet-service-500x500.png",
            id : 0,
            delay:1.1
        },
   
    ]
    
    return (
    <div >
            <Helmet>
                    <title> Insuvai Catering Services | Cooking</title>
                     <meta name='description' content='Arusuvaiyum naavil vilaiyadum paarambhariya samaiyal' />
                     <meta name='keywords' content='marriage , festival , birthday, party, nativity ritual function all type of catering service we do' />
            </Helmet>
{/* ----------------------for Desktop------------------------------------------ */}
    <Stack sx={{ display:{xs:"none", md:"flex"},backgroundImage:"url('https://img.wallpapersafari.com/desktop/1440/900/62/82/3n02NO.jpg')" }} >
          
    <Container maxWidth="lg"  >
   
        <Grid container maxWidth="lg" spacing={4} sx={{ width:"100%",height:"100vh", justifyContent:"center", alignItems:"center" }} >
              <Grid item lg={7} >
              <Box   >
                  <AnimationOnScroll animateIn='animate__flipInX' >
                <Typography variant='h2' color="grey.300"  fontFamily="Fantacy" textAlign="left" >
                  <span style={{ fontFamily:"sans-serif" , color:"rgb(6, 170, 51)" , textShadow:"2px 1px 2px rgb(6, 100, 1)" }} > Insuvai </span> Catering
                </Typography>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeIn' >
                <Typography variant='h5' gutterBottom color="grey.300" fontFamily="primary" textAlign="left" >
                    Professional Catering Services 
                </Typography>

                <Typography variant="subtitle2" color="grey.100" pb={5} gutterBottom textAlign="left" fontFamily="sans-serif" > 
                A good job description starts with an attention-grabbing summary of the position and its role within your company. Your summary should provide an overview of your company and expectations for the position. Outline the types of activities and responsibilities required for the job so job seekers can determine if they are qualified, or if the job is suitable for them.
                </Typography>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__flipInX' >
                <Button variant="outlined"  sx={{ padding:"10px",color:"azure", border:"2px solid goldenrod" , justifyContent:"space-around" }} href="tel:+919444208901" >
                <CallIcon style={{ paddingRight:"10px" }} /> <span  > Call Us  </span>  
                </Button>
                </AnimationOnScroll>
              </Box>
              </Grid>

              <Grid item lg={5} >
              <Box >
                  <AnimationOnScroll animateOnce="true" animateIn='animate__fadeIn' >
                  <img src={InsuvaiLogo} alt='Project-box' style={{ width:"100%" }} />
                  </AnimationOnScroll>
                  </Box>
              </Grid>

          </Grid>
    
          </Container>
          <br />

          <Container maxWidth="lg" >
              <Box  padding="50px" color="warning.main" sx={{ bgcolor:"transparent", borderRadius:"10px", border:"3px solid goldenrod", boxShadow:" 1px 1px 6px goldenrod" }} >
                  <Grid container spacing={2} >
                      <Grid item lg={6} >
                          <AnimationOnScroll animateIn='animate__flipInX' >
                      <Typography variant='h5' color="Warning" gutterBottom fontFamily="fantasy" textAlign="left" >
                      Why choose <span color='purple' > Insuvai Catering?  </span> 
                      </Typography> 
                         </AnimationOnScroll>
                         <AnimationOnScroll animateIn='animate__fadeIn' >
                  <Typography variant="inherit" color='grey.300' textAlign="justify" gutterBottom padding="20px"  >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Typography>
                  </AnimationOnScroll>
                      </Grid>

                      <Grid item lg={6} >
                          
                          <Box display="flex" justifyContent="center" >
                              <AnimationOnScroll animateIn='animate__pulse'>
                          <img src={why} alt='why' width="450px" paddingLeft="20px" />
                          </AnimationOnScroll>
                          </Box>
                        
                      </Grid>

                  </Grid>
                  
                 
              </Box>
          </Container>

          <Container maxWidth="lg" sx={{ width:"100%", height:"100%", margin:"100px" }} >
              <AnimationOnScroll animateOnce="true" animateIn='animate__fadeIn'>
              <Grid  container spacing={2} >
                  <Grid item lg={6} >
                 
                        <Box display="flex" justifyContent="center" >
                          <img src={Benefit} alt='why' width="450px"   />
                          </Box>
                        
                  </Grid>
                  <Grid item lg={6} >
                  <Typography variant='h4' color="warning.main" gutterBottom fontFamily="fantasy" >
                      Benefits Of <span >Insuvai Catering</span>
                  </Typography >
                  <Typography variant="body1" color="grey.300" textAlign="left" sx={{ lineHeight:"40px" }}  >

                  
                  <li>Civil engineers are the people in charge of managing the construction projects.  </li>
                        
                  <li>Civil engineers can choose from many areas of specialization. </li>
                        
                  <li>Tendering the contracts and hire contractors</li>
                        
                  <li>Adhering to the guidelines created by the government, local bodies and clients when planning, creating and maintaining infrastructure</li>
                        
                  <li>Civil engineers are the people in charge of managing the construction projects.  </li>
                        
                  </Typography>
                  </Grid>
              </Grid>
              </AnimationOnScroll>
          </Container>
          <br />
   
          <Container maxWidth="lg" sx={{ width:"100%", height:"100%", pb:10 }}  >
              <Box  padding="50px" sx={{ bgcolor:"transparent", borderRadius:"10px", border:"3px solid goldenrod", boxShadow:" 1px 1px 6px goldenrod" }}  >
                  <Grid  >
                   <AnimationOnScroll animateIn='animate__flipInX' >
                      <Typography variant='h3' color="warning.main" gutterBottom fontFamily="fantasy" textAlign="center" justifyContent="center" >
                       Our<span  > Services  </span> 
                       </Typography>
                       </AnimationOnScroll>
                 <Typography variant="subtitle1" color="grey.400" textAlign="center" justifyContent="center" >
                     our services are highly reputable and budget friendly!
                 </Typography>
                        
            <Container> 
               
               <Grid container spacing={2} pt={5} >
             { content.map((card) => (  
             <Grid item lg={3}  pr="10px" >
                  <AnimationOnScroll animateIn='animate__fadeInUp' duration={card.delay} >  
              <Card sx={{  boxShadow :"1px 1px 8px goldenrod" ,  alignSelf:"stretch"}}>
              
                  <CardMedia
                      component="img"
                      height="180"
                      image= {card.image}
                      alt={card.id}
                    />
                   
                    <CardContent  >
                    
                      <Typography  variant="h5" component="text" fontFamily="fantasy" >
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
                </AnimationOnScroll>
              </Grid>
              ) ) } 
              
               </Grid>
               
            </Container>
                  </Grid>
                  
                 
              </Box>
          </Container>
         <Footer />
         
      </Stack>
{/* ----------------------for Mobile-------------------------------------------- */}

<Stack sx={{ display:{xs:"flex", md:"none"},backgroundImage:"url('https://img.wallpapersafari.com/desktop/1440/900/62/82/3n02NO.jpg')" , backgroundRepeat:"false"}} >
          
    <Container maxWidth="xs"  >
   
        <Grid container maxWidth="xs"  sx={{ width:"100%",height:"100vh", justifyContent:"center", alignItems:"center" }} >
              <Grid item xs={6} sx={{ width:"100%",justifyContent:"center" , mb:-20 }} >
              <Box >
                        <AnimationOnScroll animateIn='animate__pulse'>
                          <img src={MobileLogo} alt='Mobile' width="150"  />
                          </AnimationOnScroll>
                </Box>

              </Grid>
              
              <Grid item xs={12} >
              <Box   >
                <AnimationOnScroll animateIn='animate__flipInX' >
                <Typography variant='h3' color="grey.300"  fontFamily="Fantacy" sx={{display:{xs:"flex", md:"none"}, textAlign:"center"}}  >
                  <span style={{ fontFamily:"sans-serif" , color:"rgb(6, 170, 51)" , textShadow:"2px 1px 2px rgb(6, 100, 1)" }} > Insuvai </span> Catering
                </Typography>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeIn' >
                <Typography variant='body1' gutterBottom color="grey.300" fontFamily="primary" textAlign="Center" >
                    Professional Catering Services 
                </Typography>

                <Typography variant="subtitle2" color="grey.100"  gutterBottom textAlign="Justify" fontFamily="sans-serif" flexWrap="wrap-reverse" > 
                A good job description starts with an attention-grabbing summary of the position and its role within your company. Your summary should provide an overview of your company and expectations for the position. Outline the types of activities.
                </Typography>
                </AnimationOnScroll>

              
                    <Box sx={{width:"100%", alignItems:"center", justifyContent:"center", mt:5 }} >
                <Button variant="outlined"  sx={{ padding:"10px",color:"azure", border:"2px solid goldenrod" }} href="tel:+919444208901" >
                <CallIcon style={{ paddingRight:"10px" }} /> <span  > Call Us  </span>  
                </Button>
                </Box>
                
              </Box>
              </Grid>

              {/* <Grid item xs={6} >
              <Box >
                  <AnimationOnScroll animateOnce="true" animateIn='animate__fadeIn' >
                  <img src={InsuvaiLogo} alt='Project-box' style={{ width:"100%" }} />
                  </AnimationOnScroll>
                  </Box>
              </Grid> */}

          </Grid>
    
          </Container>
          <br />

          <Container maxWidth="xs" >
              <Box  padding="10px" color="warning.main" sx={{ bgcolor:"transparent", borderRadius:"10px", border:"3px solid goldenrod", boxShadow:" 1px 1px 6px goldenrod" }} >
                  <Grid container  >
                      <Grid item xs={12} >
                          <AnimationOnScroll animateIn='animate__flipInX' >
                      <Typography variant='h6' color="Warning" gutterBottom fontFamily="fantasy" textAlign="left" >
                      Why choose <span color='purple' > Insuvai Catering?  </span> 
                      </Typography> 
                         </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeIn' >
                  <Typography variant="subtitle2" color='grey.300' textAlign="justify" gutterBottom padding="20px"  >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Typography>
                </AnimationOnScroll>
                      </Grid>

                      {/* <Grid item lg={6} >
                          
                          <Box display="flex" justifyContent="center" >
                              <AnimationOnScroll animateIn='animate__pulse'>
                          <img src={why} alt='why' width="450px" paddingLeft="20px" />
                          </AnimationOnScroll>
                          </Box>
                        
                      </Grid> */}

                  </Grid>
                  
                 
              </Box>
          </Container>

          <Container  sx={{ width:"100%", height:"100%", pt:10, pb:5 }} >
              <AnimationOnScroll animateOnce="true" animateIn='animate__fadeIn'>
              <Grid  container >
               
                  <Grid item xs={12} >
                  <Typography variant='h6' color="warning.main" gutterBottom fontFamily="fantasy" >
                      Benefits Of <span >Insuvai Catering</span>
                  </Typography >
                  <Typography variant="body1" color="grey.300" textAlign="left" sx={{ lineHeight:"40px" }}  >

                  
                  <li>Civil engineers are the people in charge of managing the construction projects.  </li>
                        
                  <li>Civil engineers can choose from many areas of specialization. </li>
                        
                  <li>Tendering the contracts and hire contractors</li>
                        
                  <li>Adhering to the guidelines created by the government, local bodies and clients when planning, creating and maintaining infrastructure</li>
                        
                  <li>Civil engineers are the people in charge of managing the construction projects.  </li>
                        
                  </Typography>
                  </Grid>

              </Grid>
              </AnimationOnScroll>
          </Container>
          <br />
   
          <Container maxWidth="xs" sx={{ width:"100%", height:"100%", pb:10 }}  >
              <Box  padding="20px" sx={{ bgcolor:"transparent", borderRadius:"10px", border:"3px solid goldenrod", boxShadow:" 1px 1px 6px goldenrod" }}  >
                  <Grid  >
                   <AnimationOnScroll animateIn='animate__flipInX' >
                      <Typography variant='h5' color="warning.main" gutterBottom fontFamily="fantasy" textAlign="center" justifyContent="center" >
                       Our<span  > Services  </span> 
                       </Typography>
                       </AnimationOnScroll>
                 <Typography variant="subtitle2" color="grey.400" textAlign="center" justifyContent="center" >
                     our services are highly reputable and budget friendly!
                 </Typography>
                        
            
               
               <Grid container spacing={2} pt={5} sx={{ justifyContent:"center" }} >
             { content.map((card) => (  
             <Grid item xs={10}  >
                  <AnimationOnScroll animateIn='animate__fadeInUp' duration={card.delay} >  
              <Card sx={{ width:"100%",height:"100%", boxShadow :"1px 1px 8px goldenrod" ,  alignSelf:"stretch"}}>
              
                  <CardMedia
                      component="img"
                      height="100"
                      image= {card.image}
                      alt={card.id}
                    />
                   
                    <CardContent  >
                    
                      <Typography  variant="subtitle1"  fontFamily="fantasy" >
                        {card.title}
                      </Typography>
                      
                      <Typography variant='body2' gutterBottom  color="grey.500">
                          {card.description}
                      </Typography>
                      <Box >
                      <Button variant="contained" size='small'   >
                          Make Order
                      </Button>
                      </Box>
                      
                    </CardContent>
                  
                  
                </Card>
                </AnimationOnScroll>
              </Grid>
              ) ) } 
              
               </Grid>
               
           
                  </Grid>
                  
                 
              </Box>
          </Container>
         <Footer />
         
</Stack>

  </div>
    );
};

export default Insuvai;
import { Button, Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import "../Service.css";
import CallIcon from '@mui/icons-material/Call';
import EditLogo from "./editlogo.svg";
import MobileEditLogo from "./mobileEdit.svg";
import why from "./whyedit.svg";
import Benefit from "./editbenefit.svg";
import Helmet from 'react-helmet';
import Footer from '../../../Footer';
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Editing = () => {
    const content = [
        {   
            
            title: "Feature Film Editing",
            description: "Start to End",
            image :"https://www.adorama.com/alc/wp-content/uploads/2018/08/shutterstock_575862382.jpg",
            id : 0,
            delay: 0.3
            
            
        },
        {   
            
            title: "Short Film Editing",
            description: "Start to End",
            image :"https://i.ytimg.com/vi/vjKVH1sxfl0/maxresdefault.jpg",
            id : 0,
            delay: 0.6
            
            
        },
        {   
            
            title: "Commercial Editing",
            description: "Start to End",
            image :"https://5.imimg.com/data5/NS/OO/NX/SELLER-11123652/edius-pro-wedding-video-editing-projects-dongle-500x500.PNG",
            id : 0,
            delay: 0.9
            
            
        },
        {   
            
            title: "Youtube video Editing",
            description: "Start to End",
            image :"https://lumen5.com/learn/wp-content/uploads/2019/08/7-Best-YouTube-Video-Editor-Tools-to-Make-Killer-YouTube-Videos.jpg",
            id : 0,
            delay: 1
            
            
        },
        {   

            title: "Photoshop Editing",
            description: "All Features",
            image :"https://shotkit.com/wp-content/uploads/2020/08/photoshop-history.jpg",
            id : 0,
            delay: 1.2

        },
        {   

            title: "Dance Video Editing",
            description: "All Features",
            image :"https://beecut.com/wp-content/uploads/2019/05/text-20190528.jpg",
            id : 0,
            delay: 1.4

        },
        {   

            title: "Poster,Banner,Logo & Business Card Editing",
            description: "All Features",
            image :"https://blog.eduonix.com/wp-content/uploads/2019/06/logo-2724500_960_720.jpg",
            id : 0,
            delay: 1.6

        },
        {   

            title: "Invitation & Certificate Editings",
            description: "All Features",
            image :"https://i.ytimg.com/vi/iuggaO73JJs/maxresdefault.jpg",
            id : 0,
            delay: 1.8

        },

        
    ]

    return (
        <div>
            <Helmet>
                <title>UV Visual Studio | Professional Photo & Video Editing</title>
                <meta name='description' content='We make your ideas awesome with our professional work' />
            </Helmet>
            {/* ----------------------for Desktop------------------------------- */}
              <Stack sx={{display:{xs:"none" , md:"flex"}, backgroundImage:"url('https://cdn.wallpapersafari.com/9/31/F0aPyg.jpg')" }}>
          
          <Container >
            <Grid container maxWidth="lg" spacing={4} sx={{ width:"100%" , height:"100vh", justifyContent:"center", alignItems:"center" }} >
                    <Grid item lg={7} >
                        <Box  >
                        <Typography variant='h2'  color="azure" fontFamily="Fantacy" textAlign="left" >
                        <span style={{ fontFamily:"sans-serif" , color:"azure" , textShadow:"2px 1px 2px grey" }} > UV </span> Visual Studio
                      </Typography>
                      <Typography variant='h5' gutterBottom color="grey.400" fontFamily="Rye" textAlign="left" >The Professional Photo & Video Editor.</Typography>
                      <Typography variant="subtitle2" color="grey.400"  gutterBottom textAlign="left" fontFamily="sans-serif" > 
                      A good job description starts with an attention-grabbing summary of the position and its role within your company. Your summary should provide an overview of your company and expectations for the position. Outline the types of activities and responsibilities required for the job so job seekers can determine if they are qualified, or if the job is suitable for them.
                      </Typography>
                      <Button variant="outlined" sx={{ color:"azure", border:"2px solid skyblue" , justifyContent:"space-around", mt:10 }} href="tel:+919444208901" >
                      <CallIcon style={{ paddingRight:"10px" }} /> <span  > Call Us  </span>  
                      </Button>
                        </Box>
                    </Grid>

                    <Grid item lg={5} >
                    <Box   >
                        {/* <img src={Cloud} alt='Project-box' style={{ width:"600px", height:"600px" , }} /> */}
                        <img src={EditLogo} alt='Project-box' style={{ width:"100%" , }} />
                        </Box>
                    </Grid>

                </Grid>
          </Container>
                <br />
                
                <Container maxWidth="lg" >
                    <Box  padding="50px" sx={{ bgcolor:"transparent", borderRadius:"10px", border:"2px solid goldenrod", boxShadow:" 1px 1px 6px goldenrod", mb:2}}  >
                        <Grid container spacing={2} >
                            <Grid item lg={6} >
                            <Typography variant='h5' color="warning.main" gutterBottom fontFamily="fantasy" textAlign="left" >
                            Why choose <span color='purple' > UV Visual Studio?  </span> 
                        </Typography> 
                        <Typography variant="inherit" color='azure' textAlign="justify" gutterBottom padding="20px"  >
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Typography>
                      
                            </Grid>

                            <Grid item lg={6} >
                                <Box display="flex"  >
                                <img src={why} alt='why' width="100%"  />
                                </Box>
                              
                            </Grid>

                        </Grid>
                        
                       
                    </Box>
                </Container>

                <Container maxWidth="lg"  >
                    <Grid  container spacing={2} mt={10} sx={{ justifyContent:"center" }}>
                        <Grid item lg={6} >
                       
                              <Box display="flex"  >
                                <img src={Benefit} alt='Benefit' width="80%"   />
                                </Box>
                              
                        </Grid>
                        <Grid item lg={6}  >
                        <Typography variant='h4' color="warning.main" gutterBottom fontFamily="fantasy" >
                            Benefits Of <span >UV Visual Studio</span>
                        </Typography >
                        <Typography variant="body1" color="azure" textAlign="left" sx={{ lineHeight:"40px" }}  >

                        
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
                
                <Container maxWidth="lg"   >
                    <Box  padding="50px" sx={{ bgcolor:"transparent", borderRadius:"10px", border:"2px solid goldenrod", boxShadow:" 1px 1px 6px goldenrod", mb:2}}  >
                        <Grid  >
                         
                            <Typography variant='h3' color="warning.main" gutterBottom fontFamily="fantasy" textAlign="center" justifyContent="center" >
                             Our<span  > Services  </span> 
                             </Typography>
                       <Typography variant="subtitle1" color="azure" textAlign="center" justifyContent="center" >
                           our services are highly reputable and budget friendly!
                       </Typography>
                              
                           
                <Grid container spacing={2} pt={5} >
                   { content.map((card) => (  
                   <Grid item lg={3}  pr="10px" >
                       <AnimationOnScroll animateOnce="true" animateIn='animate__fadeInUp' duration={card.delay} >
                    <Card sx={{  boxShadow :"2px 2px 8px rgb(17, 192, 204)" ,  alignSelf:"stretch"}}>
                    
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
                            <Button variant="contained" fullWidth sx={{ bgcolor:"rgb(17, 142, 204)" }} >
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
                <br /> <br />
         <Footer />
            </Stack>
            {/* ------------------------for Mobile------------------------------ */}
            <Stack sx={{display:{xs:"flex" , md:"none"}, backgroundImage:"url('https://cdn.wallpapersafari.com/9/31/F0aPyg.jpg')" }}>
          
          <Container >
            <Grid container maxWidth="xs" spacing={0} sx={{ width:"100%" , height:"100vh", justifyContent:"center", alignItems:"center" }} >
                 <Grid item xs={6} >
                    <Box   >
                        {/* <img src={Cloud} alt='Project-box' style={{ width:"600px", height:"600px" , }} /> */}
                        <img src={MobileEditLogo} alt='Project-box' style={{ width:"100%" , }} />
                        </Box>
                    </Grid>
                 
                    <Grid item xs={12} mt={-25} >
                        <Box  >
                        <Typography variant='h4'  color="azure" fontFamily="Fantacy" textAlign="center" >
                        <span style={{ fontFamily:"sans-serif" , color:"azure" , textShadow:"2px 1px 2px grey" }} > UV </span> Visual Studio
                      </Typography>
                      <Typography variant='body1' gutterBottom color="grey.400" fontFamily="Rye" textAlign="center" >The Professional Photo & Video Editor.</Typography>
                      <Typography variant="subtitle2" color="grey.400"  gutterBottom textAlign="justify" fontFamily="sans-serif" > 
                      A good job description starts with an attention-grabbing summary of the position and its role within your company. Your summary should provide an overview of your company and expectations for the position. Outline the types of activities and responsibilities required for the job so job seekers can determine if they are qualified, or if the job is suitable for them.
                      </Typography>
                      <Button variant="outlined" sx={{ color:"azure", border:"2px solid skyblue" , justifyContent:"space-around", mt:1,mb:1 }} href="tel:+919444208901" >
                      <CallIcon style={{ paddingRight:"10px" }} /> <span  > Call Us  </span>  
                      </Button>
                        </Box>
                    </Grid>

                   

                </Grid>
          </Container>
                <br />
                
                <Container maxWidth="xs" >
                    <Box  padding="10px" sx={{ bgcolor:"transparent", borderRadius:"10px", border:"2px solid goldenrod", boxShadow:" 1px 1px 6px goldenrod", mb:2}}  >
                        <Grid container  >
                            <Grid item xs={12} >
                            <Typography variant='h6' color="warning.main" gutterBottom fontFamily="fantasy" textAlign="left" >
                            Why choose <span color='purple' > UV Visual Studio?  </span> 
                        </Typography> 
                        <Typography variant="subtitle2" color='azure' textAlign="justify" gutterBottom padding="10px"  >
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Typography>
                      
                            </Grid>

                            {/* <Grid item lg={6} >
                                <Box display="flex"  >
                                <img src={why} alt='why' width="100%"  />
                                </Box>
                              
                            </Grid> */}

                        </Grid>
                        
                       
                    </Box>
                </Container>

                <Container maxWidth="xs"  >
                    <Grid  container  mt={5} sx={{  justifyContent:"center" , pb:10}}>
                        <Grid item xs={8} >
                       
                              <Box display="flex"  >
                                <img src={Benefit} alt='Benefit' width="100%"   />
                                </Box>
                              
                        </Grid>
                        <Grid item xs={12}  >
                        <Typography variant='h6' color="warning.main" gutterBottom fontFamily="fantasy" >
                            Benefits Of <span >UV Visual Studio</span>
                        </Typography >
                        <Typography variant="subtitle2" color="azure" textAlign="left" sx={{ lineHeight:"30px" }}  >

                        
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
                
                <Container maxWidth="xs"   >
                    <Box  padding="10px" sx={{ bgcolor:"transparent", borderRadius:"10px", border:"2px solid goldenrod", boxShadow:" 1px 1px 6px goldenrod", mb:5}}  >
                        <Grid  >
                         
                            <Typography variant='h5' color="warning.main" gutterBottom fontFamily="fantasy" textAlign="center" justifyContent="center" >
                             Our<span  > Services  </span> 
                             </Typography>
                       <Typography variant="subtitle2" color="azure" textAlign="center" justifyContent="center" >
                           our services are highly reputable and budget friendly!
                       </Typography>
                              
                           
                <Grid container spacing={2} pt={5} sx={{ justifyContent:"center" }} >
                   { content.map((card) => (  
                   <Grid item xs={10}   >
                       <AnimationOnScroll animateOnce="true" animateIn='animate__fadeInUp' duration={card.delay} >
                    <Card sx={{  boxShadow :"2px 2px 8px rgb(17, 192, 204)" ,  alignSelf:"stretch"}}>
                    
                        <CardMedia
                            component="img"
                            height="150"
                            image= {card.image}
                            alt={card.id}
                          />
                         
                          <CardContent  >
                          
                            <Typography  variant="h6" component="div" fontFamily="fantasy" >
                              {card.title}
                            </Typography>
                            
                            <Typography gutterBottom  color="text.secondary">
                                {card.description}
                            </Typography>
                            <Box   >
                            <Button variant="contained" fullWidth sx={{ bgcolor:"rgb(17, 142, 204)" }} >
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
                <br /> <br />
         <Footer />
            </Stack>
        </div> 
    );
};

export default Editing;
import { Button, Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import "../Service.css";
import CallIcon from '@mui/icons-material/Call';
import DanceLogo from "./dancelogo.svg";
import MobileDanceLogo from "./mobileDance.svg";
import why from "./whydance.svg";
import Benefit from "./dancebenefit.svg";
import Helmet from 'react-helmet';
import Footer from '../../../Footer';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Dance = () => {

    const content = [
        {   
            
            title: "Adult Batch Regular Classes",
            description: "Both Online and Offline",
            image :"https://www.lavidastudio.com/wp-content/uploads/2018/09/hip-hop-dance-class.jpg",
            id : 0,
            delay : 0.4
            
            
        },
        {   
            
            title: "Kids Batch Regular Classes",
            description: "Both Online and Offline",
            image :"https://littlestepspt.com/wp-content/uploads/2019/06/dance-class.jpg",
            id : 0,
            delay : 0.6
            
            
        },
        {   
            
            title: "Private Dance Training",
            description: "Both Online and Offline",
            image :"https://twistnturns.in/images/Private_Class.jpg",
            id : 0,
            delay : 0.8
  
        },
        {   
            
            title: "Cinematic Choreography",
            description: "Both Online and Offline",
            image :"https://pbs.twimg.com/media/Drcc9i6U4AAYZ9y.jpg",
            id : 0,
            delay : 1
  
        },
       
        {   
            
            title: "Wedding Flashmob",
            description: "Make a memorable one ",
            image :"https://timelesslovenc.com/wp-content/uploads/sites/20831/2020/04/JVP1029_0274-Copy.jpg",
            id : 0,
            delay : 1.2
  
        },
        {   
            
            title: "Corporate Choreography",
            description: "Make your Feet on Fire",
            image :"https://i.ytimg.com/vi/fLW4BWp477I/maxresdefault.jpg",
            id : 0,
            delay : 1.4
  
        },
        {   
            
            title: "School Choreography",
            description: "Make your Feet on Fire",
            image :"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Dance_performance_by_children_of_Naval_Children_School_during_the_closing_ceremony_of_the_Eastern_Naval_Command_Olympiad_2015.JPG/640px-Dance_performance_by_children_of_Naval_Children_School_during_the_closing_ceremony_of_the_Eastern_Naval_Command_Olympiad_2015.JPG",
            id : 0,
            delay : 1.6
  
        },
        {   
            
            title: "College Choreography",
            description: "Make your Feet on Fire",
            image :"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/10/01/872243-unreal-crew.jpg",
            id : 0,
            delay : 1.8
  
        },
    ]

    return (
        <div>
            <Helmet>
                <title >LEOBOYS The Dance Entity | Dance Company </title>
                <meta name='description' content='Never miss a chance to Dance' />
                <meta name='keyword' content='western dance, Folk Dance, College Choreography, School Choreography, Hip-Hop Dance, Locking, Classical, Fitness, Occasional Dance, Flashmob, MArriage Dance And Personal Classes' />
            </Helmet>
            {/* --------------------------for Mobile----------------------------------------- */}
        <Stack sx={{ display:{xs:"flex", md:"none"}, backgroundImage:"url('https://cutewallpaper.org/21/red-wood-wallpaper/Best-52+-Ed-Wood-Wallpaper-on-HipWallpaper-Wood-Wallpaper-.jpg')" }} >
           
           <Container maxWidth="xs" >
            <Grid container maxWidth="xs"  sx={{ width:"100%", height:"100vh" , justifyContent:"center" , alignItems:"center" }} >
                  <Grid item xs={6} >
                    <Box   >
                      <AnimationOnScroll animateIn='animate__pulse'>
                        <img src={MobileDanceLogo} alt='Project-box' style={{ width:"100%"  }} />
                        </AnimationOnScroll>
                        </Box>
                    </Grid>
                    
                    <Grid item xs={12} mt={-15} >
                        <Box >                            <AnimationOnScroll animateIn='animate__flipInX' >
                        <Typography variant='h3' color="azure"  fontFamily="Josefin Sans" textAlign="Center"  >
                        LEO BOYS
                      </Typography>
                      </AnimationOnScroll>
                      <AnimationOnScroll animateIn='animate__fadeIn' >
                      <Typography variant='h5' color="grey.400" gutterBottom fontFamily="Rye" textAlign="Center" >The Dance Entity</Typography>
                      <Typography variant="subtitle2" color="grey.300"   gutterBottom textAlign="justify" fontFamily="sans-serif" pb={5} > 
                      A good job description starts with an attention-grabbing summary of the position and its role within your company. Your summary should provide an overview of your company and expectations for the position. Outline the types of activities and responsibilities required for the job so job seekers can determine if they are qualified, or if the job is suitable for them.
                      </Typography>
                      </AnimationOnScroll>
                      <Button variant="outlined" sx={{ color:"azure", border:"2px solid goldenrod" , justifyContent:"space-around" }} href="tel:+919444208901" >
                      <CallIcon style={{ paddingRight:"10px" }} /> <span  > Call Us  </span>  
                      </Button>

                        </Box>
                    </Grid>
{/*  
                    <Grid item lg={5} >
                    <Box   >
                      <AnimationOnScroll animateIn='animate__pulse'>
                        <img src={DanceLogo} alt='Project-box' style={{ width:"100%"  }} />
                        </AnimationOnScroll>
                        </Box>
                    </Grid> */}

                </Grid>
           </Container>
           <br />
                
                <Container maxWidth="xs"   >
                    <Box  padding="10px"  sx={{ bgcolor:"transparent", borderRadius:"10px", border:"3px solid goldenrod", boxShadow:" 1px 1px 6px goldenrod" }} >
                        <Grid container spacing={2} >
                            <Grid item xs={12} >
                            <AnimationOnScroll animateIn='animate__flipInX' >
                            <Typography variant='h6' color="warning.main" gutterBottom fontFamily="fantasy" textAlign="left" >
                            Why choose <span> Leo Boys?  </span> 
                        </Typography> 
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn='animate__fadeIn' >
                        <Typography variant="subtitle2" color='grey.200' textAlign="justify" gutterBottom padding="10px"  >
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Typography>
                        </AnimationOnScroll>
                            </Grid>

                            {/* <Grid item xs={6} >
                                <Box display="flex" justifyContent="center" >
                                <img src={why} alt='why' width="80%"  />
                                </Box>
                              
                            </Grid> */}

                        </Grid>
                        
                       
                    </Box>
                </Container>

                <Container maxWidth="xs"  >
                    <Grid  container spacing={2} pt={10} >
                        <Grid item xs={12} >
                       <AnimationOnScroll animateIn='animate__fadeIn' >
                              <Box display="flex" justifyContent="center" >
                                <img src={Benefit} alt='why' width="80%"  />
                                </Box>
                                </AnimationOnScroll> 
                        </Grid>
                        <Grid item xs={12} pb={10}>
                            <AnimationOnScroll animateIn='animate__flash'>
                        <Typography variant='h6' color="warning.main" gutterBottom fontFamily="fantasy" >
                            Benefits Of <span >Leo Boys</span>
                        </Typography >
                        
                        <Typography variant="subtitle2" color="azure" textAlign="justify" sx={{ lineHeight:"30px" }}  >

                        
                        <li>Civil engineers are the people in charge of managing the construction projects.  </li>
                              
                        <li>Civil engineers can choose from many areas of specialization. </li>
                              
                        <li>Tendering the contracts and hire contractors</li>
                              
                        <li>Adhering to the guidelines created by the government, local bodies and clients when planning, creating and maintaining infrastructure</li>
                              
                        <li>Civil engineers are the people in charge of managing the construction projects.  </li>
                              
                        </Typography>
                        </AnimationOnScroll>
                        </Grid>
                    </Grid>
                </Container>
                <br />
               
                <Container maxWidth="xs"   >
                    <Box  padding="10px" sx={{ bgcolor:"transparent", borderRadius:"10px", border:"4px solid goldenrod", boxShadow:" 1px 1px 6px goldenrod", mb:5}}  >
                        <Grid  >
                         <AnimationOnScroll animateIn='animate__flipInX'>
                            <Typography variant='h4' color="warning.main" gutterBottom fontFamily="fantasy" textAlign="center" justifyContent="center" >
                             Our<span  > Services  </span> 
                             </Typography>
                             </AnimationOnScroll>
                       <Typography variant="subtitle2" color="azure" textAlign="center" justifyContent="center" >
                           our services are highly reputable and budget friendly!
                       </Typography>
                              
                           
                <Grid container spacing={2} pt={5} pb={2} sx={{ justifyContent:"center" }} >
                   { content.map((card) => (  
                   <Grid item xs={10}   >
                       <AnimationOnScroll animateOnce="true" animateIn='animate__fadeInUp' duration={card.delay} >
                    <Card sx={{  boxShadow :"5px 5px 8px goldenrod" , alignSelf:"stretch"}}>
                    
                        <CardMedia
                            component="img"
                            height="150"
                            image= {card.image}
                            alt={card.id}
                          />
                         
                          <CardContent  >
                          
                            <Typography  variant="h6" component="div" fontFamily="fantasy" fontWeight="900" >
                              {card.title}
                            </Typography>
                            
                            <Typography gutterBottom  color="text.secondary">
                                {card.description}
                            </Typography>
                            <Box   >
                            <Button variant="contained" fullWidth color='warning'  >
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
                <br /> 
               
               <Footer />

            </Stack>
            {/* --------------------------for Desktop-------------------------------------------- */}
            <Stack sx={{ display:{xs:"none", md:"flex"}, backgroundImage:"url('https://cutewallpaper.org/21/red-wood-wallpaper/Best-52+-Ed-Wood-Wallpaper-on-HipWallpaper-Wood-Wallpaper-.jpg')" }} >
           
           <Container maxWidth="lg" >
            <Grid container maxWidth="lg" spacing={4} sx={{ width:"100%", height:"100vh" , justifyContent:"center" , alignItems:"center" }} >
                    <Grid item lg={7} >
                        <Box  >
                            <AnimationOnScroll animateIn='animate__flipInX' >
                        <Typography variant='h2' color="azure"  fontFamily="Rye" textAlign="left" >
                        LEO BOYS
                      </Typography>
                      </AnimationOnScroll>
                      <AnimationOnScroll animateIn='animate__fadeIn' >
                      <Typography variant='h5' color="grey.300" gutterBottom fontFamily="Rye" textAlign="left" >The Dance Entity</Typography>
                      <Typography variant="subtitle1" color="grey.300"   gutterBottom textAlign="left" fontFamily="sans-serif" pb={5} > 
                      A good job description starts with an attention-grabbing summary of the position and its role within your company. Your summary should provide an overview of your company and expectations for the position. Outline the types of activities and responsibilities required for the job so job seekers can determine if they are qualified, or if the job is suitable for them.
                      </Typography>
                      </AnimationOnScroll>
                      <Button variant="outlined" sx={{ color:"azure", border:"2px solid goldenrod" , justifyContent:"space-around" }} href="tel:+919444208901" >
                      <CallIcon style={{ paddingRight:"10px" }} /> <span  > Call Us  </span>  
                      </Button>

                        </Box>
                    </Grid>
 
                    <Grid item lg={5} >
                    <Box   >
                      <AnimationOnScroll animateIn='animate__pulse'>
                        <img src={DanceLogo} alt='Project-box' style={{ width:"100%"  }} />
                        </AnimationOnScroll>
                        </Box>
                    </Grid>

                </Grid>
           </Container>
                <br />
                
                <Container maxWidth="lg"   >
                    <Box  padding="50px"  sx={{ bgcolor:"transparent", borderRadius:"10px", border:"3px solid goldenrod", boxShadow:" 1px 1px 6px goldenrod" }} >
                        <Grid container spacing={2} >
                            <Grid item lg={6} >
                            <AnimationOnScroll animateIn='animate__flipInX' >
                            <Typography variant='h4' color="warning.main" gutterBottom fontFamily="fantasy" textAlign="left" >
                            Why choose <span> Leo Boys?  </span> 
                        </Typography> 
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn='animate__fadeIn' >
                        <Typography variant="body1" color='grey.200' textAlign="justify" gutterBottom padding="20px"  >
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Typography>
                        </AnimationOnScroll>
                            </Grid>

                            <Grid item md={6} >
                                <Box display="flex" justifyContent="center" >
                                <img src={why} alt='why' width="80%"  />
                                </Box>
                              
                            </Grid>

                        </Grid>
                        
                       
                    </Box>
                </Container>

                <Container maxWidth="lg"  >
                    <Grid  container spacing={2} pt={10} >
                        <Grid item lg={6} >
                       <AnimationOnScroll animateIn='animate__fadeIn' >
                              <Box display="flex" justifyContent="center" >
                                <img src={Benefit} alt='why' width="100%"  />
                                </Box>
                                </AnimationOnScroll> 
                        </Grid>
                        <Grid item lg={6} >
                            <AnimationOnScroll animateIn='animate__flash'>
                        <Typography variant='h4' color="warning.main" gutterBottom fontFamily="fantasy" >
                            Benefits Of <span >Leo Boys</span>
                        </Typography >
                        
                        <Typography variant="body1" color="azure" textAlign="left" sx={{ lineHeight:"40px" }}  >

                        
                        <li>Civil engineers are the people in charge of managing the construction projects.  </li>
                              
                        <li>Civil engineers can choose from many areas of specialization. </li>
                              
                        <li>Tendering the contracts and hire contractors</li>
                              
                        <li>Adhering to the guidelines created by the government, local bodies and clients when planning, creating and maintaining infrastructure</li>
                              
                        <li>Civil engineers are the people in charge of managing the construction projects.  </li>
                              
                        </Typography>
                        </AnimationOnScroll>
                        </Grid>
                    </Grid>
                </Container>
                <br />
               
                <Container maxWidth="lg"   >
                    <Box  padding="50px" sx={{ bgcolor:"transparent", borderRadius:"10px", border:"4px solid goldenrod", boxShadow:" 1px 1px 6px goldenrod", mb:5}}  >
                        <Grid  >
                         <AnimationOnScroll animateIn='animate__flipInX'>
                            <Typography variant='h3' color="warning.main" gutterBottom fontFamily="fantasy" textAlign="center" justifyContent="center" >
                             Our<span  > Services  </span> 
                             </Typography>
                             </AnimationOnScroll>
                       <Typography variant="subtitle1" color="azure" textAlign="center" justifyContent="center" >
                           our services are highly reputable and budget friendly!
                       </Typography>
                              
                           
                <Grid container spacing={2} pt={5} >
                   { content.map((card) => (  
                   <Grid item lg={3}  pr="10px" >
                       <AnimationOnScroll animateIn='animate__fadeInUp' duration={card.delay} >
                    <Card sx={{  boxShadow :"4px 2px 8px goldenrod" , alignSelf:"stretch"}}>
                    
                        <CardMedia
                            component="img"
                            height="150"
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
                            <Button variant="contained" fullWidth color='warning'  >
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
                <br /> 
               
               <Footer />

            </Stack>

        </div>
    );
};

export default Dance;
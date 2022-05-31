import { Button, Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import "../Service.css";
import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import ProjectLogo from './projectlogo.svg';
// import Cloud from './cloud.svg';
import why from './whyproject.svg';
import Benefit from './projectbenefit.svg';
import Helmet from 'react-helmet';
import Footer from '../../../Footer';
import { Link } from 'react-router-dom';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';




const ProjectService = () => {

    const content = [
        {   
            
            title: "Web Application",
            description: "Using HTML5 , CSS, React , Sql and Nodejs",
            image :"https://www.vcanaglobal.com/wp-content/uploads/2020/03/1_pE2fOVDikEUwiQJlh4ggzg.jpeg",
            id : 0
            
            
        },
        {   
            
            title: "IOT Project",
            description: "Using HTML5 , CSS, React , Sql and Nodejs",
            image :"https://i.ytimg.com/vi/QL-6PdiDTeo/maxresdefault.jpg",
            id : 0
            
            
        },
        {   
            
            title: "Android Project",
            description: "Using HTML5 , CSS, React , Sql and Nodejs",
            image :"https://9to5google.com/wp-content/uploads/sites/4/2022/02/android_13_pixel_launcher_foldable_1.jpg?quality=82&strip=all&w=1600",
            id : 0
  
        },
        {   
            
            title: "Mechanical Project",
            description: "Using HTML5 , CSS, React , Sql and Nodejs",
            image :"https://www.hollandisc.com/-/media/ISC/HollandV2/Blog/Holland_Blog_engineering_700.jpg?h=450&la=en&mh=450&mw=700&w=700&hash=02383BA2613935D4F5E0617117831BBF7EED96C7",
            id : 0
  
        },
        {   
            
            title: "Embedded Project",
            description: "Using HTML5 , CSS, React , Sql and Nodejs",
            image :"https://www.einfochips.com/blog/wp-content/uploads/2018/12/how-rtos-for-embedded-systems-powers-the-internet-of-things-featured01.jpg",
            id : 0
  
        },
        {   
            
            title: "Networking Project",
            description: "Using HTML5 , CSS, React , Sql and Nodejs",
            image :"https://irisns.com/wp-content/uploads/2016/02/Network-management-system-4.0.jpg",
            id : 0
  
        },
    ]

    return (
        <div>
            <Helmet>
                <title> Project Box | Final year Projects </title>
            </ Helmet>
            
            <div  >
      
 <Stack component="div" sx={{ width:"100%",display:{xs:"none", md:"flex"}, background: "linear-gradient(180deg, rgb(17, 192, 204) 6.77%,rgb(10, 230, 145) 80%,rgb(5, 143, 113) 100%)" }} >
      
        <Container >
            
        <Box  sx={{ display:"flex",justifyContent:"flex-end" , pt:10,pr:10 , mb:-15}}>
                <Link to="/" style={{ position:"relative",textDecoration:"none",}} >
                <LogoutOutlinedIcon  fontSize='large' color='warning' />
                </Link >
            
             </Box>
        <Grid container maxWidth="lg" spacing={1} sx={{ width:"100%", height:"100vh", justifyContent:"center", alignItems:"center" }} >
                    <Grid item lg={7}  >
                        <Box   >
                        <Typography variant='h1' gutterBottom fontFamily="Rye" textAlign="left" >
                        Project Box
                      </Typography>
                      <Typography variant="subtitle1"   gutterBottom textAlign="left" fontFamily="sans-serif" > 
                      A good job description starts with an attention-grabbing summary of the position and its role within your company. Your summary should provide an overview of your company and expectations for the position. Outline the types of activities and responsibilities required for the job so job seekers can determine if they are qualified, or if the job is suitable for them.
                      </Typography>

                      <Button variant="outlined" sx={{ color:"azure", border:"2px solid white" , justifyContent:"space-around" }} href="tel:+919444208901" >
                      <CallIcon style={{ paddingRight:"10px" }} /> <span  > Call Us  </span>  
                      </Button>
                        </Box>
                    </Grid>

                    <Grid item lg={5}  >
                        <Box  sx={{ justifyContent:"center" }} >
                        <img src={ProjectLogo} alt='Project-box' style={{ width:"80%", height:"80%" }} />
                        </Box>
                    </Grid>

            </Grid>
        </Container>
        
                
                <Container maxWidth="lg" className="container"  >
                    <Box  padding="50px" >
                        <Grid container spacing={2} >
                            <Grid item md={6} >
                            <Typography variant='h5' color="black" gutterBottom fontFamily="fantasy" textAlign="left" >
                            Why choose <span color='purple' >Project Box?  </span> 
                        </Typography> 
                        <Typography variant="inherit" color='gray' textAlign="justify" gutterBottom padding="20px"  >
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Typography>
                        {/* <Typography variant="inherit" color='gray' textAlign="justify" gutterBottom padding="20px"  >
                        A good job description starts with an attention-grabbing summary of the position and its role within your company. Your summary should provide an overview of your company and expectations for the position. Outline the types of activities and responsibilities required for the job so job seekers can determine if they are qualified, or if the job is suitable for them.
                        </Typography> */}
                            </Grid>

                            <Grid item md={6} >
                                <Box display="flex" justifyContent="center" >
                                <img src={why} alt='why' width="350px"  />
                                </Box>
                              
                            </Grid>

                        </Grid>
                        
                       
                    </Box>
                </Container>

                <Container maxWidth="lg" className='container2' >
                    <Grid  container spacing={2} >
                        <Grid item lg={6} >
                       
                              <Box display="flex" justifyContent="center" >
                                <img src={Benefit} alt='why' width="350px"  />
                                </Box>
                              
                        </Grid>
                        <Grid item lg={6} >
                        <Typography variant='h4' gutterBottom fontFamily="fantasy" >
                            Benefits Of <span >Project Box</span>
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
                    <Card sx={{  boxShadow :"4px 2px 8px #ccc" , border:"3px solid  rgb(17, 192, 204)", alignSelf:"stretch"}}>
                    
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
                            
                            <Typography gutterBottom variant="caption" color="text.secondary">
                                {card.description}
                            </Typography>
                            <Box className='order-btn'  >
                            <Button variant="contained"  >
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
             <Footer />
                </Stack>
            </div>
        </div>
    );
};

export default ProjectService;
import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import "../Service.css";
import CallIcon from '@mui/icons-material/Call';
import EditLogo from "./editlogo.svg";
import why from "./whyedit.svg";
import Benefit from "./editbenefit.svg";
import Helmet from 'react-helmet';


const Editing = () => {
    const content = [
        {   
            
            title: "Adult Batch Regular Classes",
            description: "Both Online and Offline",
            image :"https://www.lavidastudio.com/wp-content/uploads/2018/09/hip-hop-dance-class.jpg",
            id : 0
            
            
        },
        {   
            
            title: "Kids Batch Regular Classes",
            description: "Both Online and Offline",
            image :"https://littlestepspt.com/wp-content/uploads/2019/06/dance-class.jpg",
            id : 0
            
            
        },
        {   
            
            title: "Private Dance Training",
            description: "Both Online and Offline",
            image :"https://twistnturns.in/images/Private_Class.jpg",
            id : 0
  
        },
        {   
            
            title: "Cinematic Choreography",
            description: "Both Online and Offline",
            image :"https://pbs.twimg.com/media/Drcc9i6U4AAYZ9y.jpg",
            id : 0
  
        },
       
        {   
            
            title: "Wedding Flashmob",
            description: "Make your Big day, a memorable one ",
            image :"https://timelesslovenc.com/wp-content/uploads/sites/20831/2020/04/JVP1029_0274-Copy.jpg",
            id : 0
  
        },
        {   
            
            title: "Corporate Choreography",
            description: "Make your Big day, a memorable one",
            image :"https://i.ytimg.com/vi/fLW4BWp477I/maxresdefault.jpg",
            id : 0
  
        },
        {   
            
            title: "School Choreography",
            description: "Make your Big day, a memorable one",
            image :"https://irisns.com/wp-content/uploads/2016/02/Network-management-system-4.0.jpg",
            id : 0
  
        },
        {   
            
            title: "College Choreography",
            description: "Make your Big day, a memorable one",
            image :"https://www.instagram.com/p/B1dv6XXDc8T/",
            id : 0
  
        },
    ]

    return (
        <div>
            <Helmet>
                <title>UV Visual Studio | Professional Photo & Video Editing</title>
                <meta name='description' content='We make your ideas awesome with our professional work' />
            </Helmet>
              <div className='editing-head'>
            <Grid container maxWidth="lg" spacing={4} >
                    <Grid item lg={7} >
                        <Box className="left-head"  >
                        <Typography variant='h2'  fontFamily="Fantacy" textAlign="left" >
                        <span style={{ fontFamily:"sans-serif" , color:"black" , textShadow:"2px 1px 2px grey" }} > UV </span> Visual Studio
                      </Typography>
                      <Typography variant='h5' gutterBottom fontFamily="Rye" textAlign="left" >The Professional Photo & Video Editor.</Typography>
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
                        <img src={EditLogo} alt='Project-box' style={{ width:"600px", height:"600px" , }} />
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
                            Why choose <span color='purple' > UV Visual Studio?  </span> 
                        </Typography> 
                        <Typography variant="inherit" color='gray' textAlign="justify" gutterBottom padding="20px"  >
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Typography>
                      
                            </Grid>

                            <Grid item md={6} >
                                <Box display="flex" justifyContent="center" >
                                <img src={why} alt='why' width="450px"  />
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
                            Benefits Of <span >UV Visual Studio</span>
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
                     Mail to : projectbox2k22@gmail.com
                 </Typography>
                </Box>
            </div>
        </div> 
    );
};

export default Editing;
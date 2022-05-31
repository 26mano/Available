import { Button, Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import "../Service.css";
import CallIcon from '@mui/icons-material/Call';
import HDLogo from "./HDlogo.svg";
import Benefit from "./hdbenefit.svg";
import why from "./whyHD.svg";
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Footer from '../../../Footer';


const HDService = () => {

    const content = [
        {   
            
            title: "Sheet metal Forming",
            description: "Using HTML5 , CSS, React , Sql and Nodejs",
            image :"https://4.imimg.com/data4/JX/YY/MY-3576645/sheet-metal-forming-tool-500x500.jpg",
            id : 0
            
            
        },
        {   
            
            title: "Lasor Cutting and Engraving",
            description: "Using HTML5 , CSS, React , Sql and Nodejs",
            image :"https://www.crownkyn.com/wp-content/uploads/2020/11/Laser-Cutting-Engraving.jpg",
            id : 0
            
            
        },
        {   
            
            title: "Mold and Tool Design",
            description: "Using HTML5 , CSS, React , Sql and Nodejs",
            image :"https://www.porterie.com/wp-content/uploads/Mold-fabrication-page-500x333.jpg",
            id : 0
  
        },
        {   
            
            title: "MSME Design Solution",
            description: "Using HTML5 , CSS, React , Sql and Nodejs",
            image :"https://5.imimg.com/data5/MP/AL/MY-806340/mechanical-design-services-500x500.jpg",
            id : 0
  
        },
        {   
            
            title: "3D Printing",
            description: "Using HTML5 , CSS, React , Sql and Nodejs",
            image :"https://blog.ipleaders.in/wp-content/uploads/2018/04/BV-Acharya-9.jpg",
            id : 0
  
        },
        {   
            
            title: "Plant / Office Building Layout Design",
            description: "Using HTML5 , CSS, React , Sql and Nodejs",
            image :"https://www.lawlorofficefurniture.ie/wp-content/uploads/2014/12/CAD1-736x490.jpg",
            id : 0
  
        },
        {   
            
            title: "Analyze Structural Integrity of Products",
            description: "Using HTML5 , CSS, React , Sql and Nodejs",
            image :"https://srs-infosystems.com/img/services/product-analysis.png",
            id : 0
  
        },
    ]

    return (
        <div>
            <Helmet>
                    <title> D&D Horixons | Printing and Designs </title>
                     <meta name='description' content='Civil construction is the art of building bridges, dams, roads, airports, canals, and buildings. Civil engineering is the oldest disciplines of engineering.' />
                     {/* <meta name='keywords' content='Interior Work , Exterior work , Civil Work, Renovation work, False ceiling work  and all type of civil service we do' /> */}
            </Helmet>
              <Stack component="div" sx={{ width:"100%",display:{xs:"none", md:"flex"}, background: "linear-gradient(180deg,   rgb(128, 95, 7)6.77%,rgb(102, 95, 5) 80%,rgb(92, 44, 5) 100%)" }} >
            < Container >
                  <Box  sx={{ display:"flex", justifyContent:"flex-end" , pt:10,pr:10 , mb:-15}}>
                <Link to="/" style={{ position:"relative",textDecoration:"none",}} >
                <LogoutOutlinedIcon  fontSize='large' color='warning' />
                </Link >
            
             </Box>
                  
            <Grid container maxWidth="lg" spacing={4}  sx={{ width:"100%", height:"100vh", justifyContent:"center", alignItems:"center" }}  >
                    <Grid item lg={7} >
                        <Box   >
                        <Typography variant='h2' color="grey.300" gutterBottom fontFamily="Rye" textAlign="left" >
                        D<span style={{color:"Black", fontFamily:"Rye"}} >&</span>D Horizons
                      </Typography>
                      <Typography variant="subtitle2" color="grey.400"  gutterBottom textAlign="left" fontFamily="sans-serif" > 
                      A good job description starts with an attention-grabbing summary of the position and its role within your company. Your summary should provide an overview of your company and expectations for the position. Outline the types of activities and responsibilities required for the job so job seekers can determine if they are qualified, or if the job is suitable for them.
                      </Typography>
                      <Button variant="outlined" sx={{ color:"azure", border:"2px solid white"  }} href="tel:+919444208901" >
                      <CallIcon style={{ paddingRight:"10px" }} /> <span  > Call Us  </span>  
                      </Button>
                        </Box>
                    </Grid>

                    <Grid item lg={5} >
                    <Box   >
                        {/* <img src={Cloud} alt='Project-box' style={{ width:"600px", height:"600px" , }} /> */}
                        <img src={HDLogo} alt='HD-Logo' style={{ width:"100%" }} />
                        </Box>
                    </Grid>

                </Grid>
                </Container>
                <br />
                <br /> <br /> <br /> <br />
                <Container maxWidth="lg" className="container"  >
                    <Box  padding="50px" >
                        <Grid container spacing={2} >
                            <Grid item md={6} >
                            <Typography variant='h5' color="black" gutterBottom fontFamily="fantasy" textAlign="left" >
                            Why choose <span color='purple' >D&D Horizons?  </span> 
                        </Typography> 
                        <Typography variant="inherit" color='gray' textAlign="justify" gutterBottom padding="20px"  >
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Typography>
                        {/* <Typography variant="inherit" color='gray' textAlign="justify" gutterBottom padding="20px"  >
                        A good job description starts with an attention-grabbing summary of the position and its role within your company. Your summary should provide an overview of your company and expectations for the position. Outline the types of activities and responsibilities required for the job so job seekers can determine if they are qualified, or if the job is suitable for them.
                        </Typography> */}
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
                                <img src={Benefit} alt='why' width="450px"  />
                                </Box>
                              
                        </Grid>
                        <Grid item lg={6} >
                        <Typography variant='h4' gutterBottom fontFamily="fantasy" >
                            Benefits Of <span >D&D Horizons</span>
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
                <Footer />
                
            </Stack>
        </div>
    );
};

export default HDService;
import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import "../Service.css";
import Civil from "./civil.svg";
import Why from "./why.svg";
import Arrow from "./arrow.svg";
import Helmet from 'react-helmet';
import CallIcon from '@mui/icons-material/Call';

const ServiceIndividual = () => {

    const content = [
        {   
            
            title: "Civil Work",
            description: "All types of civil works we can!",
            image :"https://www.nationaltenders.com/upload/events/1476279071_promotionalImage.rpath.1200.0.medium.1464279918224.jpg",
            id : 0
            
            
        },
        {   
            
            title: "Interior Works",
            description: "All types of Interiors we can!",
            image :"https://www.woodworksclub.in/wp-content/uploads/2019/12/Banner1.jpg",
            id : 1
            
            
        },
        {   
            
            title: "Exterior Works",
            description: "All types of Interiors we can!",
            image :"https://www.homenish.com/wp-content/uploads/2020/08/Stone-Siding-for-Home-Exteriors-1200x900.jpg",
            id : 2
        },
        {   
            
            title: "Carpentry Works",
            description: "All types of Furnitures , morden Kitchen , pooja unit, wardrob , loft doors, main door and cuboard works we can!",
            image :"http://www.brijeshvijayan.com/images/carpenter_2.jpg",
            id : 3
        },
        {   
            
            title: "Renovation Works",
            description: "All types of Renovation works we can! " ,
            image :"https://5.imimg.com/data5/SELLER/Default/2020/11/TF/XB/UV/2826244/remodeling-app-500x500.png",
            id : 3
        },
        {   
            
            title: "Plumbing Works",
            description: "All types of Furnitures , morden Kitchen , pooja unit, wardrob , loft doors, main door and cuboard works we can!",
            image :"https://trusteyman.com/wp-content/uploads/2018/04/How-does-plumbing-work-1024x682.jpeg",
            id : 3
        },
        {   
            
            title: "Electric Works",
            description: "All types of Electic and electronic repairs we can!",
            image :"https://images.jdmagicbox.com/comp/service_catalogue/electrical-contractors-for-office-022pxx22.xx22.110412184556.m9y6-m7r0p2d.jpg",
            id : 1
            
            
        },
        {   
            
            title: "Painting Works",
            description: "All types of Electic and electronic repairs we can!",
            image :"https://4.imimg.com/data4/OS/EA/MY-2627823/house-painting-work-500x500.jpg",
            id : 1
            
            
        },
    ]

    return (
        <div>
            <Helmet>
                    <title> Classy Construction | Civil</title>
                     <meta name='description' content='Civil construction is the art of building bridges, dams, roads, airports, canals, and buildings. Civil engineering is the oldest disciplines of engineering.' />
                     <meta name='keywords' content='Interior Work , Exterior work , Civil Work, Renovation work, False ceiling work  and all type of civil service we do' />
            </Helmet>
            <div className='head'>
                <Grid container maxWidth="lg" spacing={4} >
                    <Grid item lg={7} >
                        <Box className="left-head"  >
                        <Typography variant='h2' gutterBottom fontFamily="serif" textAlign="left">
                          Classy Construction
                      </Typography>
                      <Typography variant="subtitle2" paddingLeft="20px"  gutterBottom textAlign="left" fontFamily="sans-serif" > 
                      A good job description starts with an attention-grabbing summary of the position and its role within your company. Your summary should provide an overview of your company and expectations for the position. Outline the types of activities and responsibilities required for the job so job seekers can determine if they are qualified, or if the job is suitable for them.
                      </Typography>
                      <Button variant="outlined" sx={{ alignItems:"flex-start" , color:"azure", marginLeft:"-60%",marginTop:"40px" , width:"150px", padding:"10px", border:"2px solid white" , justifyContent:"space-arround" }} href="tel:+919444208901" >
                      <CallIcon /> <span  > Call Us  </span>  
                      </Button>
                        </Box>
                    </Grid>

                    <Grid item lg={5} >
                    <Box className="right-head"  >
                        <img src={Civil} alt='civil' style={{minWidth:"300px", maxWidth:"600px",minHeight:"300px", maxHeight:"600px" }} />
                        </Box>
                    </Grid>

                </Grid>
                <br /> <br /> <br />

{/* -------------Why choose ---------------------- */}

                <Container maxWidth="lg" className="container"  >
                    <Box  padding="50px" >
                        <Grid container spacing={2} >
                            <Grid item md={6} >
                            <Typography variant='h5' color="black" gutterBottom fontFamily="fantasy" >
                            Why choose <span color='purple' >Classy Construction!  </span> 
                        </Typography> 
                        <Typography variant="inherit" color='gray' textAlign="justify" gutterBottom padding="20px"  >
                        A good job description starts with an attention-grabbing summary of the position and its role within your company. Your summary should provide an overview of your company and expectations for the position. Outline the types of activities and responsibilities required for the job so job seekers can determine if they are qualified, or if the job is suitable for them.
                        </Typography>
                        <Typography variant="inherit" color='gray' textAlign="justify" gutterBottom padding="20px"  >
                        A good job description starts with an attention-grabbing summary of the position and its role within your company. Your summary should provide an overview of your company and expectations for the position. Outline the types of activities and responsibilities required for the job so job seekers can determine if they are qualified, or if the job is suitable for them.
                        </Typography>
                            </Grid>

                            <Grid item md={6} >
                                <Box display="flex" justifyContent="center" >
                                <img src={Why} alt='why' style={{maxWidth:"350px"}} />
                                </Box>
                              
                            </Grid>

                        </Grid>
                        
                       
                    </Box>
                </Container>
                <br /> <br />
{/* -=--------------------Benefits container -----------------             */}

                <Container maxWidth="lg" className='container2' >
                    <Grid  container spacing={2} >
                        <Grid item lg={6} >
                       
                              <Box display="flex" justifyContent="center" >
                                <img src={Arrow} alt='why' style={{maxWidth:"350px"}} />
                                </Box>
                              
                        </Grid>
                        <Grid item lg={6} >
                        <Typography variant='h4' gutterBottom fontFamily="fantasy" >
                            Benefits Of Service
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
                <br /> <br /><br /> <br /> <br /><br /> <br /> 

{/* ---------Service Container ------------- */}

                <Container maxWidth="lg" className="container"  >
                    <Box  padding="50px" >
                        <Grid  >
                         
                            <Typography variant='h3' color="black" gutterBottom fontFamily="fantasy" textAlign="center" justifyContent="center" >
                             Our<span  > Services  </span> 
                             </Typography>
                       <Typography variant="subtitle1" color="black" textAlign="center" justifyContent="center" >
                           our services are highly reputable and budget friendly!
                       </Typography>
                              
                           
                <Grid container spacing={6} pt={5} >
                   { content.map((card) => (  
                   <Grid item lg={3}  pr="10px" >
                    <Card sx={{ maxHeight:"380px", maxWidth:"250px", boxShadow :"4px 2px 8px #ccc" , border:"3px solid  rgb(114, 17, 204)", alignSelf:"stretch"}}>
                    
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
                
 {/*-----------Footer ----------------  */}
                <Box display="block" textAlign="center" sx={{ bgcolor:"dimgray" , width:"100vw" , height:"89px" }} >
                 <Typography variant='h5' fontFamily="serif" >
                     For More Information
                 </Typography>
                 <Typography variant="subtitle1" >
                     Call Us : +91 94442 08901 & +91 75502 71520
                 </Typography>
                 <Typography variant="subtitle1" >
                     Mail to : classyconstructions2k22@gmail.com
                 </Typography>
                </Box>
            </div>

        
        </div>
    );
};

export default ServiceIndividual;
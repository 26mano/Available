import { Card, CardMedia, Container, Divider, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import 'animate.css';
// import { useTheme } from '@mui/material/styles';
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const index = () => {

    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
    const content = [
        {   
            
            title: "Project Box",
            description: "hgjhgkjgk;gh;igjhgvs",
            image :"https://it.sheridancollege.ca/images/project-puzzle-pieces.jpg",
            id : 0,
            link : "/project_box",
            animateIn : "animate__fadeInUp",
            delay : "500ms"
        },
        {
            title: "Classy Construction",
            description: "hgjhgkjgk;gh;igjhgvs",
            image :"https://thumbs.dreamstime.com/b/innovative-architecture-civil-engineering-plan-building-construction-project-creative-graphic-design-showing-concept-174256642.jpg",
            id : 1,
            link : "/classyconstruction",
            animateIn : "animate__fadeInUp",
            delay : "800ms"
        },
        {
            title: "H&D Horizon",
            description: "hgjhgkjgk;gh;igjhgvs",
            image:"https://www.galaxyeduworld.com/storage/blogs/1602683459_5f870243cc6a9_750_351.jpg",
            id : 2,
            link : "/D&D_Horizons",
            animateIn : "animate__fadeInUp",
            delay : "1s"
        },
        
      
      ] ;
   
    return (
        
        <div>
            {/* ------------------For Desktop--------------------------------- */}
        <div>
         
        
       <Box sx={{width:"100%",height:"100vh",backgroundColor:"grey.900", clipPath: "ellipse(82% 100% at 55.9% 100%)", display:{ xs:"none", md:"grid"}}}>
       <AnimationOnScroll animateOnce={true} animateIn="animate__flipInX">
       <Container sx={{ width:"100%",justifyContent:"center" }} >
       <Typography variant='h4' color="grey.400" mt="10%" ml="10%"  >
              Top Services
        </Typography>
       </Container>
       </AnimationOnScroll>
  <Container maxWidth="md" >
  <div>
        

            <Grid container spacing={4}  pb={10}  >

                 { content.map((card) => (  
                     
                 <Grid item xs={4}  pr="10px" mt="20px" >
                     <Link display="grid" to={card.link} >
                     <Typography gutterBottom color="warning.light" alignItems="center" justifyContent="center" >
               {card.title}
             </Typography>
             <AnimationOnScroll animateIn={card.animateIn} style={{animationDelay:{"500ms" : "0ms" } }} >
                       <Box sx={{ border:"2px solid goldenrod", padding:"5px",  boxShadow :"2px 2px 10px rgba(241, 241, 155, 0.705)" , borderRadius:"10px"  }} >
                       
                  <Card   sx={{  height:"50%"}}>
             
                      <CardMedia 
                          component="img"
                          height="200"
                          width="200"
                          image= {card.image}
                          alt={card.id}
                        />
                      
                    </Card>
                  
                
                    </Box>
                    </AnimationOnScroll>
                    </Link>
                  </Grid>
                  ) ) } 
                   
          
              </Grid>
       
              </div>
  </Container>
       
  
        </Box>
          </div>

          {/* -----------------------For Mobile------------------------------ */}
          <div>
         
         <Box sx={{ width:"100%",height:"100%",marginTop:"0%",backgroundColor:"grey.900", justifyContent:"center", display:{xs:"-ms-grid", md:"none"}}} >
       <Container sx={{ justifyContent:"center", textAlign:"center",pt:"100px" }} >
       <Typography variant='h5' color="grey.500"  >
              Top Services
            </Typography>
            <Divider sx={{ width:"9rem" ,ml:11.5, border:"1px solid goldenrod"}} />
       </Container>
      
<Container maxWidth="xs" >
<Box sx={{ maxWidth: 350, flexGrow: 0, justifyContent:"center", pb:10 }}>
    
      <AutoPlaySwipeableViews
        // axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        // index={activeStep}
        // onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {content.map((step, index) => (
            
          <div key={step.title}>
        <Paper
        square
        elevation={0}
        sx={{
        padding:"0px",
          display: 'flex',
          alignItems: 'center',
          pt:10,
          pl: 0,
          color:"warning.light",
          bgcolor: 'transparent',
        }}
      >
        <Typography  >{step.title}</Typography>
      </Paper>
            {Math.abs(index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'flex',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                  
                }}
                src={step.image}
                alt={step.title}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
     
    </Box>
          
         
</Container>
 
  
            </Box>
          </div>
         
        </div>
    );
};

export default index;
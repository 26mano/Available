import {  Card, CardContent, CardMedia, Container,  Divider,  Grid, Stack, Typography } from '@mui/material';
// import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../Footer";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Box } from '@mui/system';

const index = () => {
    const content = [
        {   
            
            title: "Project Box",
            description: "hgjhgkjgk;gh;igjhgvs",
            image :"https://it.sheridancollege.ca/images/project-puzzle-pieces.jpg",
            id : 0,
            link : "/Project_box"
        },
        {
            title: "Creative Design",
            description: "hgjhgkjgk;gh;igjhgvs",
            image :"https://thumbs.dreamstime.com/b/innovative-architecture-civil-engineering-plan-building-construction-project-creative-graphic-design-showing-concept-174256642.jpg",
            id : 1,
            link : "/Creative_Design"
        },
        {
            title: "D&D Horizon",
            description: "hgjhgkjgk;gh;igjhgvs",
            image:"https://www.galaxyeduworld.com/storage/blogs/1602683459_5f870243cc6a9_750_351.jpg",
            id : 2,
            link : "/D&D_Horizons"
        },
        {
            title: "Editing",
            description: "hgjhgkjgk;gh;igjhgvs",
            image :"https://cdn.flatworldsolutions.com/featured-images/top-10-online-video-editing-tools.jpg",
            id : 3,
            link : "/UV_Editing"
        },
    
        {
            title: "The Dance Entity",
            description: "hgjhgkjgk;gh;igjhgvs",
            image:"https://learn.podium.school/wp-content/uploads/2021/10/jumping-dancers-scaled-1.jpg",
            id : 4,
            link : "/The_Dance_Entity"
        },
    
        {
            title: "Catering Services",
            description: "hgjhgkjgk;gh;igjhgvs",
            image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-758x379,f_auto,q_auto:best/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg",
            id : 5,
            link : "/insuvai"
        },
        {
            title: "Magic Menporul Software Solution",
            description: "hgjhgkjgk;gh;igjhgvs",
            image: "https://websultanate.com/wp-content/uploads/2018/03/web-Application.jpg",
            id : 6,
            link : "/Magicmenporul_softwaresolutions"
        },
        {
            title: "Pc Build Advisor",
            description: "hgjhgkjgk;gh;igjhgvs",
            image: "https://www.gamingscan.com/wp-content/uploads/2020/07/Best-Custom-PC-Builders.jpg",
            id : 7,
            link : "/Pc-build"
        },
        // {
        //     title: "Add Services",
        //     description: "hgjhgkjgk;gh;igjhgvs",
        //     image: "https://image.shutterstock.com/image-vector/add-button-social-media-icon-260nw-1386491624.jpg",
        //     id : 7,
        //     link : "Add"
        // },
    
    ] ;
    return (
        <div >
            {/* ---------------------------------for Desktop---------------------------------------------- */}
<div>
<Stack component="animate" sx={{ width:"100%", height:"100%",backgroundColor:"grey.900", justifyContent:"center", display:{xs:"none", md:"grid", backgroundImage:"url('http://pinnacleeyecenter.com/wp-content/uploads/2015/12/make-an-appointment.jpg')"}}}  >
             <Box  sx={{ display:"flex",justifyContent:"flex-end" , pt:10, pb:-20 }}>
                <Link to="/" style={{ position:"relative",textDecoration:"none",}} >
                <LogoutOutlinedIcon  fontSize='large' color='warning' />
                </Link >
            
             </Box>
          
             <div style={{ width:"100%"  }}  >
                 <Typography variant='h3' ml={-2}  mt={-5} color="warning.main" fontFamily= 'Josefin Sans' >
                     Our Services 
                 </Typography>
                 
                 <Divider orientation="horizontal" color ="azure"  width ="100%" sx={{ alignItems:"center" , marginLeft:"0%" }} />
                 
            </div>                 
            
            <Container maxWidth="lg" >
            {/* <Divider variant="inset" orientation="horizontal" color ="gold"  width ="150px" sx={{ alignItems:"center" , marginLeft:"43%" }} /> */}

            <Grid container spacing={4} pt={15} pb={10} >

                 { content.map((card) => (  
       
                 <Grid item md={3}  pr="10px" >
                 <Link display="grid" to={card.link} style={{ textDecoration:"none" }} >
                 <Card  sx={{  width:"100%", height:"100%", boxShadow :"1px 1px 3px gray" , justifyContent:"stretch" }}>
    
                <CardMedia 
                    color='grey.300'
                     component="img"
                     height="150"
                     image= {card.image}
                     alt={card.id}
                 />
         
          <CardContent sx={{ height:"100%",bgcolor:"grey.600",color:"white" }}  >
          
            <Typography gutterBottom variant="h5" >
              {card.title}
            </Typography>
{/*             
            <Typography variant="caption" color="grey.900" >
                {card.description}
            </Typography> */}
          </CardContent>
        
        
      </Card>
      </Link>
    </Grid>
    ) ) } 
     
</Grid>
            </Container>
            </Stack>
           
        {/* <Footer /> */}

</div>
            {/* ---------------------------------for Mobile------------------------------------------------ */}
 <div>
          <Stack component="a" sx={{ width:"100%", height:"100%",backgroundColor:"grey.900", justifyContent:"center", display:{xs:"grid", md:"none", backgroundImage:"url('http://pinnacleeyecenter.com/wp-content/uploads/2015/12/make-an-appointment.jpg')"}}}  >
             <Box  sx={{ display:"flex",justifyContent:"right" , pt:10, pb:-20, pr:5, pl:"20px" }}>
                <Link to="/" style={{ position:"relative",textDecoration:"none",}} >
                <LogoutOutlinedIcon  fontSize='medium' color='warning' />
                </Link >
            
             </Box>
          
             <div style={{ width:"100%"  }}  >
                 <Typography variant='h6' ml={2}  mt={-5} color="warning.main" fontFamily= 'Josefin Sans' >
                     Our Services 
                 </Typography>
                 
                 <Divider orientation="horizontal" color ="azure"  width ="80%" sx={{ alignItems:"center" , marginLeft:"5%", mt:"10px" }} />
                 
            </div>                 
            
            <Container maxWidth="xs" >
            {/* <Divider variant="inset" orientation="horizontal" color ="gold"  width ="150px" sx={{ alignItems:"center" , marginLeft:"43%" }} /> */}

            <Grid container spacing={2} pt={5} pb={10} >

                 { content.map((card) => (  
       
                 <Grid item xs={6}  pr="5px" >
                 <Link display="grid" to={card.link} style={{ textDecoration:"none" }} >
                 <Card  sx={{  width:"100%", height:"100%", boxShadow :"1px 1px 3px gray" , justifyContent:"stretch" }}>
    
                <CardMedia 
                    color='grey.300'
                     component="img"
                     height="100"
                     image= {card.image}
                     alt={card.id}
                 />
         
          <CardContent sx={{ width:"100%",height:"100%",bgcolor:"grey.600",color:"white" }}  >
          
            <Typography gutterBottom variant="caption" >
              {card.title}
            </Typography>
           {/*             
            <Typography variant="caption" color="grey.900" >
                {card.description}
            </Typography> */}
          </CardContent>
        
        
      </Card>
      </Link>
    </Grid>
    ) ) } 
     
     </Grid>
    </Container>
    </Stack>
           
        <Footer />

</div>
        </div>
    );
};

export default index;
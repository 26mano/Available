//packages
import React from 'react';
import { Route, Routes } from 'react-router';
import Blog from './section/Blog/Blog';


// pages
import Home from './section/Home';
import Services from './section/Services';
import Contact from './section/Contact';
import ProjectService from './section/Services/Pages/ProjectBox/ProjectService';
import CivilServices from './section/Services/Pages/Civil/CivilService';
import Dance from './section/Services/Pages/Dance/Dance';
import Horizon from './section/Services/Pages/D&D/HDService';
import Editing from './section/Services/Pages/Editing/Editing';
import Menporul from './section/Services/Pages/MagicMenporul/Menporul';
import Insuvai from './section/Services/Pages/Catering/Insuvai';
import Login from './section/login/Login';
import Register from './section/login/Register/Register';
// import LoadingScreen from './Pages/Components/LoadingScreen';

function App() {
  return (

    <div>
     
      <Routes>
      
      <Route path="/" element={<Home />} /> 
      <Route path="/Services" element={<Services />} /> 
      <Route path="/Contact" element={<Contact />} /> 
      <Route path="/Blog" element={<Blog />} /> 
      <Route path="/Login" element={<Login />} /> 
      <Route path="/Register" element={<Register />} /> 
{/* --------------------------------------------------------------- */}
      <Route path='/ProjectBox' element={<ProjectService />} />
      <Route path='/CreativeDesign' element={<CivilServices /> } />
      <Route path='/The_Dance_Entity' element={<Dance /> } />
      <Route path='/Uv_Visual_Studio' element={<Editing /> } />
      <Route path='/D&D' element={<Horizon /> } />
      <Route path='/MagicMenporul' element={<Menporul /> } />
      <Route path='/Catering' element={ <Insuvai /> } />
  
      
     </Routes>
      
  
    </div>
    
  );
}

export default App;

//packages
import React from 'react';
import { Route, Routes } from 'react-router';
import Blog from './section/Blog/Blog';


// pages
import Home from './section/Home';
import Services from './section/Services';
import Contact from './section/Contact';

function App() {
  return (

    <div>
     
      <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/Services" element={<Services />} /> 
      <Route path="/Contact" element={<Contact />} /> 
      <Route path="/Log-Out" element={<Home />} /> 
      <Route path="/Blog" element={<Blog />} /> 
      {/* <Route path="/CreativeDesign" element={ <Home /> } />  */}
  
      
     </Routes>
      
  
    </div>
    
  );
}

export default App;

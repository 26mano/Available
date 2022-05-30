//packages
import React from 'react';
import { Route, Routes } from 'react-router';
import Contact from './section/Contact';
// import { Route, Routes } from 'react-router-dom';
// import ThemeProvider from './theme/index';

//webpages
import Home from './section/Home';
import Services from './section/Services';




function App() {
  return (

    <div>
     
      <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/Services" element={<Services />} /> 
      <Route path="/Contact" element={<Contact />} /> 
      <Route path="/Log-Out" element={<Home />} /> 
        {/* <Home /> */}
        {/* <Services /> */}
      
     </Routes>
      
  
    </div>
    
  );
}

export default App;

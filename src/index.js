import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import ThemeProvider from './theme';
import { MotionLazyContainer } from './Pages/Components/animate';
// import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
     <ThemeProvider >
         <MotionLazyContainer>
         <App />   
         </MotionLazyContainer>
     </ThemeProvider>
     </BrowserRouter>  
     , document.getElementById('root'));



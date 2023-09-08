import React, { useLayoutEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.module.css';

import Header from './Components/_Header/header.js';
import Footer from './Components/_Footer/footer.js';
import BurgerButton from './Components/_HamburgerMenu/burgerButton.js'
import BurgerMenu from './Components/_HamburgerMenu/burgerMenu.js';

import Home from './Pages/home';


// const Wrapper = ({children}) => {
//   const location = useLocation();
//   useLayoutEffect(() => {
//     document.documentElement.scrollTo(0, 0);
//   }, [location.pathname]);
//   return children
// } 

function App() {
  const [open, setOpen] = useState(false);

  const toggleHamburger = () => 
  {
    setOpen(!open);
  };

  return (
    <>
    <Router basename='/'>
      <div onClick={toggleHamburger}><BurgerButton/><BurgerMenu isOpen={open}/></div>
      
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;

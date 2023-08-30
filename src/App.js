import React, { useLayoutEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.module.css';

import Header from './Components/_Header/header.js';
import Footer from './Components/_Footer/footer.js';

import Home from './Pages/home';


// const Wrapper = ({children}) => {
//   const location = useLocation();
//   useLayoutEffect(() => {
//     document.documentElement.scrollTo(0, 0);
//   }, [location.pathname]);
//   return children
// } 

function App() {
  return (
    <>
    <Router basename='/'>
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

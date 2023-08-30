import React, { useLayoutEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.module.css';

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
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

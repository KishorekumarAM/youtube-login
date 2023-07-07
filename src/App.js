

import Sidenav from './Sidenav';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Index from './index';





function App() {
  return (
    <>
   <Sidenav />
   <Index />
   </>
  );
}

export default App;

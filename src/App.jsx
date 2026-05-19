import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react'
import './style/App.css';
import './style/bootswatch_v5.3/bootstrap-flatly.css';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

import NavBar from './elements/NavBar';

function App() {

  return (
    <>

      <Toaster />
      
      <Router basename="/template">

        <NavBar />

        <Routes>

          <Route path="/" element={<Home />} />
          {/* <Route exact path="/example" element={<Example />} /> */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Router>
    </>
  )
}

export default App

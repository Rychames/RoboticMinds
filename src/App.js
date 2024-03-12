import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home.js'
import Login from './pages/login.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/projetos' element={<p>Projetos</p>}/>
        <Route path='/sobre' element={<p>Sobre</p>}/>
      </Routes>
    </Router>
  );
}

export default App;

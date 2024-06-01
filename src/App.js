import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home.js'
import Login from './pages/login.js'
import Alunos from './pages/administration/alunos.js';
import Certificates from './pages/administration/Certificates.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<teacherProfile />} />

        <Route path='/administration/alunos' element={<Alunos />} />
        <Route path='/administration/certificates' element={<Certificates />} />
      </Routes>
    </Router>

  );
}

export default App;

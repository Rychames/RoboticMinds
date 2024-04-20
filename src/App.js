import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home.js'
import Login from './pages/login.js'
import Project from './pages/project.js'
import Alunos from './pages/administration/alunos.js';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/projetos' element={<Project />}/>
        <Route path='/sobre' element={<></>}/>
        <Route path='/profile' element={<teacherProfile />} />

        
        <Route path='/administration/alunos' element={<Alunos />} />
      </Routes>
    </Router>
  );
}

export default App;

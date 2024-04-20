import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home.js'
import Login from './pages/login.js'
import Project from './pages/project.js'
<<<<<<< HEAD
import Alunos from './pages/administration/alunos.js';
=======
>>>>>>> ce10cba91cfc8d926375d041900c3cd5967e23b8



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/projetos' element={<Project />}/>
        <Route path='/sobre' element={<></>}/>
        <Route path='/profile' element={<teacherProfile />} />
<<<<<<< HEAD

        
        <Route path='/administration/alunos' element={<Alunos />} />
=======
>>>>>>> ce10cba91cfc8d926375d041900c3cd5967e23b8
      </Routes>
    </Router>
  );
}

export default App;

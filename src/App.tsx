import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
// import logo from './logo.svg';

import './App.css';
import Home from './pages/Auth/Home';
import Register from './pages/Auth/Register';
import SingUp from './pages/Auth/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SingUp/>}/>
        <Route path='/signin' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import Login from './pages/Auth/Login';


function App() {
  return(
    <Router>
      <Routes>
        <Route path='/login' element ={<Login/>}/>
        <Route path='/Main' />
      </Routes>
    </Router>
  )
}

export default App;

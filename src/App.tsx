import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
// import logo from './logo.svg';

import './App.css';
import SingUp from './pages/Auth/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<SingUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'; 
import Login from './Login.js';
import Register from './Register.js';
import Header from './header.js';
export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </Router>
   
   
  )
}

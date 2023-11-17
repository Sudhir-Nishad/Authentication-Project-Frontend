import React, { useState } from 'react';
import axios from 'axios';
import './register.css'
export default function Register() {
  const registerSubmit= async (e)=>{
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:8000/register',registerData);
      console.log(response.data)
      
    }
    catch(error){
      console.log(error);
    }
    setRegisterData({
      username:'',
      email:'',
      password:''
    })
  }
  const [registerData,setRegisterData]=useState({
    username:'',
    email:'',
    password:''
  })
  const handleRegister=(e)=>{
    
    const {name,value}=e.target;
    setRegisterData((prevData)=>({
      ...prevData,
      [name]:value

    }))
  }

  
  return (
    <div className='container'>
      <h1>
        Registration Page
      </h1>
      <form onSubmit={registerSubmit}>
        <input type='text' name='username' placeholder='Enter name here' onChange={handleRegister} value={registerData.username}></input>
        <input type='email' name='email' placeholder='Enter email here' required onChange={handleRegister} value={registerData.email}></input>
        <input type='password' name='password' placeholder='Enter password' required value={registerData.password} onChange={handleRegister}></input>
        <button type='submit'>
        Signup
        </button>
        <button className='b2'>
        <a href="/login" className='b2a'>Login</a> 
        </button>
      </form>
    </div>
  )
}

import React, { useState } from 'react'
// import { Alert } from 'react-alert';
import './login.css';

import axios from 'axios';

export default function Login() {
  
  const loginSubmit= async (e)=>{
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:8000/login',loginData);
      const {success,message}=response.data;
      if(success){
        console.log("Login successfully");
        // alert("")
      }
      else
      {
        console.log(message);
      }
    }
    catch(error){
      console.error('Login error',error);
    }
    setLoginData({
      username:'',
      password:''
    })
    
  }
  
  const [loginData,setLoginData]=useState({
    username:'',
    password:''
  })
  const handleLogin=(e)=>{
    // console.log(e);
    const {name, value}=e.target;
    setLoginData((prevData)=>({
      ...prevData,
      [name]:value

    }))
    }
  
  return (
    <div className='container-a'>
      <h1>
        Login Page
      </h1>
      <form onSubmit={loginSubmit}>
        <input type='text' name='username'  required placeholder='Enter name here' onChange={handleLogin} value={loginData.username}></input>
        <input type='password' name='password' placeholder='Enter password' className='i2' value={loginData.password} onChange={handleLogin}></input>
        <button type='submit'>
        Login
        </button>
        <button className='b2'>
        <a href="/register" className='b2a'>Signup</a> 
        </button>
        
      </form>
    </div>
    
  )
  }
 

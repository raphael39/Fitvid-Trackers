import React from 'react';
import logo from '../../Asset/Screenshot from 2020-05-01 18-39-32.png'
import './login.css'

function Login () {

  return (
    <div className = 'div-login'>
      <img src={logo} className='logo'></img>
      <h1>Login</h1>
      <p className='description'>WELCOME TO FITVID TRACKER, THE FIRST WEBSITE/APP TO CREATE YOUR PERSONAL WORKOUT USING YOUTUBE VIDEOS</p>
      <button>Login with Google</button>
       <button>Login with Youtube</button>
    </div>
  ) 
}

export default Login;
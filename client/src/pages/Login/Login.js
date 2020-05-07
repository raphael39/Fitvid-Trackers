import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import logo from '../../Asset/Screenshot from 2020-05-01 18-39-32.png';
import './login.css';

function Login () {

  const user = useSelector(state => state.currentUser);

  return (
    (user) ? <Redirect to="/HomePage" /> :

    <div className = 'div-login'>
      <img src={logo} alt="logo" className='logo'></img>
      <h1>Login</h1>
      <p className='description'>WELCOME TO FITVID TRACKER, THE FIRST WEBSITE/APP TO CREATE YOUR PERSONAL WORKOUT USING YOUTUBE VIDEOS</p>
      <button onClick={(e) => { e.preventDefault(); window.location.href = 'http://localhost:3001/login/google' }}>>Login with Google</button>
       <button>Login with Youtube</button>
    </div>
  )
}

export default Login;
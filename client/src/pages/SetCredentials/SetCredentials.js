import React from 'react';
import { Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

function SetCredentials (props) {

  const search = window.location.search;
  const params = new URLSearchParams(search);

  const token = params.get('token');
  localStorage.setItem('token', token);
  const decodedToken = jwtDecode(token);
  console.log("SetCredentials -> decodedToken", decodedToken)

  localStorage.setItem('googleId', decodedToken.sub);
  localStorage.setItem('firstName', decodedToken.given_name);
  localStorage.setItem('lastName', decodedToken.family_name);
  localStorage.setItem('email', decodedToken.email);

  return (
    <Redirect to="/createWorkout" />
  );

}

export default SetCredentials;

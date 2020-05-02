import React from 'react';
import { Redirect } from 'react-router-dom';

function Credentials () {

  const search = window.location.search;
  const params = new URLSearchParams(search);

  const token = params.get('token');
  console.log("Credentials -> token", JSON.stringify(token))
  const userName = params.get('userid');
  console.log("Credentials -> userName", userName)



  localStorage.setItem('token', token);
  localStorage.setItem('userName', userName);

  return (
    <Redirect to="/createWorkout" />
  );

}

export default Credentials;

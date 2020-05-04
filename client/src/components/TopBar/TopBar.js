import React from 'react';
import jwtDecode from 'jwt-decode';
import { useHistory } from "react-router-dom";


function TopBar (props) {

  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('googleId');
    history.push("/login");
  }

  return (
    <div className="TopBar">
      <span>{localStorage.getItem('firstName')} {localStorage.getItem('lastName')} ({localStorage.getItem('email')}) </span>
      <button onClick={logOut}>Log out</button>
    </div>
  )
}

export default TopBar;
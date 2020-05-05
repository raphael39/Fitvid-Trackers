import React from 'react';

function TopBar (props) {

  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('googleId');
    window.location.href="/"
  }

  return (
    <div className="TopBar">
      <span>{localStorage.getItem('firstName')} {localStorage.getItem('lastName')} ({localStorage.getItem('email')}) </span>
      <button onClick={logOut}>Log out</button>
    </div>
  )
}

export default TopBar;
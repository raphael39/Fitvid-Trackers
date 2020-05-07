import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setUser } from '../../actions/userActions';

function TopBar () {
  const dispatch = useDispatch();
  const user = useSelector(state => state.currentUser);

  const logOut = () => {
    dispatch(setUser(null));
    window.location.href="/"
  }

  return (
    <div className="TopBar">
      {(user) ? <span>{user.firstName} {user.lastName} ({user.email}) </span> : null}
      <button onClick={logOut}>Log out</button>
    </div>
  )
}

export default TopBar;
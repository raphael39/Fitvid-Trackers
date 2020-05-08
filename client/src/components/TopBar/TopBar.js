import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setUser } from '../../actions/userActions';
import { setSchedule } from '../../actions/scheduleActions';

function TopBar () {
  const dispatch = useDispatch();
  const user = useSelector(state => state.currentUser);

  const logOut = () => {
    dispatch(setUser(null));
    dispatch(setSchedule(null));
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
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { setUser } from '../../redux/actions/userActions';
import { setSchedule } from '../../redux/actions/scheduleActions';

function TopBar () {
  const dispatch = useDispatch();
  const user = useSelector(state => state.currentUser);
  const history = useHistory();

  const logOut = () => {
    dispatch(setUser(null));
    dispatch(setSchedule(null));
    history.push('/');
  }

  return (
    <div className="TopBar">
      {(user) ? <span>{user.firstName} {user.lastName} ({user.email}) </span> : null}
      <button onClick={logOut}>Log out</button>
    </div>
  )
}

export default TopBar;
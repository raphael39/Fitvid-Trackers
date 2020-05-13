import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { setUser } from '../../redux/actions/userActions';
import { setSchedule } from '../../redux/actions/scheduleActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    '&:hover': {
      backgroundColor: 'black',
      color: "white"
    }
  }
}));

function TopBar () {

  const classes = useStyles()
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
      <Button className={classes.button} onClick={logOut}>Log out</Button>
    </div>
  )
}

export default TopBar;
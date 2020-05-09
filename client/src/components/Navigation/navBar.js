import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'
import TopBar from '../../components/TopBar/TopBar';

// redux

import { useSelector } from "react-redux";


export default function NavBar() {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

  //redux
  const user = useSelector(state => state.currentUser);
  
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div className={classes.root}>
        
        <AppBar className={classes.root} position="static">
          <Toolbar>
            <Link  className={classes.title} to='/HomePage'>
            <Typography variant="h6" className={classes.title}>
              Home
            </Typography>
            </Link>
            <Link  className={classes.title} to='/createWorkout'>
            <Typography variant="h6" className={classes.title}>
              Create Workout
            </Typography>
            </Link>
            <Link  className={classes.title} to='/listOfWorkouts'>
            <Typography variant="h6" className={classes.title}>
              Browse Workouts
            </Typography>
            </Link>
            <Link  className={classes.title} to='/listOfworkoutplans'>
            <Typography variant="h6" className={classes.title}>
              WorkoutPlans
            </Typography>
            </Link>
            {user && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem><TopBar></TopBar></MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }


  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: 'black'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: 'white',
      textDecoration: 'none',
    },
    
  }));
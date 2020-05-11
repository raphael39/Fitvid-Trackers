import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ScheduledForToday from '../../components/ScheduledForToday/ScheduledForToday';
import NavBar from './../../components/Navigation/navBar';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    flexGrow: 1,

  },
}));

function HomePage () {

  const user = useSelector(state => state.currentUser);
  const classes = useStyles();


  return (

    (!user) ? <Redirect to="/" /> :

    <div>
      <NavBar/>
      <div>

        <Typography variant="h6">Welcome {user.firstName}, ready for a workout?</Typography>
        <ScheduledForToday />
        <div>
          <Link to="/ListOfWorkouts">
            <FitnessCenterIcon />
            Browse Workouts
          </Link>
          <Link to="/createWorkout">
            <AddIcon/>
            Create New Workout
          </Link>
        </div>
        <div>
          <Link to="/ListOfWorkoutPlans">
            <FitnessCenterIcon/>
            Browse Workout Plans
          </Link>
          <Link to="/CreateWorkoutPlan">
            <AddIcon/>
            Create New Workout Plan
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
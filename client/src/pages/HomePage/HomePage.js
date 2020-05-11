import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ScheduledForToday from '../../components/ScheduledForToday/ScheduledForToday';
import NavBar from './../../components/Navigation/navBar';
import { Redirect } from 'react-router-dom';



function HomePage () {

  const user = useSelector(state => state.currentUser);

  return (

    (!user) ? <Redirect to="/" /> :

    <div>
      <NavBar/>
      <div>Welcome {user.firstName}, ready for a workout?</div>
      <ScheduledForToday />
      <div>
        <Link to="/ListOfWorkouts">Browse Workouts</Link>
        <Link to="/createWorkout">Create New Workout</Link>
      </div>
      <div>
        <Link to="/ListOfWorkoutPlans">Browse Workout Plans</Link>
        <Link to="/CreateWorkoutPlan">Create New Workout Plan</Link>
      </div>
    </div>
  )
}

export default HomePage;
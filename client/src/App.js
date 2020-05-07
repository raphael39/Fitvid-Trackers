import React, { useState, useEffect } from 'react';
import Login from './pages/Login/Login';
import ImportVideo from './pages/ImportVideo/ImportVideo';
import Workout from './pages/Workout/Workout';
import SetCredentials from './pages/SetCredentials/SetCredentials';
import CreatingWorkout from './pages/CreatingWorkout/CreatingWorkout'
import ListOfWorkouts from './pages/ListOfWorkouts/ListOfWorkouts';
import myListOfWorkouts from './pages/ListOfWorkouts/myListOfWorkouts';
import HomePage from './pages/HomePage/HomePage';
import ListOfWorkoutPlans from './pages/ListOfWorkoutPlans/ListOfWorkoutPlans';
import myListOfWorkoutPlans from './pages/ListOfWorkoutPlans/MyListOfWorkoutPlans'
import WorkoutPlan from './pages/WorkoutPlan/WorkoutPlan';
import CreateWorkoutPlan from './pages/CreateWorkoutPlan/CreateWorkoutPlan'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import MyListOfWorkouts from './pages/ListOfWorkouts/myListOfWorkouts';


function App () {
  return (
    <Router>
      <Switch>
        <Route exact path="/"
          component={Login} />
        <Route exact path="/setCredentials"
          component={SetCredentials} />
        <Route exact path="/HomePage"
          component={HomePage} />
        <Route exact path="/importVideo"
          component={ImportVideo} />
        <Route exact path="/createWorkout"
          component={CreatingWorkout} />
        <Route exact path="/workout"
          component={Workout} />

          <Route exact path="/ListOfWorkouts"
          component={ListOfWorkouts} />
          <Route exact path="/myListOfWorkouts"
          component={MyListOfWorkouts} />
          <Route exact path="/ListOfWorkoutPlans"
          component={ListOfWorkoutPlans} />
          <Route exact path="/myListOfWorkoutPlans"
          component={myListOfWorkoutPlans} />
          <Route exact path="/WorkoutPlan"
          component={WorkoutPlan} />
          <Route exact path="/CreateWorkoutPlan"
          component={CreateWorkoutPlan} />
      </Switch>
    </Router>
  );
}

export default App;


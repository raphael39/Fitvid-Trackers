import React, { useState, useEffect } from 'react';
import Login from './pages/Login/Login';
import ImportVideo from './pages/ImportVideo/ImportVideo';
import Workout from './pages/Workout/Workout';
import SetCredentials from './pages/SetCredentials/SetCredentials';
import CreateWorkout from './pages/CreateWorkout/CreateWorkout'
import ListOfWorkouts from './pages/ListOfWorkouts/ListOfWorkouts';
import HomePage from './pages/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';


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
          component={CreateWorkout} />
        <Route exact path="/workout"
          component={Workout} />
        <Route exact path="/workoutList"
          component={ListOfWorkouts} />
      </Switch>
    </Router>
  );
}

export default App;


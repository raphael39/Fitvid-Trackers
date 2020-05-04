import React from 'react';
import Login from './pages/Login/Login';
import ImportVideo from './pages/ImportVideo/ImportVideo';
import CreatingWorkout from './pages/CreatingWorkout/CreatingWorkout';
import Workout from './pages/Workout/Workout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/login"
          component={Login} />
        <Route exact path="/importVideo"
          component={ImportVideo} />
        <Route exact path="/createWorkout"
          component={CreatingWorkout} />
        <Route exact path="/workout"
          component={Workout} />
      </div>            
    </Router>
  );
}

export default App;


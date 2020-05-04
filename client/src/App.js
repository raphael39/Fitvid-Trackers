import React, { useState, useEffect } from 'react';
import Login from './pages/Login/Login';
import ImportVideo from './pages/ImportVideo/ImportVideo';
import CreatingWorkout from './pages/CreatingWorkout/CreatingWorkout';
import SetCredentials from './pages/SetCredentials/SetCredentials';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App() {
  const [ currentUser, setCurrentUser ] = useState(null);

  return (
    <Router>
      <div>
        <Route exact path="/login"
          component={Login} />
        <Route exact path="/setCredentials"
          render={ () => <SetCredentials setCurrentUser={setCurrentUser} currentUser={currentUser} /> } />
        <Route exact path="/importVideo"
          component={ImportVideo} />
        <Route exact path="/createWorkout"
          component={CreatingWorkout} />
      </div>
    </Router>
  );
}

export default App;


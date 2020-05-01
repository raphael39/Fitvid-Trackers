import React from 'react';
import Login from './pages/Login';
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
        <Route path="/login"
          component={Login} />
      </div>            
    </Router>
  );
}

export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import Login from './pages/Login/Login';
import ImportVideo from './pages/ImportVideo/ImportVideo';
import Workout from './pages/Workout/Workout';
import SetCredentials from './pages/SetCredentials/SetCredentials';
import CreateWorkout from './pages/CreateWorkout/CreateWorkout'
import ListOfWorkouts from './pages/ListOfWorkouts/ListOfWorkouts';
import HomePage from './pages/HomePage/HomePage';
import rootReducer from './reducers';
import './App.css';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);

function App () {

  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
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
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;


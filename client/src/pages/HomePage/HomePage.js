import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TopBar from '../../components/TopBar/TopBar';

function HomePage () {

  return (
    <div>
      <TopBar />
      Home Page
    </div>
  )
}

export default HomePage;
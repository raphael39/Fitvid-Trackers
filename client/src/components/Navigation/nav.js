import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="nav-bar">
      <h3 className="Link" >Logo</h3>{' '}
      <ul className={'nav-links'}>
        <Link className="Link" to='/HomePage'>
          <li>Home</li>
        </Link>
        <Link className="Link" to='/createWorkout'>
          <li>Create Workout</li>
        </Link>
        <Link className="Link" to='/ListOfWorkouts'>
          <li>Browse Workouts</li>
        </Link>
        <Link className="Link" to='/ListOfWorkoutPlans'>
          <li>Workout Plans</li>
        </Link>
        
       
      </ul>
    </nav>
  );
}

export default Navigation;

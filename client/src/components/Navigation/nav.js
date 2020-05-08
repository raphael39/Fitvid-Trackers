import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';

function Navigation() {
  return (
    
    <nav className="nav-bar">
      <div className="Logout"><TopBar/></div>
       
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

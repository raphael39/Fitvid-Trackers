import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './WorkoutPlan.css';
import WorkoutPlanDetail from '../../components/WorkoutPlan/WorkoutPlanDetail';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

function WorkoutPlan(props) {
  const { handle } = props.match.params;
  const { workout } = props.location.state;
  const user = useSelector(state => state.currentUser);

  return (
    (!user) ? <Redirect to="/" /> :
    
    <div>
      <h1>Workout Plan</h1>
  <p>{workout.videoIDs.length}</p>
  <WorkoutPlanDetail workouts={workout}/>

    </div>
  );
}

export default WorkoutPlan;

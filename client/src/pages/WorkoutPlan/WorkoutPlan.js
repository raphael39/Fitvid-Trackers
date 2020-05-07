import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './WorkoutPlan.css';
import WorkoutPlanDetail from '../../components/WorkoutPlan/WorkoutPlanDetail'

function WorkoutPlan(props) {
  const { handle } = props.match.params;
  const { workout } = props.location.state;

  return (
    <div>
      <h1>Workout Plan</h1>
  <p>{workout.videoIDs.length}</p>
  <WorkoutPlanDetail workouts={workout}/>

    </div>
  );
}

export default WorkoutPlan;

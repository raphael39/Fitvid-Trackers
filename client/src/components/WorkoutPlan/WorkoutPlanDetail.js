import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './WorkoutPlanDetail.css';

function WorkoutPlanDetail({ workouts }) {
  return (
    <div>
      <h1>Workout IDs: </h1>
      {workouts.trainingDays.map((isTraining, index) => (
        (isTraining ? (<p> Day: {index +1} WorkoutID: {workouts.videoIDs.shift()}</p>) : <p>Day {index+1}: Rest Day</p>)
      ))}
    </div>
  );
}

export default WorkoutPlanDetail;

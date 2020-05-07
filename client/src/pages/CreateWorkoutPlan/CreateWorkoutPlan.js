import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CreateWorkoutPlan.css';

function CreateWorkoutPlan() {

  const [newWorkoutPlan, setNewWorkoutPlan] = useState({
    trainingDays: [true, false, false, false, false, false, false],
    videoIDs: ['adasdfgJTHD_ss']
  });

  return (
    <div>
      <h1>Create your WorkoutPlan</h1>

  {newWorkoutPlan.trainingDays.map((isTraining, index) => ((isTraining ? <div className="current-training-day">{index+1} Training day<p>{newWorkoutPlan.videoIDs.shift()}</p></div> : <div className="current-rest-day">{index +1} <p>Rest Day</p><button>Add a Workout</button><button>Create a Workout</button></div>)))}
    </div>
  );
}

export default CreateWorkoutPlan;

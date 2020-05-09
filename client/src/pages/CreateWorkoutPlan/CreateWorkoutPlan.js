import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CreateWorkoutPlan.css';
import Workout from '../Workout/Workout';
import NavBar from './../../components/Navigation/navBar'

function CreateWorkoutPlan(props) {
  const [newWorkoutPlan, setNewWorkoutPlan] = useState({
    trainingDays: [null, null, null, null, null, null, null],
  });

  const { handle } = props.match.params;
  const { state } = props.location;
  const handleAddingSelected = (index) => {
    let tempArr = newWorkoutPlan.trainingDays;
    tempArr.splice(index, 1, state.workout.id);
    setNewWorkoutPlan({ trainingDays: tempArr });
  };

  const sendWorkoutPlan = () => {
    setNewWorkoutPlan({
      trainingDays: [null, null, null, null, null, null, null]
    })
  }

  return (
    <div>
      <NavBar/>
      <h1>Create your WorkoutPlan</h1>

      {state && state.workout ? <div>{state.workout.name}</div> : ''}

      {newWorkoutPlan.trainingDays.map((isTraining, index) =>
        isTraining ? (
          <div>
            {index / 7 === 0 ? <h1>Week 1</h1> : ''}
            <div className="current-training-day">
              Day {index + 1} Training  {state.workout.name} WorkoutID:{' '}
              {state.workout.id}
            </div>
          </div>
        ) : (
          <div>
            {index / 7 === 0 ? <h1>Week 1</h1> : ''}
            <div className="current-rest-day">
              <div className="day-caption-box">
                <h1>Day {index + 1}</h1>
              </div>
              <div className="adding-box">
                <div className="rest-box">
                  <h1>Rest day</h1>{' '}
                  {state && state.workout ? (
                    <button onClick={() => handleAddingSelected(index)}>
                      schedule selected workout here
                    </button>
                  ) : (
                    ''
                  )}
                </div>
                <div className="button-box">
                  <Link
                    to={{ pathname: '/createWorkout', state: { index: index } }}
                  >
                    <button>
                      <h3>+ Create a Workout</h3>
                    </button>
                  </Link>
                  <Link
                    to={{
                      pathname: '/ListOfWorkouts',
                      state: { index: index },
                    }}
                  >
                    <button>
                      <div>
                        <h3>+ Add a workout</h3>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      )}
      <button onClick={() => sendWorkoutPlan()}>Save Workout Plan</button>
    </div>
  );
}

export default CreateWorkoutPlan;

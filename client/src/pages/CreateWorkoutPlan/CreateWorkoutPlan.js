import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './CreateWorkoutPlan.css';
import { useDispatch } from 'react-redux';
import { setWorkoutPlan } from './../../redux/actions/workoutPlanAction';
import Workout from '../Workout/Workout';
import NavBar from './../../components/Navigation/navBar';
import ApiClient from '../../Services/ApiClient';

function CreateWorkoutPlan(props) {
  const dispatch = useDispatch();
  const { handle } = props.match.params;
  const { state } = props.location;
  const WorkoutPlanRedux = useSelector((state) => state.workoutPlanCreation)
  const [PlanName, setPlanName] = useState('')
  const [updated, setupdated] = useState(false)

  if (state && state.passedIndex >= 0 && state.passedIndex !== null) {
    let tempArr = WorkoutPlanRedux;
    tempArr.splice(state.passedIndex, 1, state.workout);
    state.passedIndex = null;
    dispatch(setWorkoutPlan(tempArr));
  }

  const handleAddingSelected = (index) => {
    let tempArr = WorkoutPlanRedux
    tempArr.splice(index, 1, state.workout);
    console.log(tempArr);
    dispatch(setWorkoutPlan(tempArr));
    setupdated(!updated);
  };


  const sendWorkoutPlan = async () => {
    const newWorkoutPlan = {
      name: PlanName, 
      workoutList: WorkoutPlanRedux, 
    }
    console.log(newWorkoutPlan);
    const response = await ApiClient.createPlan(newWorkoutPlan); 
    console.log('the respones in sendPlan -->', response)
  };

  console.log('the state ----->', state);
  console.log('the workoutPlan redux ----->', WorkoutPlanRedux);
  console.log('the PlanName ----->', PlanName);

  return (
    <div>
      <NavBar />
      <h1>Create your WorkoutPlan</h1>
      <input
            type="text"
            onChange={(e) => setPlanName(e.target.value)}
            placeholder="    Workoutplan name..."
            title="Type in a name"
          ></input>

      {state && state.workout ? (
        <div>
          <div>{state.workout.name}</div>
          <div>{state.passedIndex}</div>
        </div>
      ) : (
        ''
      )}

      {WorkoutPlanRedux.map((workout, index) =>
        workout ? (
          <div>
            {index / 7 === 0 ? <h1>Week 1</h1> : ''}
            <div className="current-training-day">
              Day {index + 1} Training WorkoutID: {workout._id}
              
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
                    to={{
                      pathname: '/createWorkout',
                      state: { passedIndex: index },
                    }}
                  >
                    <button>
                      <h3>+ Create a Workout</h3>
                    </button>
                  </Link>
                  <Link
                    to={{
                      pathname: '/ListOfWorkouts',
                      state: { passedIndex: index },
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
      <button onClick={sendWorkoutPlan}>Save Workout Plan</button>
    </div>
  );
}

export default CreateWorkoutPlan;

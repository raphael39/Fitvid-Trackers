import React from 'react';
import { Link } from 'react-router-dom';
import './WorkoutList.css';
import Card from '@material-ui/core/Card';
import Workout from '../../pages/Workout/Workout';

const WorkoutList = ({ workouts, passedIndex }) => {
  console.log('this is the passedIndex inside List -->', passedIndex);
  return (
    
    <div className="workout-list-box">
      {workouts.map((workout) => (
        <div className="single-workout-box">
          <div className="description-and-middle-box">
            <div className="description-box">
              <h2>{workout.name}</h2>
              <p>{workout.description}</p>

              {/* <p>
                <u>difficulty:</u> {'workout.difficulty'}
              </p> */}
            </div>

            <div className="option-buttons">
              <button>Add to schedule</button>
              {workout.trainingDays ? (
                <Link
                  to={{ pathname: '/WorkoutPlan', state: { workout: workout } }}
                >
                  <button>View Workout Plan</button>
                </Link>
              ) : (
                <Link to={{ pathname: '/CreateWorkoutPlan' , state: { workout: workout, passedIndex: passedIndex} }}>
                <button>Add to Workoutplan</button>
                </Link>
              )}
            </div>
          </div>

          <div className="video-box">
            <iframe
              src={`https://www.youtube.com/embed/${workout.youtubeId}`}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;

import React from 'react';
import { Link } from 'react-router-dom';
import './WorkoutOnHome.css';
import Workout from '../../pages/Workout/Workout';
import { useHistory } from 'react-router-dom';


const WorkoutOnHome = (props) => {
console.log("WorkoutOnHome -> props", props)


  const history = useHistory();

  function redirectToWorkout () {
    const workoutPath = `/workout/${props.workout._id}`;
    history.push(workoutPath);
  }

  return (
    <div className="workout-list-box" onClick={redirectToWorkout}>
      {
        <div className="single-workout-box">
          <div className="description-and-middle-box">
            <div className="description-box">
              <h2>{props.workout.name}</h2>
              <p>{props.workout.description}</p>
              <p>
                <u>difficulty:</u><span> </span>
                {props.workout.difficulties.easy ? 'easy ' : null}
                {props.workout.difficulties.medium ? 'medium ' : null}
                {props.workout.difficulties.hard ? 'hard' : null}
              </p>
            </div>
          </div>

          <div className="video-box">
            <iframe
              src={`https://www.youtube.com/embed/${props.workout.youtubeId}`}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      }
    </div>
  );
};

export default WorkoutOnHome;

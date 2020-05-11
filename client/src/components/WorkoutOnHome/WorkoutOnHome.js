import React from 'react';
import {Link} from 'react-router-dom';
import './WorkoutOnHome.css';
import Workout from '../../pages/Workout/Workout';
import Card from '@material-ui/core/Card';

      


const WorkoutOnHome = ( workout ) => {
function redirectToWorkout () {
  window.location.href = '/workout';
}

  return (
    <div className="workout-list-box" onClick={redirectToWorkout}>
        <Card className="single-workout-box-home">
  
          <div 
          className="description-and-middle-box"
          >
            <div className="description-box">
              <h2>{workout.name}</h2>
              <p>{workout.description}</p>

              <p>
                <u>difficulty:</u> {workout.difficulty}
              </p>
            </div>
          </div>
          <div className="video-box">
            <iframe
              src={`https://www.youtube.com/embed/${workout.youtubeID}`}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Card>
    </div>
  );
};

export default WorkoutOnHome;

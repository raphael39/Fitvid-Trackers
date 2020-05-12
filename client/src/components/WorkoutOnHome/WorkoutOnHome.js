import React from 'react';
import { Link } from 'react-router-dom';
import './WorkoutOnHome.css';
import Workout from '../../pages/Workout/Workout';
<<<<<<< HEAD
import Card from '@material-ui/core/Card';

      

=======
import { useHistory } from 'react-router-dom';
>>>>>>> 34a122790fdb3632dca93e9e68f8d1be874bde0a


const WorkoutOnHome = (props) => {
console.log("WorkoutOnHome -> props", props)


  const history = useHistory();

  function redirectToWorkout () {
    const workoutPath = `/workout/${props.workout._id}`;
    history.push(workoutPath);
  }

  return (
    <div className="workout-list-box" onClick={redirectToWorkout}>
        <Card className="single-workout-box-home">
  
          <div 
          className="description-and-middle-box"
          >
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
        </Card>
    </div>
  );
};

export default WorkoutOnHome;

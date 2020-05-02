import React from 'react';
import './WorkoutList.css';

const WorkoutList = ({ workouts }) => {
  console.log(workouts);
  return (
    <div className="workout-list-box">
      {workouts.map((workout) => (
        <div className="single-workout-box">
          <div className="description-box">
            <h2>{workout.name}</h2>
            <p>{workout.description}</p>
          </div>
          <div className="video-box">
            <iframe
            
              src={`https://www.youtube.com/embed/${workout.youtubeID}`}
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

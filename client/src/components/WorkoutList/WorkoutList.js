import React from 'react';
import './WorkoutList.css';

const WorkoutList = ({ workouts }) => {
  return (
    <div>
      {workouts.map((workout) => (
        <div className="workout-box">
          <div className="description-box">
            <h2>{workout.title}</h2>
            <p>{workout.description}</p>
          </div>
          <div className="video-box">
            <iframe
              src={"https://www.youtube.com/embed/BkS1-El_WlE"}
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

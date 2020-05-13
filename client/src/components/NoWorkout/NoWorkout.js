import React from 'react';
import './NoWorkout.css';
import Card from '@material-ui/core/Card';

const NoWorkout = () => {

  return (
    <div className="workout-list-box">
      <Card className="single-workout-box-home">
        <div className="description-and-middle-box">
          <div className="description-box">
            <h2>Rest Day</h2>
            <p>No exercise on this day.</p>
          </div>
        </div>
        <div className="video-box">
        </div>
      </Card>
    </div>
  );
};

export default NoWorkout;

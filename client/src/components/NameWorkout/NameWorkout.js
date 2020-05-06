import React from 'react';

function NameWorkout ({workoutName, setWorkoutName, editable}) {
  
  const handlingWorkoutName = (event) => {
    event.preventDefault();
    setWorkoutName(event.target.value);
  }

  return (
    <div>
      {editable && 
        <div>
        <label for='workout-name'>Name of the workout: </label>
        <input id='workout-name' type='text' defaultValue={workoutName} onChange={(event)=> handlingWorkoutName(event)}/>     
        </div>
      }
      {!editable && 
        <div>
          <h2>{workoutName}</h2>
        </div>
      }
    </div>
  )
};

export default NameWorkout
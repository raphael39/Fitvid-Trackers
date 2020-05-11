import React from 'react';
import moment from 'moment';

function workoutLength ({length, setLength, editable}) {
  console.log("EDITABLE", editable)

  return (
  <div>
    <h4>Workout length:</h4>
    <input contentEditable={editable} type="number" value={length} onChange={(event) => {setLength(event.target.value) }}></input><span> minutes</span>
  </div>
  )
};

export default workoutLength
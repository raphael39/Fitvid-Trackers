import React from 'react';

function DaysWorkout ({days, setDays, editable, handleDays}) {
  return (
    <div>
      {editable && 
        <div>
          <p>Repeat every: </p>
          <label><input type="checkbox" name="monday" onClick={()=>handleDays("monday")} />Monday</label>
          <label><input type="checkbox" name="tuesday" onClick={()=>handleDays("tuesday")}/>Tuesday</label>
          <label><input type="checkbox" name="wednesday" onClick={()=>handleDays("wednesday")}/>Wednesday</label>
          <label><input type="checkbox" name="thursday" onClick={()=>handleDays("thursday")}/>Thursday</label>
          <label><input type="checkbox" name="friday" onClick={()=>handleDays("friday")}/>Friday</label>
          <label><input type="checkbox" name="saturday" onClick={()=>handleDays("saturday")}/>Saturday</label>
          <label><input type="checkbox" name="sunday" onClick={()=>handleDays("sunday")}/>Sunday</label>
          <br/>
        </div>}
    </div>

  )
};

export default DaysWorkout
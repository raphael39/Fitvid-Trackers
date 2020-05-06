import React from 'react';

function DaysWorkout ({days, setDays, editable}) {

  const handleDays = (level) => {
    days[level] = !days[level]
  }

  return (
    <div>
      {editable && 
        <div>
          <h4>Repeat every: </h4>
          <label><input type="checkbox" name="monday" defaultChecked={days.monday} onClick={()=>handleDays("monday")} />Monday</label>
          <label><input type="checkbox" name="tuesday" defaultChecked={days.tuesday} onClick={()=>handleDays("tuesday")}/>Tuesday</label>
          <label><input type="checkbox" name="wednesday" defaultChecked={days.wednesday} onClick={()=>handleDays("wednesday")}/>Wednesday</label>
          <label><input type="checkbox" name="thursday" defaultChecked={days.thursday} onClick={()=>handleDays("thursday")}/>Thursday</label>
          <label><input type="checkbox" name="friday" defaultChecked={days.friday} onClick={()=>handleDays("friday")}/>Friday</label>
          <label><input type="checkbox" name="saturday" defaultChecked={days.saturday} onClick={()=>handleDays("saturday")}/>Saturday</label>
          <label><input type="checkbox" name="sunday" defaultChecked={days.sunday} onClick={()=>handleDays("sunday")}/>Sunday</label>
        </div>}
        {!editable && 
        <div>
          <h4>Days: </h4>
          {Object.keys(days).map (day=> (days[day]) && <p>{day}</p> )}
        </div>}
    </div>

  )
};

export default DaysWorkout
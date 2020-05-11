import React from 'react';
import TextField from "@material-ui/core/TextField";

function DaysWorkout ({ days, setDays, repeatWeeks, setRepeatWeeks, editable }) {

  const handleDays = (day) => {
    const newDays = [...days];
    newDays[day] = !newDays[day];
    setDays(newDays);
  }

  return (
    <div>
      {editable &&
        <div>
          <h4>Repeat every: </h4>
          <label><input type="checkbox" name="monday" defaultChecked={days.monday} onClick={() => handleDays(0)} />Monday</label>
          <label><input type="checkbox" name="tuesday" defaultChecked={days.tuesday} onClick={() => handleDays(1)} />Tuesday</label>
          <label><input type="checkbox" name="wednesday" defaultChecked={days.wednesday} onClick={() => handleDays(2)} />Wednesday</label>
          <label><input type="checkbox" name="thursday" defaultChecked={days.thursday} onClick={() => handleDays(3)} />Thursday</label>
          <label><input type="checkbox" name="friday" defaultChecked={days.friday} onClick={() => handleDays(4)} />Friday</label>
          <label><input type="checkbox" name="saturday" defaultChecked={days.saturday} onClick={() => handleDays(5)} />Saturday</label>
          <label><input type="checkbox" name="sunday" defaultChecked={days.sunday} onClick={() => handleDays(6)} />Sunday</label>
          <br />
          <p>
            <span>for the next</span>
            <TextField id="numberOfDays" defaultValue={repeatWeeks} inputProps={{style: { textAlign: 'right' }}} size="small" onChange={(event) => setRepeatWeeks(parseInt(event.target.value))}></TextField>
            <span>weeks</span>
          </p>
        </div>
      }
      
      {!editable &&
        <div>
          <h4>Days: </h4>
          {Object.keys(days).map(day => (days[day]) && <p>{day}</p>)}
        </div>}
    </div>

  )
};

export default DaysWorkout
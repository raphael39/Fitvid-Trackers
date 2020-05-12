import React from 'react';
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function DaysWorkout({ days, setDays, repeatWeeks, setRepeatWeeks, editable }) {

  // const handleDays = (day) => {
  //   const newDays = [...days];
  //   newDays[day] = !newDays[day];
  //   setDays(newDays);
  // }

  const handleChange = (index) => {
    const newDays = [...days];
    newDays[index] = !newDays[index];
    setDays(newDays);
  }


  return (
    <div>
      {editable &&
        <div>
          <Typography variant='body1' style={{ fontWeight: 'bold' }}>Repeat every: </Typography>
          <FormControl>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked={days[0]} onChange={() => handleChange(0)} name="monday" size="small" color="default" />}
                label="Monday"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked={days[1]} onChange={() => handleChange(1)} name="tuesday" size="small" color="default" />}
                label="Tuesday"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked={days[2]} onChange={() => handleChange(2)} name="wednesday" size="small" color="default" />}
                label="Wednesday"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked={days[3]} onChange={() => handleChange(3)} name="thursday" size="small" color="default" />}
                label="Thursday"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked={days[4]} onChange={() => handleChange(4)} name="friday" size="small" color="default" />}
                label="Friday"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked={days[5]} onChange={() => handleChange(5)} name="saturday" size="small" color="default" />}
                label="Saturday"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked={days[6]} onChange={() => handleChange(6)} name="sunday" size="small" color="default" />}
                label="Sunday"
              />
            </FormGroup>
          </FormControl>

          {/* <label><input type="checkbox" name="monday" defaultChecked={days.monday} onClick={() => handleDays(0)} />Monday</label>
          <label><input type="checkbox" name="tuesday" defaultChecked={days.tuesday} onClick={() => handleDays(1)} />Tuesday</label>
          <label><input type="checkbox" name="wednesday" defaultChecked={days.wednesday} onClick={() => handleDays(2)} />Wednesday</label>
          <label><input type="checkbox" name="thursday" defaultChecked={days.thursday} onClick={() => handleDays(3)} />Thursday</label>
          <label><input type="checkbox" name="friday" defaultChecked={days.friday} onClick={() => handleDays(4)} />Friday</label>
          <label><input type="checkbox" name="saturday" defaultChecked={days.saturday} onClick={() => handleDays(5)} />Saturday</label>
          <label><input type="checkbox" name="sunday" defaultChecked={days.sunday} onClick={() => handleDays(6)} />Sunday</label> */}
          <br />
          <p>
            <span>for the next</span>
            <TextField id="numberOfDays" defaultValue={repeatWeeks} inputProps={{ style: { textAlign: 'right' } }} size="small" onChange={(event) => setRepeatWeeks(parseInt(event.target.value))}></TextField>
            <span>weeks</span>
          </p>
        </div>
      }

      {/* {!editable &&
        <div>
          <Typography variant='body1' style={{ fontWeight: 'bold' }}>Days: </Typography>
          {Object.keys(days).map(day => (days[day]) && <Typography variant='body1'>{day.charAt(0).toUpperCase() + day.slice(1)}</Typography>)}
        </div>} */}
    </div>

  )
};

export default DaysWorkout
import React from 'react';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



function DifficultyWorkout ({difficulties, setDifficulties, editable}) {
  
  const handleChange = (event) => {
    setDifficulties({...difficulties, [event.target.name]: event.target.checked})
  }

  const { easy, medium, hard } = difficulties;


  return (
    <div>
      {editable && 
        <div>
        <Typography variant='body1' style={{fontWeight: 'bold'}}>Difficulty: </Typography>
        <FormControl>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={easy} onChange={handleChange} name="easy" size="small" color="default"/>}
              label="Easy"
            />
            <FormControlLabel
              control={<Checkbox checked={medium} onChange={handleChange} name="medium" size="small" color="default"/>}
              label="Medium"
            />
            <FormControlLabel
              control={<Checkbox checked={hard} onChange={handleChange} name="hard" size="small" color="default"/>}
              label="Hard"
            />
          </FormGroup>
        </FormControl>
          {/* <label><input type="checkbox" name="easy" defaultChecked={difficulties.easy} onClick={()=>handleDifficulties("easy")}/>Easy</label>
          <label><input type="checkbox" name="medium" defaultChecked={difficulties.medium} onClick={()=>handleDifficulties("medium")}/>Medium</label>
          <label><input type="checkbox" name="hard" defaultChecked={difficulties.hard} onClick={()=>handleDifficulties("hard")}/>Hard</label> */}
        </div>
      }
      {!editable && 
        <div>
          <h4>Difficulty: </h4>
          {Object.keys(difficulties).map (difficulty=> (difficulties[difficulty]) && <p>{difficulty}</p> )}
        </div>}
    </div>
  )
};

export default DifficultyWorkout
import React from 'react';

function DifficultyWorkout ({difficulties, setDifficulties, editable}) {
  
  const handleDifficulties = (level) => {
    difficulties[level] = !difficulties[level]
  }

  return (
    <div>
      {editable && 
        <div>
          <h4>Difficulty: </h4>
          <label><input type="checkbox" name="easy" defaultChecked={difficulties.easy} onClick={()=>handleDifficulties("easy")}/>Easy</label>
          <label><input type="checkbox" name="medium" defaultChecked={difficulties.medium} onClick={()=>handleDifficulties("medium")}/>Medium</label>
          <label><input type="checkbox" name="hard" defaultChecked={difficulties.hard} onClick={()=>handleDifficulties("hard")}/>Hard</label>
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
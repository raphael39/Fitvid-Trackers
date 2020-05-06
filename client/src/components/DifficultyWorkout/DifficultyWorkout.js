import React from 'react';

function DifficultyWorkout ({difficulties, setDifficulties, editable, handleDifficulties}) {
  return (
    <div>
      {editable && 
        <div>
          <p>Difficulty: </p>
          <label><input type="checkbox" name="easy" onClick={()=>handleDifficulties("easy")}/>Easy</label>
          <label><input type="checkbox" name="medium" onClick={()=>handleDifficulties("medium")}/>Medium</label>
          <label><input type="checkbox" name="hard" onClick={()=>handleDifficulties("hard")}/>Hard</label>
        </div>
      }
    </div>
  )
};

export default DifficultyWorkout
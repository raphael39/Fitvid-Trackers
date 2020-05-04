import React from 'react';
import './FilterWorkout.css';

const FilterWorkouts = ({handleCheckBoxChange}) => {
  return (
    <div className="filter-list-view">
      <div className="filter-box">
      <p>Difficulty:</p>
        <div className="difficulty-filter">
          <div>
            <input type="checkbox" name="easy" onChange={(e) => handleCheckBoxChange(e.target.name)}></input>
            <label for="Easy"> Easy </label>
            
          </div>
          <div>
            <input type="checkbox" name="medium" onChange={(e) => handleCheckBoxChange(e.target.name)}></input>
            <label for="Medium"> Medium </label>
          </div>

          <div>
            <input type="checkbox" name="hard" onChange={(e) => handleCheckBoxChange(e.target.name)}></input>
            <label for="Hard"> Hard </label>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FilterWorkouts;

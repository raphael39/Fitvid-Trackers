import React from 'react';
import './FilterWorkout.css';

const FilterWorkouts = ({}) => {
  return (
    <div className="filter-list-view">
      <div className="filter-box">
      <p>Difficulty:</p>
        <div className="difficulty-filter">
          <div>
            <input type="checkbox" name="Easy"></input>
            <label for="Easy"> Easy </label>
          </div>
          <div>
            <input type="checkbox" name="Medium"></input>
            <label for="Medium"> Medium </label>
          </div>

          <div>
            <input type="checkbox" name="Hard"></input>
            <label for="Hard"> Hard </label>
          </div>

          <div>
            <input type="checkbox" name="Strength"></input>
            <label for="Strength"> Strength </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterWorkouts;

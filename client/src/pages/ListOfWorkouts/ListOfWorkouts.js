import React, { useState } from 'react';
import WorkoutList from '../../components/WorkoutList/WorkoutList';
import FilterWorkouts from './../../components/WorkoutList/FilterWorkouts';
import './ListofWorkouts.css';

function ListOfWorkouts() {
  const fakeWorkouts = [
    {
      id: '001',
      name: 'Chest Workout',
      description: '10 minutes intense bodyweight chest workout',
      difficulty: 'medium',
      type: 'strength',
      youtubeID: 'BkS1-El_WlE',
      tags: ['chest', 'HIT'],
      length: 10,
      created_by: 654684,
    },
    {
      id: '002',
      name: 'Full Body Workout',
      description: '30 minutes intense bodyweight workout',
      difficulty: 'hard',
      type: 'strength',
      youtubeID: 'UBMk30rjy0o',
      tags: ['chest', 'HIT'],
      length: 20,
      created_by: 654684,
    },
    {
      id: '003',
      name: 'Leg Workout',
      description: '10 minutes intense bodyweight chest workout',
      difficulty: 'medium',
      type: 'strength',
      youtubeID: 'aCa8R9II8F0',
      tags: ['chest', 'HIT'],
      length: 20,
      created_by: 654684,
    },
    {
      id: '004',
      name: 'Abs Workout',
      description: '10 minutes intense bodyweight chest workout',
      difficulty: 'easy',
      type: 'strength',
      youtubeID: '8AAmaSOSyIA',
      tags: ['chest', 'HIT'],
      length: 10,
      created_by: 654684,
    },
    {
      id: '005',
      name: 'core Workout',
      description: '10 minutes intense bodyweight chest workout',
      difficulty: 'hard',
      type: 'strength',
      youtubeID: 'dJlFmxiL11s',
      tags: ['chest', 'HIT'],
      length: 10,
      created_by: 654684,
    },
  ];

  const [searchValue, setSearchValue] = useState('');
  const [filteredWorkouts, setfilteredWorkouts] = useState(fakeWorkouts);

  const handleInputChange = (enteredInput) => {
    setSearchValue(enteredInput);
    filterWorkoutFunction(enteredInput);
  };

  const filterWorkoutFunction = (searchValue) => {
    let filteredArray = fakeWorkouts.filter((Workout) =>
      Workout.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setfilteredWorkouts(filteredArray);
  };

  return (
    <div>
      <div className="header-search-view">
        <h1>Your Workouts</h1>
        <div className="search-workouts">
          <input
            type="text"
            className="search-input"
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="    Search .."
            title="Type in a name"
          ></input>
        </div>
      </div>
      <div className="list-filter-container">
        <WorkoutList workouts={filteredWorkouts}></WorkoutList>
        <FilterWorkouts></FilterWorkouts>
      </div>
    </div>
  );
}

export default ListOfWorkouts;

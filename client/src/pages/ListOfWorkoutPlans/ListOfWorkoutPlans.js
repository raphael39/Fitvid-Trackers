import React, { useState, useEffect } from 'react';
import WorkoutList from '../../components/WorkoutList/WorkoutList';
import FilterWorkouts from '../../components/WorkoutList/FilterWorkouts';
import TopBar from '../../components/TopBar/TopBar';
import { Link } from 'react-router-dom';

const WorkoutPlans = ({}) => {
  const fakeWorkouts = [
    {
      id: 'P001',
      name: 'Chest, Abs & Legs Plan ',
      description:
        'This Plan has 3x Trainigs per week and each session focuses on different body parts',
      difficulty: 'medium',
      type: ['strength'],
      tags: ['chest', 'HIT'],
      youtubeID: 'BkS1-El_WlE',
      trainingDays: [true, false, true, false, true, false, false, true, false, true],
      videoIDs: ['0012985', '03859854', '6879151687', '3516512165', '6465465498' ],
      created_by: 654684,
    },
    {
      id: 'P002',
      name: '30-Day Full Body Workout-Plan',
      description:
        'This plan is perfect if you want to get fit. It demands the whole body in each training session and combines strengt and endurance exercises ',
      difficulty: 'easy',
      type: ['strength', 'endurance'],
      youtubeID: 'UBMk30rjy0o',
      youtubeIDs: ['BkS1-El_WlE'],
      tags: ['chest', 'HIT'],
      trainingDays: ['Monday', 'Wednesday', 'Friday'],
      created_by: 654684,
    },
  ];
  const [filteredWorkouts, setfilteredWorkouts] = useState(fakeWorkouts);
  const [searchValue, setSearchValue] = useState('');
  const [checkBoxStatus, setcheckBoxStatus] = useState({
    easy: false,
    medium: false,
    hard: false,
  });

  const handleInputChange = (enteredInput) => {
    setSearchValue(enteredInput);
    console.log(enteredInput);
    filterWorkoutsDifficultyAndSearch(checkBoxStatus, enteredInput);
  };

  const filterWorkoutsDifficultyAndSearch = (
    checkBoxStatus,
    enteredInput = searchValue
  ) => {
    let filteredArray = [];

    if (checkBoxStatus.easy === true) {
      filteredArray = fakeWorkouts.filter(
        (Workout) => Workout.difficulty === 'easy'
      );
    }
    if (checkBoxStatus.medium === true) {
      filteredArray = filteredArray.concat(
        fakeWorkouts.filter((Workout) => Workout.difficulty === 'medium')
      );
    }
    if (checkBoxStatus.hard === true) {
      filteredArray = filteredArray.concat(
        fakeWorkouts.filter((Workout) => Workout.difficulty === 'hard')
      );
    } else {
    }

    if (filteredArray.length > 0) {
      filteredArray = filteredArray.filter((Workout) =>
        Workout.name.toLowerCase().includes(enteredInput.toLowerCase())
      );
      setfilteredWorkouts(filteredArray);
    } else {
      let searchFilteredArray = fakeWorkouts.filter((Workout) =>
        Workout.name.toLowerCase().includes(enteredInput.toLowerCase())
      );
      console.log(searchFilteredArray);
      setfilteredWorkouts(searchFilteredArray);
    }
  };

  const handleCheckBoxChange = (toggleKey) => {
    let messengerObjectForBoxStatus = Object.assign(checkBoxStatus);
    console.log(
      'this is the messenger before --->',
      messengerObjectForBoxStatus
    );
    if (toggleKey === 'easy') {
      if (checkBoxStatus.easy === false) {
        setcheckBoxStatus({ ...checkBoxStatus, easy: true });
        messengerObjectForBoxStatus.easy = true;
      } else {
        setcheckBoxStatus({ ...checkBoxStatus, easy: false });
        messengerObjectForBoxStatus.easy = false;
      }
    }
    if (toggleKey === 'medium') {
      if (checkBoxStatus.medium === false) {
        setcheckBoxStatus({ ...checkBoxStatus, medium: true });
        messengerObjectForBoxStatus.medium = true;
      } else {
        setcheckBoxStatus({ ...checkBoxStatus, medium: false });
        messengerObjectForBoxStatus.medium = false;
      }
    }
    if (toggleKey === 'hard') {
      if (checkBoxStatus.hard === false) {
        setcheckBoxStatus({ ...checkBoxStatus, hard: true });
        messengerObjectForBoxStatus.hard = true;
      } else {
        setcheckBoxStatus({ ...checkBoxStatus, hard: false });
        messengerObjectForBoxStatus.hard = false;
      }
    }
    console.log('hookStatus', checkBoxStatus);
    console.log('messenger after --->', messengerObjectForBoxStatus);
    filterWorkoutsDifficultyAndSearch(messengerObjectForBoxStatus);
  };

  return (
    <div>
      <TopBar/>
      <div className="header-search-view">
        <div>
          <Link to="/ListOfWorkoutPlans">
            <button>
              <h1>Browse Workout Plans</h1>
            </button>
          </Link>
          <Link to="/myListOfWorkoutPlans">
            <button>
              <h1>My saved Workout Plans</h1>
            </button>
          </Link>
        </div>
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
        <FilterWorkouts
          handleCheckBoxChange={handleCheckBoxChange}
        ></FilterWorkouts>
      </div>
    </div>
  );
};

export default WorkoutPlans;

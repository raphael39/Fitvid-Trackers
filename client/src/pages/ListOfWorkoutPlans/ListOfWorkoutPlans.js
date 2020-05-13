import React, { useState, useEffect } from 'react';
import WorkoutPlanList from '../../components/WorkoutPlanList/WorkoutPlanList';
import FilterWorkouts from '../../components/WorkoutList/FilterWorkouts';
import { Link } from 'react-router-dom';
import ApiClient from '../../Services/ApiClient';
import NavBar from './../../components/Navigation/navBar';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const WorkoutPlans = ({}) => {

  const classes = useStyles();
  const user = useSelector(state => state.currentUser);
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
    if (newValue === 1) {
      setFilteredWorkoutPlans(myWorkoutPlans);
    } else {
      setFilteredWorkoutPlans(AllWorkoutPlans);
    }
  };

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

  const [searchValue, setSearchValue] = useState('');
  const [myWorkoutPlans, setmyWorkoutPlans] = useState([]);
  const [AllWorkoutPlans, setAllWorkoutPlans] = useState([]);
  const [filteredWorkoutPlans, setFilteredWorkoutPlans] = useState([]);
  const [checkBoxStatus, setcheckBoxStatus] = useState({
    easy: false,
    medium: false,
    hard: false,
  });

  useEffect (() => {
    ApiClient.getAllWorkoutPlans()
      .then(plans => setFilteredWorkoutPlans(plans));
    ApiClient.getAllWorkoutPlans()
      .then(plans => setAllWorkoutPlans(plans));
    ApiClient.getMyWorkoutPlans()
      .then(plans => setmyWorkoutPlans(plans));
  }, []);

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
      setFilteredWorkoutPlans(filteredArray);
    } else {
      let searchFilteredArray = fakeWorkouts.filter((Workout) =>
        Workout.name.toLowerCase().includes(enteredInput.toLowerCase())
      );
      console.log(searchFilteredArray);
      setFilteredWorkoutPlans(searchFilteredArray);
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

    (!user) ? <Redirect to="/" /> :

    <div>
      <NavBar/>

      <div className="header-search-view">
      <ThemeProvider theme={defaultMaterialTheme}>
          <Paper className={classes.root}>
            <Tabs
              value={value}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab
                label="Browse Workout Plans"
                indicatorColor="primary"
                textColor="primary"
                centered
              />
              <Tab label="My saved Workout Plans" />
            </Tabs>
          </Paper>
        </ThemeProvider>
      </div>
      <div className="list-filter-container">
        <WorkoutPlanList plans={filteredWorkoutPlans}></WorkoutPlanList>
        <FilterWorkouts
          handleCheckBoxChange={handleCheckBoxChange}
        ></FilterWorkouts>
      </div>
    </div>
  );
};

export default WorkoutPlans;


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121',
    },
  },
});
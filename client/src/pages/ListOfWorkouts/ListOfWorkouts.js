import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import WorkoutList from '../../components/WorkoutList/WorkoutList';
import FilterWorkouts from './../../components/WorkoutList/FilterWorkouts';
import './ListofWorkouts.css';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import ApiClient from '../../Services/ApiClient';
import Navigation from './../../components/Navigation/navBar';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Workout from '../Workout/Workout';

function ListOfWorkouts(props) {
  const { handle } = props.match.params;
  const { state } = props.location;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const user = useSelector(state => state.currentUser);

  const handleTabChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  let fakeWorkouts = [ {
    id: '001',
    name: 'Chest Workout',
    description: '10 minutes intense bodyweight chest workout',
    difficulties: {easy: false, medium: true, hard: false},
    type: 'strength',
    youtubeID: 'BkS1-El_WlE',
    tags: ['chest', 'HIT'],
    length: 10,
    created_by: 654684,
    weekdays: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
  },
  {
    id: '002',
    name: 'Full Body Workout',
    description: '30 minutes intense bodyweight workout',
    difficulty: {easy: false, medium: true, hard: false},
    type: 'strength',
    youtubeID: 'UBMk30rjy0o',
    tags: ['chest', 'HIT'],
    length: 20,
    created_by: 654684,
    weekdays: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
  },
  {
    id: '003',
    name: 'Leg Workout',
    description: '10 minutes intense bodyweight chest workout',
    difficulty: {easy: false, medium: true, hard: false},
    type: 'strength',
    youtubeID: 'aCa8R9II8F0',
    tags: ['chest', 'HIT'],
    length: 20,
    created_by: 654684,
    weekdays: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
  },
  {
    id: '004',
    name: 'Abs Workout',
    description: '10 minutes intense bodyweight chest workout',
    difficulty: {easy: true, medium: false, hard: false},
    type: 'strength',
    youtubeID: '8AAmaSOSyIA',
    tags: ['chest', 'HIT'],
    length: 10,
    created_by: 654684,
    weekdays: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
  },
  {
    id: '005',
    name: 'core Workout',
    description: '10 minutes intense bodyweight chest workout',
    difficulty: {easy: false, medium: true, hard: false},
    type: 'strength',
    youtubeID: 'dJlFmxiL11s?start=60',
    tags: ['chest', 'HIT'],
    length: 10,
    created_by: 654684,
    weekdays: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
  },]

 

  const [searchValue, setSearchValue] = useState('');
  const [filteredWorkouts, setfilteredWorkouts] = useState(fakeWorkouts);
  const [myWorkouts, setmyWorkouts] = useState([]);
  const [AllWorkouts, setAllWorkouts] = useState([]);
  const [checkBoxStatus, setcheckBoxStatus] = useState({
    easy: false,
    medium: false,
    hard: false,
  });

  useEffect(() => {
    /* ApiClient.getAllWorkouts().then((workouts) =>
      setfilteredWorkouts(workouts)
    ); */
    ApiClient.getMyWorkouts()
      .then(workouts => setmyWorkouts(workouts));
  }, []);

  console.log('my Workouts -->', myWorkouts);

  const handleInputChange = (enteredInput) => {
    setSearchValue(enteredInput);
    filterWorkoutsDifficultyAndSearch(checkBoxStatus, enteredInput);
  };

  const handleCheckBoxChange = (toggleKey) => {

    let messengerObjectForBoxStatus = Object.assign(checkBoxStatus);
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
    filterWorkoutsDifficultyAndSearch(messengerObjectForBoxStatus);
  };

  const filterWorkoutsDifficultyAndSearch = (
    checkBoxStatus,
    enteredInput = searchValue
  ) => {
    console.log('inside filter method -->');
    let filteredArray = [];

    if (checkBoxStatus.easy === true) {
      filteredArray = fakeWorkouts.filter(
        (Workout) => {
          return Workout.difficulties.easy;
        }
      );
    }
    if (checkBoxStatus.medium === true) {
      filteredArray = filteredArray.concat(
        fakeWorkouts.filter((Workout) => Workout.difficulties.medium)
      );
    }
    if (checkBoxStatus.hard === true) {
      filteredArray = filteredArray.concat(
        fakeWorkouts.filter((Workout) => Workout.difficulties.hard)
      );
    } else {
    }

    if (filteredArray.length > 0 && checkBoxStatus.easy || checkBoxStatus.medium || checkBoxStatus.hard) {
      filteredArray = filteredArray.filter((Workout) =>
        Workout.name.toLowerCase().includes(enteredInput.toLowerCase())

      );
      console.log(filteredArray);
      setfilteredWorkouts(filteredArray);
    } else {
      let searchFilteredArray = fakeWorkouts.filter((Workout) =>
        Workout.name.toLowerCase().includes(enteredInput.toLowerCase())
      );
      setfilteredWorkouts(searchFilteredArray);
    }
  };

  return (

    (!user) ? <Redirect to="/" /> :

    <div>
      <Navigation />
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
        <Tab label="Browse Workouts" indicatorColor="primary"
        textColor="primary"
        centered/>
        <Tab label="My saved Workouts" />
      </Tabs>
    </Paper>
    </ThemeProvider>
        
      </div>
      <div className="list-filter-container">
        <WorkoutList
          workouts={filteredWorkouts}
          passedIndex={
            state && state.passedIndex >= 0 ? state.passedIndex : 'nothing'
          }
        ></WorkoutList>
        <FilterWorkouts
          handleCheckBoxChange={handleCheckBoxChange}
        ></FilterWorkouts>
      </div>
    </div>
  );
}

export default ListOfWorkouts;


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
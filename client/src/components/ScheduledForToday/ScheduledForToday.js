import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import WorkoutOnHome from '../../components/WorkoutOnHome/WorkoutOnHome';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import ApiClient from '../../Services/ApiClient';

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121"
    },
  },
});

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: "7px",
    marginLeft: "10px",
    backgroundColor: "black",
    color: "white",
    '&:hover': {
      backgroundColor: 'rgb(80,80,80)',
    }
  },
}));

function ScheduledForToday () {

  const schedule = useSelector(state => state.schedule);
  const classes = useStyles();
  const today = moment().format('YYYY-MM-DD');

  const [selectedDate, setSelectedDate] = useState(today);
  const [todaysWorkoutIds, setTodaysWorkoutIds] = useState([]);
  const [workoutsOfSelectedDay, setWorkoutsOfSelectedDay] = useState([]);

  useEffect(() => {
    getWorkoutsOfSelectedDay(today);
  }, [schedule]);

  function changeDate (date) {
    const dateFormatted = moment(date).format('YYYY-MM-DD');
    setSelectedDate(dateFormatted);
    getWorkoutsOfSelectedDay(dateFormatted);
  }

  function getScheduledFor () {
    return moment(selectedDate).calendar(null, {
      lastDay: '[yesterday]',
      sameDay: '[today]',
      nextDay: '[tomorrow]',
      lastWeek: '[last] dddd',
      nextWeek: '[next] dddd',
      sameElse: 'L'
    }).split(' at ')[0];
  }

  function getWorkoutsOfSelectedDay (dateFormatted) {
    if (schedule) {
      const todaysIds = schedule.map.filter(day => (moment(day.day).format('YYYY-MM-DD') == dateFormatted));
      setTodaysWorkoutIds(todaysIds);

      if (todaysIds.length > 0) {
        const promiseArr = [];
        for (let i = 0; i < todaysIds.length; i++) {
          promiseArr[i] = ApiClient.getWorkout(todaysIds[i].workout)
        }
        Promise.all(promiseArr).then(resolved => { setWorkoutsOfSelectedDay(resolved) });
      }
    } else { setWorkoutsOfSelectedDay([]); }
  }

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div>
          <div>Scheduled for {getScheduledFor()}:</div>
          <div>
            {todaysWorkoutIds.length < 1 ? 'nothing scheduled' :
              workoutsOfSelectedDay.map(workout => (
                <WorkoutOnHome workout={workout} />
              ))
            }
            <div>Select another day:</div>
            <DatePicker id="datePicker" format='YYYY-MM-DD' value={selectedDate} onChange={changeDate} />
          </div>
        </div>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  )
}

export default ScheduledForToday;

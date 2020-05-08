import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

function ScheduledForToday () {
  const schedule = useSelector(state => state.schedule);

  const today = moment().format('YYYY-MM-DD');

  const [ selectedDay, setSelectedDay ] = useState(today);
  const [ workoutsOfSelectedDay, setWorkoutsOfSelectedDay ] = useState([]);
  const token = useSelector(state => state.currentUser).token;

  useEffect(() => {
    getWorkoutsOfSelectedDay();
  }, []);

  function changeDate () {
    const pickedDate = document.getElementById("datePicker").value;
    setSelectedDay(pickedDate);
  }

  function getScheduledFor () {
    return moment(selectedDay).calendar(null, {
      lastDay: '[yesterday]',
      sameDay: '[today]',
      nextDay: '[tomorrow]',
      lastWeek: '[last] dddd',
      nextWeek: '[next] dddd',
      sameElse: 'L'
    }).split(' at ')[0];
  }

  function getWorkoutsOfSelectedDay () {
    if (schedule) {
    const workoutIds = schedule.map.filter(day => day.day === selectedDay).workouts;
    console.log("getWorkoutsOfSelectedDay -> workoutIds", workoutIds)
    if (workoutIds) {
      const fetchWorkoutUrl = process.env.REACT_APP_SERVER_URL + `/workout/${workoutIds[0]}`;
      const workoutObj =   fetch(fetchWorkoutUrl, {
        method: 'get',
        headers: new Headers({
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      })
      .then(response => response.json()
      .then(data => { setWorkoutsOfSelectedDay([data]); }));
    }
  } else {
    setWorkoutsOfSelectedDay([]);
  }
  }

  return (
    <div>
      <div>Scheduled for {getScheduledFor()}:</div>
      <div>{workoutsOfSelectedDay.length < 1 ? 'nothing scheduled' :
        workoutsOfSelectedDay.map(workout => (
          <div>
            <Link to='/workout/'>workout.title</Link>
          </div>
        ))
      }
        <div>Select another day:</div>
        <input id="datePicker" type="date" defaultValue={today}></input>
        <button onClick={changeDate}>Select day</button>
      </div>
    </div>
  )
}

export default ScheduledForToday;
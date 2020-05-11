import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import WorkoutOnHome from '../../components/WorkoutOnHome/WorkoutOnHome';


function ScheduledForToday () {
  const schedule = useSelector(state => state.schedule);

  const today = moment().format('YYYY-MM-DD');

  const [selectedDay, setSelectedDay] = useState(today);
  const [workoutsOfSelectedDay, setWorkoutsOfSelectedDay] = useState([]);
  const token = useSelector(state => state.currentUser).token;

  useEffect(() => {
    getWorkoutsOfSelectedDay();
  }, []);

  function changeDate () {
    setSelectedDay(document.getElementById("datePicker").value);
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
      const todaysWorkouts = schedule.map.filter(day => (moment(day.day).format('YYYY-MM-DD') == selectedDay));
      if (todaysWorkouts.length > 0) {
        const fetchWorkoutUrl = process.env.REACT_APP_SERVER_URL + `/workout/${todaysWorkouts[0].workout}`;
        const workoutObj = fetch(fetchWorkoutUrl, {
          method: 'get',
          headers: new Headers({
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          })
        })
          .then(response => response.json()
            .then(data => { setWorkoutsOfSelectedDay([data]) }));
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
          <WorkoutOnHome workouts={workout} />
        ))
      }
        <div>Select another day:</div>
        <input id="datePicker" type="date" defaultValue={today} onChange={changeDate}></input>
        <button onClick={getWorkoutsOfSelectedDay}>Select day</button>
      </div>
    </div>
  )
}

export default ScheduledForToday;

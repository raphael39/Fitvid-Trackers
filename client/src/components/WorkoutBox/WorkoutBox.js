import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './WorkoutBox.css';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { ThemeProvider } from "@material-ui/styles";
import MomentUtils from '@date-io/moment';
import { createMuiTheme } from "@material-ui/core";
import moment from 'moment';

import { useSelector, useDispatch } from 'react-redux';
import { setSchedule } from '../../redux/actions/scheduleActions';
import ApiClient from '../../Services/ApiClient';

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121"
    },
  },
});

const WorkoutBox = ({ workout, passedIndex }) => {
  const [pickerOpen, setPickerOpen] = useState(false);
  const schedule = useSelector(state => state.schedule);
  const dispatch = useDispatch();

  function addToSchedule (startDate) {
    const newScheduleItem = {
          day: moment(startDate).format('YYYY-MM-DD'),
          workout: workout._id
        }

    const newSchedule = { userId: schedule.userId, map: [...schedule.map, newScheduleItem] };
    ApiClient.updateSchedule(newSchedule).then((response) => {
      dispatch(setSchedule(response));
    });
  }

  function changeDate (date) {
    addToSchedule(date)
    setPickerOpen(false);
  }

  function closePicker () { setPickerOpen(false) };
  function openPicker () { setPickerOpen(true) };

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div className="single-workout-box">
          <div className="description-and-middle-box">
            <div className="description-box">
              <h2>{workout.name}</h2>
              <p>{workout.description}</p>
            </div>
            <div className="option-buttons">
            <button onClick={openPicker}>Add to schedule</button>
            <DatePicker open={pickerOpen} id="datePicker" format='YYYY-MM-DD' onChange={changeDate} onClose={closePicker} style={{ display: 'none' }}></DatePicker>
              {workout.trainingDays ? (
                <Link
                  to={{ pathname: '/WorkoutPlan', state: { workout: workout } }}
                >
                  <button>View Workout Plan</button>
                </Link>
              ) : (
                  <Link to={{ pathname: '/CreateWorkoutPlan', state: { workout: workout, passedIndex: passedIndex } }}>
                    <button>Add to Workoutplan</button>
                  </Link>
                )}
            </div>
          </div>

          <div className="video-box">
            <iframe
              src={`https://www.youtube.com/embed/${workout.youtubeId}`}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default WorkoutBox;

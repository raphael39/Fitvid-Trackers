import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './WorkoutPlanBox.css';
import Card from '@material-ui/core/Card';
import Workout from '../../pages/Workout/Workout';
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


const WorkoutPlanBox = ({ plan }) => {
  const [pickerOpen, setPickerOpen] = useState(false);
  const schedule = useSelector(state => state.schedule);
  const dispatch = useDispatch();


  function addToSchedule (startDate) {
    const newScheduleItems = [];
    for (let i = 0; i < plan.workoutList.length; i++) {
      if (plan.workoutList[i]) {
        newScheduleItems.push({
          day: moment(startDate).add(i, 'days').format('YYYY-MM-DD'),
          workout: plan.workoutList[i]
        })
      }
    }

    const newSchedule = { userId: schedule.userId, map: [...schedule.map, ...newScheduleItems] };
    ApiClient.updateSchedule(newSchedule).then((response) => {
      dispatch(setSchedule(response));
    });
  }

  function changeDate (date) {
    console.log("changeDate -> date", date)
    addToSchedule(date)
    setPickerOpen(false);
  }

  function openDatePicker () { setPickerOpen(true) };

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div className="single-workout-box">
          <div className="description-and-middle-box">
            <div className="description-box">
              <h2>{plan.name}</h2>
              <p>{plan.description}</p>

              {/* <p>
                <u>difficulty:</u> {'workout.difficulty'}
              </p> */}
            </div>

            <div className="option-buttons">
              <button onClick={openDatePicker}>Add to schedule</button>
              <DatePicker open={pickerOpen} id="datePicker" format='YYYY-MM-DD' onChange={changeDate} style={{ display: 'none' }}></DatePicker>


              {plan.trainingDays ? (
                <Link
                  to={{ pathname: '/WorkoutPlan', state: { workout: plan } }}
                >
                  <button>View Workout Plan</button>
                </Link>
              ) : (
                  <Link to={{ pathname: '/CreateWorkoutPlan', state: { workout: plan } }}>
                    <button>Add to Workoutplan</button>
                  </Link>
                )}
            </div>
          </div>

          <div className="video-box">
            <iframe
              src={`https://www.youtube.com/embed/${plan.youtubeId}`}
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

export default WorkoutPlanBox;

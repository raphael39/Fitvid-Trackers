import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './CreateWorkoutPlan.css';
import { useDispatch } from 'react-redux';
import { setWorkoutPlan } from './../../redux/actions/workoutPlanAction';
import Workout from '../Workout/Workout';
import NavBar from './../../components/Navigation/navBar';
import ApiClient from '../../Services/ApiClient';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';





const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  button: {
    backgroundColor: "white",
    
    '&:hover': {
      backgroundColor: 'black',
      color: "white"
    }
  }
}));

function CreateWorkoutPlan(props) {

  const classes = useStyles();

  const dispatch = useDispatch();
  const [newWorkoutPlan, setNewWorkoutPlan] = useState({
    trainingDays: [null, null, null, null, null, null, null],
  });
  const user = useSelector(state => state.currentUser);
  const { handle } = props.match.params;
  const { state } = props.location;
  const WorkoutPlanRedux = useSelector((state) => state.workoutPlanCreation)
  const [PlanName, setPlanName] = useState('')
  const [updated, setupdated] = useState(false)

  if (state && state.passedIndex >= 0 && state.passedIndex !== null) {
    let tempArr = WorkoutPlanRedux;
    tempArr.splice(state.passedIndex, 1, state.workout);
    state.passedIndex = null;
    dispatch(setWorkoutPlan(tempArr));
  }

  const handleAddingSelected = (index) => {
    let tempArr = WorkoutPlanRedux
    tempArr.splice(index, 1, state.workout);
    console.log(tempArr);
    dispatch(setWorkoutPlan(tempArr));
    setupdated(!updated);
  };


  const sendWorkoutPlan = async () => {
    const newWorkoutPlan = {
      name: PlanName, 
      workoutList: WorkoutPlanRedux, 
    }
    console.log(newWorkoutPlan);
    const response = await ApiClient.createPlan(newWorkoutPlan); 
    console.log('the respones in sendPlan -->', response)
  };

  console.log('the state ----->', state);
  console.log('the workoutPlan redux ----->', WorkoutPlanRedux);
  console.log('the PlanName ----->', PlanName);

  return (

    (!user) ? <Redirect to="/" /> :

    <div>
      <NavBar />
      <div className={classes.root} style={{padding: "2% 8%"}}>
      <Typography align="center" variant="h6">Create your WorkoutPlan</Typography>
      <TextField
            type="text"
            onChange={(e) => setPlanName(e.target.value)}
            placeholder="    Workoutplan name..."
            title="Type in a name"
          ></TextField>

      {state && state.workout ? (
        <div>
          <div>{state.workout.name}</div>
          <div>{state.passedIndex}</div>
        </div>
      ) : (
        ''
      )}

      {WorkoutPlanRedux.map((workout, index) =>
        workout ? (
          <div>
            {index / 7 === 0 ? <Typography variant="h6">Week 1</Typography> : ''}
            <Paper className="current-training-day">
              Day {index + 1} Training WorkoutID: {workout._id}
              
            </Paper>
          </div>
        ) : (
          <div>
            {index / 7 === 0 ? <Typography variant="h6">Week 1</Typography> : ''}
            <div className="current-rest-day">
              <div className="day-caption-box">
                <Typography variant="h6">Day {index + 1}</Typography>
              </div>
              <Paper className="adding-box">
                <div className="rest-box">
                  <Typography variant="h6">Rest day</Typography>{' '}
                  {state && state.workout ? (
                    <Button className={classes.button} onClick={() => handleAddingSelected(index)}>
                      schedule selected workout here
                    </Button>
                  ) : (
                    ''
                  )}
                </div>
                <div className="button-box">
                  <Link
                    to={{
                      pathname: '/createWorkout',
                      state: { passedIndex: index },
                    }}
                    style={{ textDecoration: 'none', color: "white" }}
                  >
                    <Button className={classes.button} startIcon={<AddIcon/>}>
                      Create Workout
                    </Button>
                  </Link>
                  <Link
                    to={{
                      pathname: '/ListOfWorkouts',
                      state: { passedIndex: index },
                    }}
                    style={{ textDecoration: 'none', color: "white" }}
                  >
                    <Button className={classes.button} startIcon={<AddIcon/>}>
                      <div>
                        Add workout
                      </div>
                    </Button>
                  </Link>
                </div>
              </Paper>
            </div>
          </div>
        )
      )}
        <Grid container direction="column" >
          <Grid item align="right" style={{marginTop: "20px"}}>
            <Button className={classes.button} onClick={sendWorkoutPlan}>Save Workout Plan</Button>
          </Grid>              
        </Grid>
      </div>
    </div>
  );
}

export default CreateWorkoutPlan;

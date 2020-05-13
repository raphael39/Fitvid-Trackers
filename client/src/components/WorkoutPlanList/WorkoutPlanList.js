import React from 'react';
import './WorkoutPlanList.css';
import WorkoutPlanBox from '../WorkoutPlanBox/WorkoutPlanBox';
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { ThemeProvider } from "@material-ui/styles";
import MomentUtils from '@date-io/moment';
import { createMuiTheme } from "@material-ui/core";


const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121"
    },
  },
});

const WorkoutPlanList = ({ plans }) => {

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
        <div className="workout-list-box">
          {plans.map((plan) => (
            <WorkoutPlanBox plan={plan} />
          ))}
        </div>
    </ThemeProvider>
  );
};

export default WorkoutPlanList;

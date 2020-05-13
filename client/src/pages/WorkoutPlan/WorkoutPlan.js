import React, { useState, useEffect } from 'react';
import './WorkoutPlan.css';
import WorkoutPlanDetail from '../../components/WorkoutPlan/WorkoutPlanDetail';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import ApiClient from '../../Services/ApiClient';


function WorkoutPlan(props) {

  const [ plan, setPlan ] = useState(null);
  const user = useSelector(state => state.currentUser);
  const planId = props.match.params.id;

   useEffect(() => {
     ApiClient.getWorkoutPlan(planId).then((data) => {
       console.log("WorkoutPlan -> data", data)
       setPlan(data);
     });
   }, [])

  return (
    (!user) ? <Redirect to="/" /> :

    <div>
      <h1>Workout Plan</h1>
      { (plan) ? <WorkoutPlanDetail plan={plan}/> : null }
    </div>
  );
}

export default WorkoutPlan;

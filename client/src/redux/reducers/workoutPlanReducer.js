import * as actions from '../actions/workoutPlanAction';

const initialState = [null, null, null, null, null, null, null];

export default function workoutPlanReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
    case actions.SET_WORKOUTPLAN:
      return action.payload
  }
}


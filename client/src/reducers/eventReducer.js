import { FETCH_FUTURE_EVENTS, FETCH_TRAININGS_OF_TYPE } from "../actions/types"

export default function(state = null, action) {
  //console.log(action)
  switch (action.type) {
    case FETCH_FUTURE_EVENTS:
      return action.payload || false
    case FETCH_TRAININGS_OF_TYPE:
      return action.payload || false
    default:
      return state
  }
}

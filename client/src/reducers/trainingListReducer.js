import { FETCH_TRAININGS } from "../actions/types"

export default function(state = null, action) {
  //console.log(action)
  switch (action.type) {
    case FETCH_TRAININGS:
      return action.payload || false
    default:
      return state
  }
}

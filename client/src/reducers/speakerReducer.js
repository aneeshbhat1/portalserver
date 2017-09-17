import { FETCH_SPEAKERS } from "../actions/types"

export default function(state = null, action) {
  //console.log(action)
  switch (action.type) {
    case FETCH_SPEAKERS:
      return action.payload || false
    default:
      return state
  }
}

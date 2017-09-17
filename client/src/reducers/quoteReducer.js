import { FETCH_QUOTE } from "../actions/types"

export default function(state = null, action) {
  //console.log(action)
  switch (action.type) {
    case FETCH_QUOTE:
      return action.payload || false
    default:
      return state
  }
}

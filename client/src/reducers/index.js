import { combineReducers } from "redux"
import authReducer from "./authReducer"
import eventReducer from "./eventReducer"
import quoteReducer from "./quoteReducer"
import speakerReducer from "./speakerReducer"
import trainingListReducer from "./trainingListReducer"

export default combineReducers({
  auth: authReducer,
  eventList: trainingListReducer,
  futureEventList: eventReducer,
  quote: quoteReducer,
  speakerList: speakerReducer
})

import { combineReducers } from "redux"
import authReducer from "./authReducer"
import eventReducer from "./eventReducer"
import quoteReducer from "./quoteReducer"
import speakerReducer from "./speakerReducer"

export default combineReducers({
  auth: authReducer,
  eventList: eventReducer,
  quote: quoteReducer,
  speakerList: speakerReducer
})

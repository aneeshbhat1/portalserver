import axios from "axios"
import { 
  FETCH_USER, FETCH_TRAININGS, FETCH_QUOTE, FETCH_FUTURE_EVENTS,
  FETCH_SPEAKERS
} from "./types"

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user")
  dispatch({ type: FETCH_USER, payload: res.data })
}

// Kill
export const fetchTrainings = () => async dispatch => {
  const res = await axios.get("/api/trainings")
  dispatch({ type: FETCH_TRAININGS, payload: res.data })
}

export const fetchQuote = () => async dispatch => {
  const res = await axios.get("/api/quote")
  dispatch({ type: FETCH_QUOTE, payload: res.data })
}

export const fetchFutureEvents = () => async dispatch => {
  const res = await axios.get("/api/futureEvents")
  dispatch({ type: FETCH_FUTURE_EVENTS, payload: res.data })
}

export const fetchSpeakers = () => async dispatch => {
  const res = await axios.get("/api/speakers")
  dispatch({ type: FETCH_SPEAKERS, payload: res.data })
}

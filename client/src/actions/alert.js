import { v4 as uuidv4 } from 'uuid'
import { SET_ALERT, REMOVE_ALERT } from './types'

//sent the message and the alertType
export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
  const id = uuidv4()
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  })
  //match the id in the reducers/alert.js, and does not return that alert
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout)
}

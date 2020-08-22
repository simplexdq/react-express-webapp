import { v4 as uuidv4 } from 'uuid'
import { SET_ALERT, REMOVE_ALERT } from './types'

//Register component sent the message and the alertType to action
export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
  const id = uuidv4() //it will generate an id and dispatch set alert with that message alert type and id
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
    //make sure reducer can return payload
  })
  //match the id in the reducers/alert.js, and does not return that alert
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout)
}

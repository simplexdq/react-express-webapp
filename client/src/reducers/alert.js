import { SET_ALERT, REMOVE_ALERT } from '../actions/types'

const initialState = [] //the initial state of alert is empty

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SET_ALERT: //when action dispatch SET_ALERT -> reducer do return
      return [...state, payload] //[...state,payload]
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload)
    default:
      return state
  }
}

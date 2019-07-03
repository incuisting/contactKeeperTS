import { SET_ALERT, REMOVE_ALERT } from '../types'
import { Aciton } from '../common'

export default (state: any, action: Aciton) => {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload]
    case REMOVE_ALERT:
      return state.filter((alert: any) => alert.id !== action.payload)
    default:
      return state
  }
}

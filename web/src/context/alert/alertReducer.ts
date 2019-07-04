import { SET_ALERT, REMOVE_ALERT } from "../types";
import { IAciton } from "../common";

export default (state: any, action: IAciton) => {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter((alert: any) => alert.id !== action.payload);
    default:
      return state;
  }
};

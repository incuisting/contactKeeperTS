import { SET_ALERT, REMOVE_ALERT } from "../types";
import { IAciton } from "../common";

export interface IAlert {
  id: string;
  msg: string;
  type: string;
}
export type IState = IAlert[];

export default (state: IState, action: IAciton) => {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter((alert: IAlert) => alert.id !== action.payload);
    default:
      return state;
  }
};

import { createContext } from "react";
import { IState } from "./alertReducer";

interface IAlertContext {
  alerts: IState;
  setAlert: (msg: string, type: string, timeout?: number) => void;
}
const alertContext = createContext<Partial<IAlertContext>>({});

export default alertContext;

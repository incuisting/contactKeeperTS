import { createContext } from "react";
import { IState } from "./authReducer";
interface IAuthContent extends IState {
  loadUser: () => void;
  logout: () => void;
  login: (formData: any) => void;
  clearErrors: () => void;
  register: (formData: any) => void;
}
const authContext = createContext<Partial<IAuthContent>>({});

export default authContext;

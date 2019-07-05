import { createContext } from "react";
import { IState } from "./authReducer";
export interface ILoinFormData {
  email: string;
  password: string;
}
export interface IRegisterFormData extends ILoinFormData {
  name: string;
}
interface IAuthContent extends IState {
  loadUser: () => void;
  logout: () => void;
  login: (formData: ILoinFormData) => void;
  clearErrors: () => void;
  register: (formData: IRegisterFormData) => void;
}
const authContext = createContext<Partial<IAuthContent>>({});

export default authContext;

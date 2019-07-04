import { createContext } from "react";

interface IAuthContent {
  isAuthenticated: any;
  loading: any;
  loadUser: any;
  logout: any;
  user: {
    name: string;
  };
  login: any;
  error: any;
  clearErrors: any;
  register: any;
  token: any;
}
const authContext = createContext<Partial<IAuthContent>>({});

export default authContext;

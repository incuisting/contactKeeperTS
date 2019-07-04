import { createContext } from "react";

interface IContactContext {
  clearContacts: any;
  filtered: any;
  clearFilter: any;
  filterContacts: any;
  addContact: any;
  updateContact: any;
  clearCurrent: any;
  current: any;
  deleteContact: any;
  setCurrent: any;
  contacts: any;
  getContacts: any;
  loading: boolean;
  error: any;
}
const contactContext = createContext<Partial<IContactContext>>({});

export default contactContext;

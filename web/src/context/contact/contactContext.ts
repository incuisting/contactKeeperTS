import { createContext } from "react";
import { IContact, IState } from "./contactReducer";

interface IContactContext extends IState {
  clearContacts: () => void;
  clearFilter: () => void;
  filterContacts: (text: string) => void;
  addContact: (contact: IContact) => void;
  updateContact: (contact: IContact) => void;
  clearCurrent: () => void;
  deleteContact: (id: string | number) => void;
  setCurrent: (contact: IContact) => void;
  getContacts: () => void;
}
const contactContext = createContext<Partial<IContactContext>>({});

export default contactContext;

import { createContext } from 'react'

interface ContactContext {
  clearContacts: any
  filtered: any
  clearFilter: any
  filterContacts: any
  addContact: any
  updateContact: any
  clearCurrent: any
  current: any
  deleteContact: any
  setCurrent: any
  contacts: any
  getContacts: any
  loading: any
  error: any
}
const contactContext = createContext<Partial<ContactContext>>({})

export default contactContext

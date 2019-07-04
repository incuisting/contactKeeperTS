import { createContext } from 'react'

interface AlertContext {
  alerts: any
  setAlert: any
}
const alertContext = createContext<Partial<AlertContext>>({})

export default alertContext

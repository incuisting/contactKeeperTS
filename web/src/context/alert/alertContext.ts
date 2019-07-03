import { createContext } from 'react'

interface AlertContext {}
const alertContext = createContext<AlertContext>({})

export default alertContext

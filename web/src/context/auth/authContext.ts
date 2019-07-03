import { createContext } from 'react'

interface AuthContent {
  // todo
}
const authContext = createContext<AuthContent>({})

export default authContext

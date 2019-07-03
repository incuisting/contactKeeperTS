import { createContext } from 'react'

interface ContactContext {
  // todo interface is missing
}
const contactContext = createContext<Partial<ContactContext>>({})

export default contactContext

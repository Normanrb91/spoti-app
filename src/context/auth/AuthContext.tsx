import { createContext } from 'react'

export interface AuthContextProps {
  token: string | null
  signIn: (token: string) => void
  logout: () => void
}

export const AuthContext = createContext({} as AuthContextProps)

import { type PropsWithChildren, useState, useEffect } from 'react'
import { login_constants } from '@/libs'
import { AuthContext } from './AuthContext'

export interface AuthState {
  token: string | null
}

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [authState, setAuthState] = useState<AuthState>({ token: null })
  const { redirect_uri } = login_constants

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token')!)
    setAuthState({ token })
  }, [])

  const signIn = (token: string) => {
    setAuthState({ token })
    localStorage.setItem('token', JSON.stringify(token))
  }

  const logout = () => {
    setAuthState({ token: null })
    localStorage.removeItem('token')
    window.location.href = redirect_uri
  }

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        logout,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

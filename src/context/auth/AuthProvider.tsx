import { type PropsWithChildren, useState, useEffect } from 'react'
import axios from 'axios'
import { login_constants } from '@/libs'
import { AuthResponse } from '@/interfaces'
import { AuthContext } from './AuthContext'

export interface AuthState {
  token: string | null
}

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [authState, setAuthState] = useState<AuthState>({ token: null })
  const { client_id } = login_constants

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token')!)
    setAuthState({ token })
  }, [])

  const signIn = async () => {
    try {
      const urlencoded = new URLSearchParams()
      urlencoded.append('grant_type', 'client_credentials')
      urlencoded.append('client_id', client_id)
      urlencoded.append('client_secret', import.meta.env.VITE_CLIENT_SECRET)

      const { data } = await axios.post<AuthResponse>('https://accounts.spotify.com/api/token', urlencoded)

      setAuthState({ token: data.access_token })
      localStorage.setItem('token', JSON.stringify(data.access_token))
    } catch (error) {
      console.log(error)
    }
  }

  const logout = () => {
    setAuthState({ token: null })
    localStorage.removeItem('token')
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

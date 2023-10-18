import { createContext } from 'react'

export interface GradientContextProps {
  color: string
  handleMouseEnter: (imageUrl: string) => void
  handleMouseLeave: () => void
}

export const GradientContext = createContext({} as GradientContextProps)

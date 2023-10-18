import { type PropsWithChildren, useState, useEffect } from 'react'
import { GradientContext } from './GradientContext'
import { useColor } from 'color-thief-react'

export interface GradientState {
  color: string
}

export const GradientProvider = ({ children }: PropsWithChildren) => {
  const [color, setColor] = useState<GradientState>({ color: '#24B960' })
  const [image, setimage] = useState('')
  const [delayHandler, setDelayHandler] = useState<NodeJS.Timeout>()
  const { data } = useColor(image, 'hex', { crossOrigin: '10', quality: 10 })

  useEffect(() => {
    if (data) {
      setColor({ color: data })
    }
  }, [data])

  const handleMouseEnter = (imageUrl: string) => {
    setDelayHandler(
      setTimeout(() => {
        setimage(imageUrl)
      }, 100)
    )
  }

  const handleMouseLeave = () => {
    clearTimeout(delayHandler)
  }

  return (
    <GradientContext.Provider
      value={{
        ...color,
        handleMouseEnter,
        handleMouseLeave
      }}
    >
      {children}
    </GradientContext.Provider>
  )
}

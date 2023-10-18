import { type PropsWithChildren, useState, useEffect, useContext } from 'react'
import { useColor } from 'color-thief-react'
import { GradientContext } from './GradientContext'
import { PlayListContext } from '../playlist'

export const GradientProvider = ({ children }: PropsWithChildren) => {
  const [color, setColor] = useState({ color: '' })
  const [image, setImage] = useState('')
  const [delayHandler, setDelayHandler] = useState<NodeJS.Timeout>()
  const { userPlayList } = useContext(PlayListContext)
  const { data } = useColor(image, 'hex', { crossOrigin: '10', quality: 10 })

  useEffect(() => {
    if (data) {
      setColor({ color: data })
    }
  }, [data])

  useEffect(() => {
    if (userPlayList.length > 0) {
      setImage(userPlayList[0].images[0].url)
    }
  }, [userPlayList])

  const handleMouseEnter = (imageUrl: string) => {
    setDelayHandler(
      setTimeout(() => {
        setImage(imageUrl)
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

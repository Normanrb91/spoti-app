import { useEffect, useState } from 'react'

export const useGreeting = (initalState = '') => {
  const [greeting, setGreeting] = useState(initalState)

  useEffect(() => {
    const currentTime = new Date()
    const currentHour = currentTime.getHours()
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good morning')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon')
    } else {
      setGreeting('Good night')
    }
  }, [setGreeting])

  return {
    greeting
  }
}

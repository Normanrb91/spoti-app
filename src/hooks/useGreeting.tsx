import { useEffect, useState } from 'react'

export const useGreeting = (initalState = '') => {
  const [greeting, setGreeting] = useState(initalState)

  useEffect(() => {
    const currentTime = new Date()
    const currentHour = currentTime.getHours()

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Buenos dias')
    } else if (currentHour >= 12 && currentHour < 20) {
      setGreeting('Buenas tardes')
    } else {
      setGreeting('Buenas noches')
    }
  }, [setGreeting])

  return {
    greeting
  }
}

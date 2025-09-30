'use client'

import React, { useEffect, useState } from 'react'

const CountUp= ({ start = 0, end, duration = 2000 }) => {
  const [count, setCount] = useState(start)

  useEffect(() => {
    const range = end - start
    const stepTime = Math.max(Math.floor(duration / range), 10)
    let current = start
    const increment = end > start ? 1 : -1

    const timer = setInterval(() => {
      current += increment
      setCount(current)
      if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
        clearInterval(timer)
        setCount(end)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [start, end, duration])

  return (
    <span className='text-black'>{count}</span>
  )
}

export default CountUp



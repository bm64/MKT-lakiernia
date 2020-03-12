import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react'

export default function useWindowSize() {
  const isClient = typeof window === 'object'
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    if (!isClient) return false

    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    setTimeout(handleResize, 0)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isClient])

  return windowSize
}

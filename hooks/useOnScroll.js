import { useState, useEffect } from 'react'

export default function useOnScroll(ref) {
  const [shouldShow, setShouldShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const offset = ref.current.getBoundingClientRect().top
        const h = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        )
        if (offset - h < 0 && !shouldShow) setShouldShow(true)
      }
    }

    var listener = window.addEventListener('scroll', handleScroll)
    setTimeout(() => handleScroll(), 100) // Dirty hack
    return () => window.removeEventListener('scroll', listener)
  }, [])

  return shouldShow
}

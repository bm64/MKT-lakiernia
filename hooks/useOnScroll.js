import { useState, useEffect } from 'react'

export default function useOnScroll(ref) {
  const [shouldShow, setShouldShow] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    let enterOptions = {
      threshold: [0, 1],
    }

    let onEnter = new IntersectionObserver(entries => {
      setShouldShow(entries[0].intersectionRatio !== 0)
    }, enterOptions)

    onEnter.observe(ref.current)
  }, [ref])

  return shouldShow
}

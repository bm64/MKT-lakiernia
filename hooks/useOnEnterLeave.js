import { useState, useEffect } from 'react'

export default function useOnEnterLeave(ref) {
  const [shouldShow, setShouldShow] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    let onEnter = new IntersectionObserver(
      entries => {
        setShouldShow(entries[0].intersectionRatio !== 0)
      },
      { threshold: [0, 1] }
    )

    onEnter.observe(ref.current)
  }, [ref])

  return shouldShow
}

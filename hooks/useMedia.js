import { useState, useEffect } from 'react'

export default function useMedia(queries, values, defaultValue) {
  const mediaQueryLists =
    typeof window === 'object' ? queries.map(q => window.matchMedia(q)) : []

  const getValue = () => {
    const index = mediaQueryLists.findIndex(mql => mql.matches)
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue
  }

  const [value, setValue] = useState(getValue)

  useEffect(
    () => {
      const handler = () => setValue(getValue)
      mediaQueryLists.forEach(mql => mql.addListener(handler))
      return () => mediaQueryLists.forEach(mql => mql.removeListener(handler))
    },

    [] // Empty array ensures effect is only run on mount and unmount
  )

  return value
}

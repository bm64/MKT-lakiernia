import { useRef, useEffect } from 'react'

var ignoreOnce = true

const withScrollIn = Component => props => {
  const ref = useRef(null)

  useEffect(() => {
    if (ignoreOnce) {
      setTimeout(() => {
        ignoreOnce = false
      }, 100) // Anti-annoying scroll hack
      return
    }
    if (ref.current) window.scrollTo(0, ref.current.offsetTop - 80)
  }, [])

  return (
    <div ref={ref}>
      <Component {...props} />
    </div>
  )
}

export default withScrollIn

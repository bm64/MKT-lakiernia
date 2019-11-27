import { useRef } from 'react'

import useOnScroll from '../hooks/useOnScroll'

const withFadeIn = (Component, duration = 1000) => props => {
  const ref = useRef(null)
  const shouldFade = useOnScroll(ref)

  return (
    <div
      className={props.containerClass}
      style={{
        transition: shouldFade
          ? `opacity ${(duration / 1000).toFixed(2)}s`
          : '',
        opacity: shouldFade ? '1' : '0',
      }}
      ref={ref}
    >
      <Component {...props} />
    </div>
  )
}

export default withFadeIn

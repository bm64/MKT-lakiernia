import { useRef } from 'react'

import useOnScroll from '../hooks/useOnScroll'

export const withLeftSlideIn = (Component, duration = 1000) => props => {
  const ref = useRef(null)
  const shouldSlide = useOnScroll(ref)

  return (
    <div
      className={props.containerClass}
      style={{
        transition: `transform ${(duration / 1000.0).toFixed(2)}s`,
        transform: `translateX(${shouldSlide ? '0vw' : '-100vw'})`,
      }}
      ref={ref}
    >
      <Component {...props} />
    </div>
  )
}

export const withRightSlideIn = (Component, duration = 1000) => props => {
  const ref = useRef(null)
  const shouldSlide = useOnScroll(ref)

  return (
    <div
      className={props.containerClass}
      style={{
        transition: `transform ${(duration / 1000.0).toFixed(2)}s`,
        transform: `translateX(${shouldSlide ? '0vw' : '100vw'})`,
      }}
      ref={ref}
    >
      <Component {...props} />
    </div>
  )
}

export const withSlideDown = (Component, duration = 1000) => props => {
  const ref = useRef(null)
  const shouldSlide = useOnScroll(ref)

  return (
    <div
      className={props.containerClass}
      style={{
        transition: shouldSlide
          ? `transform ${(duration / 1000.0).toFixed(2)}s, opacity 2.5s`
          : '',
        opacity: shouldSlide ? 1 : 0,
        transform: `translateY(${shouldSlide ? '0vw' : '-20vh'})`,
      }}
      ref={ref}
    >
      <Component {...props} />
    </div>
  )
}

export default withLeftSlideIn

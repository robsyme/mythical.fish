import React from 'react'

const Hexagon = props => (
  <svg
    fill='currentColor'
    viewBox='0 0 576 512'
    width='1em'
    height='1em'
    {...props}
  >
    <path d='M441.5 39.8C432.9 25.1 417.1 16 400 16H176c-17.1 0-32.9 9.1-41.5 23.8l-112 192c-8.7 14.9-8.7 33.4 0 48.4l112 192c8.6 14.7 24.4 23.8 41.5 23.8h224c17.1 0 32.9-9.1 41.5-23.8l112-192c8.7-14.9 8.7-33.4 0-48.4l-112-192zM400 448H176L64 256 176 64h224l112 192-112 192z' />
  </svg>
)

export default Hexagon

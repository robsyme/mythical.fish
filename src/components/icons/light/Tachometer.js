import React from 'react'

const Tachometer = props => (
  <svg
    fill='currentColor'
    viewBox='0 0 576 512'
    width='1em'
    height='1em'
    {...props}
  >
    <path d='M365.42 136.945c-8.319-2.99-17.482 1.322-20.475 9.635l-51.013 141.704C256.145 284.81 224 314.519 224 352c0 35.346 28.654 64 64 64s64-28.654 64-64c0-21.976-11.081-41.36-27.956-52.884l51.011-141.696c2.992-8.315-1.322-17.482-9.635-20.475zM288 384c-17.645 0-32-14.355-32-32s14.355-32 32-32 32 14.355 32 32-14.355 32-32 32zm0-352C128.942 32 0 160.942 0 320c0 48.556 12.023 94.3 33.246 134.429A48.018 48.018 0 0 0 75.693 480h424.613a48.02 48.02 0 0 0 42.448-25.571C563.977 414.3 576 368.556 576 320c0-159.058-128.942-288-288-288zm226.466 407.469a15.983 15.983 0 0 1-14.16 8.531H75.693a15.983 15.983 0 0 1-14.16-8.531C42.68 403.819 32 363.175 32 320 32 178.677 146.473 64 288 64c141.323 0 256 114.472 256 256 0 40.599-9.481 81.553-29.534 119.469z' />
  </svg>
)

export default Tachometer

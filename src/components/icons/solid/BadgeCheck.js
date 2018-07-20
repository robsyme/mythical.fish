import React from 'react'

const BadgeCheck = props => (
  <svg
    fill='currentColor'
    viewBox='0 0 512 512'
    width='1em'
    height='1em'
    {...props}
  >
    <path d='M454.928 338.405c14.719 32.428 8.758 71.947-17.909 98.614-26.574 26.574-66.03 32.699-98.614 17.909C325.885 488.27 293.716 512 256 512s-69.885-23.73-82.405-57.072c-32.554 14.776-72.017 8.688-98.614-17.909-26.667-26.667-32.627-66.186-17.909-98.614C23.73 325.885 0 293.716 0 256s23.73-69.885 57.072-82.405c-14.719-32.428-8.758-71.947 17.909-98.614 26.668-26.667 66.187-32.627 98.614-17.909C186.115 23.73 218.284 0 256 0s69.885 23.73 82.405 57.072c32.428-14.719 71.946-8.759 98.614 17.909 26.667 26.667 32.627 66.186 17.909 98.614C488.27 186.115 512 218.284 512 256s-23.73 69.885-57.072 82.405zm-235.614 43.536l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L208 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.38 6.25 22.628.001z' />
  </svg>
)

export default BadgeCheck

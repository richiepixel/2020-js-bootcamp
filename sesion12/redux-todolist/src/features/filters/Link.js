import React from 'react'
import { setVisibilityFilter } from './filtersSlice'

const Link = ({ active, children, setVisibilityFilter, filter }) => {
  return (
    <button
      onClick={() => setVisibilityFilter(filter)}
      disabled={active}
      style={{
        marginLeft: '.3rem'
      }}
    >{children}</button>
  )
}

export default Link
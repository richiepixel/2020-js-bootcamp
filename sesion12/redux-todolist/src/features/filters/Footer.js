import React from 'react'
import { VisibilityFilters } from './filtersSlice'
import FilterLink from './FilterLink'

const Footer = () => {
	return (
		<>
			<FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
			<FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
			<FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
		</>
	)
}

export default Footer
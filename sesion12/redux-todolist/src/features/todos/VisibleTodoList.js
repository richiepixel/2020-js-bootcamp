import { connect } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'
import { toggleTodo } from '../todos/todosSlice'
import { VisibilityFilters } from '../filters/filtersSlice'
import TodoList from './TodoList'

const selectTodos = state => state.todos
const selectFilter = state => state.visibilityFilter

const selectVisibleTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }

)

const mapStateToProps = state => ({
  todos: selectVisibleTodos(state)
})

const mapDispatchToProps = { toggleTodo }

export default connect(
  mapStateToProps,
  mapDispatchToProps //Este es el que actualiza.
)(TodoList) //Se conecta el componenten TodoList con el store.
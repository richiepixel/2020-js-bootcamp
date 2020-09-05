import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos = [], toggleTodo }) => {
  return (
    <>
      <ul>
        {
          todos.map((todo) => {
            // return <TodoItem id={todo.id} text={todo.text} completed={todo.completed} />
            return <TodoItem {...todo}
              onClickItem={() => toggleTodo(todo.id)}
            />
          })
        }
      </ul>
    </>
  )
}

export default TodoList
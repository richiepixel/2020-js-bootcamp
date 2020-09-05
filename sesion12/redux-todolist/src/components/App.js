import React from 'react'
import './App.css'
import VisibleTodoList from '../features/todos/VisibleTodoList';

import AddTodo from '../features/todos/AddTodo';
import TodoList from '../features/todos/TodoList';
import Footer from '../features/filters/Footer';

function App() {
  return (
    <div className="App">
      <AddTodo />
      {/* <TodoList /> */}
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
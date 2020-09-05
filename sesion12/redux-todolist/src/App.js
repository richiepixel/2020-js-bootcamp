import React from 'react';
import './App.css';
import AddTodo from './features/todos/AddTodo'
import VisibleTodoList from './components/VisibleTodoList'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
     <AddTodo/>
     <VisibleTodoList/>
     <Footer/>
    </div>
  );
}

export default App;

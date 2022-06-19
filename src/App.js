import React from 'react';
import './App.css';
import TodoList from './TodoList';



function App() {
  return (
    <div className='todo-app'>
      <TodoList />
      <br />
      <br />
      <p>Coded by <a href="https://github.com/umeshchavda05">uc</a></p>
    </div>
  );
}

export default App;
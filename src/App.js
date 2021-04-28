import React from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>

          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <div className="App" >
      <h2>Todos</h2>
        <div className="todo-card">
          <Header />
          <TodoList />
          
        </div>
       
      </div>
    </div>
  )
}

export default App

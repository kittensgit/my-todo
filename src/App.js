import { useState } from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";


function App() {

  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const toggleTask = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? {...todo, complete: !todo.complete } : {...todo}
      )
    ])
  }

  return (
    <div className="App">
      <header>
        <h1>TODO LIST: {todos.length}</h1>
      </header>
      <TodoForm addTask={addTask} />
      {todos.map((todo) => {
        return <Todo
          todo={todo}
          key={todo.id}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      })}
    </div>
  )
}

export default App;
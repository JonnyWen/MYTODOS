import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

{/* Declarative programming: jsx determined how we want our final product to look like, without the interactivity elements
    This is where states come into play, function setNewItem allows us to change states, while newItem is immutable, because 
    in React we cannot simply redefine newItem to change the state variable, so we must utilize setNewItem. */}
export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  }) 
  // todos stored in a array, we can look through this array to render our each todo -> map
  // hooks are usually at top, with helper functions then jsx
  // hooks allow for persistent storage of data
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    }) 
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }
   
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

   // At the top level we can only ever return one element in this case it is "form" , we can use div or better a fragment to wrap all desired outputs
  return (
    <> 
    <NewTodoForm onSubmit={addTodo}/>
    <h1 className= "header">Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}

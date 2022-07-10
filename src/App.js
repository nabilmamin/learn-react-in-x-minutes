import React, { useState, useRef, useEffect } from 'react';
import TodoList from "./TodoList";
import uuid from 'react-uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'
function App() {
  const [todos, setTodos] = useState([]) //{ id: 1, name: 'Todo 1', complete: false}
  // object destructering above. useState comes in as an array, and our const is destructering it.
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])


  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') {return}
   
      
    
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuid(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  return (
    <> 
    {/* the above <> is called a fragment. allows us to put two or more jsx elements in the return of a function */}
    <TodoList todos = {todos} />
    <input ref={todoNameRef} type='text' />
    <button onClick={handleAddTodo}>Add ToDo</button>
    <button>Clear ToDo</button>
    <div>0 Left to do</div>
    </>
  )
}

export default App;

import React, { useState } from 'react';
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState(['todos 1', 'todos 2'])
  // object destructering above. useState comes in as an array, and our const is destructering it.
  return (
    <> 
    {/* the above <> is called a fragment. allows us to put two or more jsx elements in the return of a function */}
    <TodoList todos = {todos} />
    <input type='text' />
    <button>Add ToDo</button>
    <button>Clear ToDo</button>
    <div>0 Left to do</div>
    </>
  )
}

export default App;

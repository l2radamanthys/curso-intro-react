import React from "react";
import { AppUI } from "./AppUI";


const defautlTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar notas", completed: false },
  { text: "Revisar el codigo", completed: false },
  { text: "Lalalalala", completed: true },
];


function App() {
  const localStorageTodos = localStorage.getItem('TODO_V1');
  console.log(":", localStorageTodos)
  let parsedTodos;
  if (!!localStorageTodos) {
    parsedTodos = JSON.parse(localStorageTodos);
  } else {
    console.log("reset")
    localStorage.setItem('TODOS_V1', JSON.stringify(defautlTodos));
    parsedTodos = defautlTodos;
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState("");
  
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem("TODOS_V1", stringifiedTodos);
    setTodos(newTodos);
    console.log("::", newTodos)
  }; 

  const toggleTodo = (key) => {
    const newTodos = [...todos];
    const todoIdx = newTodos.findIndex(todo => todo.text === key); 
    if (todoIdx !== undefined) {
      newTodos[todoIdx].completed = !newTodos[todoIdx].completed; 
      saveTodos(newTodos);
    }
  };

  const deleteTodo = (key) => {
    const newTodos = [...todos];
    const todoIdx = newTodos.findIndex(todo => todo.text === key); 
    if (todoIdx !== undefined) {
      newTodos.splice(todoIdx, 1);
      saveTodos(newTodos);
    }
  };

  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;

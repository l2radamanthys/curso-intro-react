import React from 'react';
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";


function AppUI({ 
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    toggleTodo,
    deleteTodo
  }) {
  return (
    <React.Fragment>
    <TodoCounter 
      total={totalTodos}
      completed={completedTodos}
    />
    <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
    <TodoList>
      {searchedTodos.map(todo => (
        <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onToggle={() => toggleTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      ))}
    </TodoList>
    <CreateTodoButton />
  </React.Fragment>
  );
}

export { AppUI }; 
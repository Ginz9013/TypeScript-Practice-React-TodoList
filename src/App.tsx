import React, { useState } from "react";
import TodoList from "./components/TotoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(todos);

  const todoAddHandler = (text: string) => {
    setTodos((prev) => [...prev, { id: Math.random().toString(), text: text }]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;

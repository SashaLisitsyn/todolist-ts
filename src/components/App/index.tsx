import React, { useState } from 'react';

import { Header } from '../Header';
import { ToDoForm } from '../ToDoForm';
import { ToDoList } from '../ToDoList';

import { ITodo } from '../../interfaces/toDoInterfaces';

export const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmitForm = (value: string) => {
    const newTodo: ITodo = {
      value: value,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const removeTodo = (id: number) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  return (
    <>
      <Header />
      <ToDoForm submitForm={handleSubmitForm} />
      <ToDoList todos={todos} removeTodo={removeTodo} />
    </>
  );
};

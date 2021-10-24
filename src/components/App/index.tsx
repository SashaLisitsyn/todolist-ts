import React, { useState } from 'react';

import { Header } from '../Header';
import { ToDoForm } from '../ToDoForm';
import { ToDoList } from '../ToDoList';

import { IToDo } from '../../interfaces/toDoInterfaces';

export const App: React.FC = () => {
  const [toDos, setToDos] = useState<IToDo[]>([]);

  const handleSubmitForm = (value: string) => {
    const newToDo: IToDo = {
      value: value,
      id: Date.now(),
      completed: false,
    };
    setToDos((prev) => [newToDo, ...prev]);
  };

  const removeToDo = (id: number) => {
    setToDos([...toDos.filter((toDo) => toDo.id !== id)]);
  };

  return (
    <>
      <Header />
      <ToDoForm submitForm={handleSubmitForm} />
      <ToDoList toDos={toDos} removeToDo={removeToDo} />
    </>
  );
};

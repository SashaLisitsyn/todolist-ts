import { IToDo } from '../interfaces/toDoInterfaces';

import { toDoTypes } from '../types/toDoTypes';

export const createToDo = (toDo: IToDo) => {
  return {
    type: toDoTypes.CREATE_TODO,
    payload: toDo,
  };
};

export const removeToDo = (toDo: IToDo) => {
  return {
    type: toDoTypes.REMOVE_TODO,
    payload: toDo,
  };
};

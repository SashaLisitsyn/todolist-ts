import { toDoTypes } from '../types/toDoTypes';

export interface IToDos {
  toDos: any[];
}

export interface ICreateToDoAction {
  type: toDoTypes.CREATE_TODO;
  payload?: any;
}

export interface IRemoveToDoAction {
  type: toDoTypes.REMOVE_TODO;
  payload?: string;
}

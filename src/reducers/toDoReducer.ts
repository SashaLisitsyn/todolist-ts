import {
  IToDos,
  ICreateToDoAction,
  IRemoveToDoAction,
} from '../interfaces/toDoReduxInterfaces';

import { toDoTypes } from '../types/toDoTypes';

const initialState: IToDos = {
  toDos: [],
};

type toDoAction = ICreateToDoAction | IRemoveToDoAction;

export const toDoReducer = (
  state = initialState,
  action: toDoAction
): IToDos | undefined => {
  switch (action.type) {
    case toDoTypes.CREATE_TODO:
      return {
        ...state,
        toDos: state.toDos.concat([action.payload]),
      };
    case toDoTypes.REMOVE_TODO:
      const id = action.payload;
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== id),
      };
    default:
      return state;
  }
};

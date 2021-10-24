import { combineReducers } from 'redux';

import { toDoReducer } from './toDoReducer';

export const rootReducer = combineReducers({
  toDos: toDoReducer,
});

export type rootState = ReturnType<typeof rootReducer>;

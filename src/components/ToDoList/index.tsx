import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import { ToDoItem } from '../ToDoItem';

import { ITodo } from '../../interfaces/toDoInterfaces';

const useStyles = makeStyles(() =>
  createStyles({
    toDoList: {
      width: '100%',
      paddingTop: '2rem',
    },
  })
);

type ToDoListProps = {
  todos: ITodo[];
  removeTodo(id: number): void;
};

export const ToDoList: React.FC<ToDoListProps> = (props) => {
  const { todos, removeTodo } = props;

  const classes = useStyles();

  return (
    <div className={classes.toDoList}>
      {todos.map((todo) => {
        return <ToDoItem key={todo.id} todo={todo} removeTodo={removeTodo} />;
      })}
    </div>
  );
};

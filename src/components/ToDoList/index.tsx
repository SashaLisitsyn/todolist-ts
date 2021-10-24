import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import { ToDoItem } from '../ToDoItem';

import { IToDo } from '../../interfaces/toDoInterfaces';

const useStyles = makeStyles(() =>
  createStyles({
    toDoList: {
      width: '100%',
      paddingTop: '2rem',
    },
  })
);

type ToDoListProps = {
  toDos: IToDo[];
  removeToDo(id: number): void;
};

export const ToDoList: React.FC<ToDoListProps> = (props) => {
  const { toDos, removeToDo } = props;

  const classes = useStyles();

  return (
    <div className={classes.toDoList}>
      {toDos.map((toDo) => {
        return <ToDoItem key={toDo.id} toDo={toDo} removeToDo={removeToDo} />;
      })}
    </div>
  );
};

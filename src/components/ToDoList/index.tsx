import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import { ToDoItem } from '../ToDoItem';

import { useTypedSelector } from '../../hooks/todoTypeSelector';

const useStyles = makeStyles(() =>
  createStyles({
    toDoList: {
      width: '100%',
      paddingTop: '2rem',
    },
  })
);

export const ToDoList: React.FC = () => {
  const classes = useStyles();

  const toDos = useTypedSelector((toDoList) => toDoList.toDos?.toDos);

  return (
    <div className={classes.toDoList}>
      {toDos?.map((toDo) => {
        return <ToDoItem key={toDo.id} toDo={toDo} />;
      })}
    </div>
  );
};

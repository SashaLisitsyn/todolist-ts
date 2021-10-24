import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { ITodo } from '../../interfaces/toDoInterfaces';

const useStyles = makeStyles(() =>
  createStyles({
    toDoList: {
      width: '100%',
      paddingTop: '2rem',
    },
    todo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    todo__input: {
      type: 'checkbox',
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
        const handleRemoveTodo = () => {
          removeTodo(todo.id);
        };

        return (
          <Accordion key={todo.id}>
            <AccordionDetails className={classes.todo}>
              <Typography className={classes.todo__input}>
                {todo.value}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleRemoveTodo}
              >
                Удалить
              </Button>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() =>
  createStyles({
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

type ToDoItemProps = {
  todo: any;
  removeTodo(id: number): void;
};

export const ToDoItem: React.FC<ToDoItemProps> = (props) => {
  const { todo, removeTodo } = props;

  const classes = useStyles();

  const handleRemoveTodo = () => {
    removeTodo(todo.id);
  };

  return (
    <Accordion>
      <AccordionDetails className={classes.todo}>
        <Typography className={classes.todo__input}>{todo.value}</Typography>
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
};

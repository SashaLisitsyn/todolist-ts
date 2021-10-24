import React from 'react';

import { useDispatch } from 'react-redux';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { removeToDo } from '../../actions/toDoActions';

const useStyles = makeStyles(() =>
  createStyles({
    toDo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    toDo__input: {
      type: 'checkbox',
    },
  })
);

type ToDoItemProps = {
  toDo: any;
};

export const ToDoItem: React.FC<ToDoItemProps> = ({ toDo }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleRemoveToDo = () => {
    dispatch(removeToDo(toDo.id));
  };

  return (
    <Accordion>
      <AccordionDetails className={classes.toDo}>
        <Typography className={classes.toDo__input}>{toDo.value}</Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleRemoveToDo}
        >
          Удалить
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};

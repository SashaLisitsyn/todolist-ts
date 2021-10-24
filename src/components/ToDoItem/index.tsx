import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
  removeToDo(id: number): void;
};

export const ToDoItem: React.FC<ToDoItemProps> = (props) => {
  const { toDo, removeToDo } = props;

  const classes = useStyles();

  const handleRemoveToDo = () => {
    removeToDo(toDo.id);
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

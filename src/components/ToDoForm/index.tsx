import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { IToDo } from '../../interfaces/toDoInterfaces';

import { createToDo } from '../../actions/toDoActions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toDoForm: {
      '& > *': {
        margin: theme.spacing(1),
        width: '99%',
        marginTop: '4.5rem',
      },
    },
  })
);

export const ToDoForm: React.FC = () => {
  const classes = useStyles();

  const [value, setValue] = useState<string>('');

  const dispatch = useDispatch();

  const handleSubmit = (event: React.SyntheticEvent, value: string) => {
    event.preventDefault();
    const newToDo: IToDo = {
      value: value,
      id: Date.now(),
      completed: false,
    };
    dispatch(createToDo(newToDo));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSubmit(event, value);
      setValue('');
    }
  };

  return (
    <form className={classes.toDoForm} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="Что нужно сделать?"
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </form>
  );
};

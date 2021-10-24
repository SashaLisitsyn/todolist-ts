import React, { useState } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

interface ToDoFormProps {
  submitForm(value: string): void;
}

export const ToDoForm: React.FC<ToDoFormProps> = (props) => {
  const { submitForm } = props;

  const classes = useStyles();

  const [value, setValue] = useState<string>('');

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    submitForm(value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
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

import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() =>
  createStyles({
    header: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

export const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <Typography variant="h6">Список дел</Typography>
      </Toolbar>
    </AppBar>
  );
};

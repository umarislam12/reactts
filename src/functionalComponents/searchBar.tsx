import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
export default function SearchBar() {
  // Declare a new state variable, which we'll call "count"
  const classes = useStyles();
  return (
    <div>
    <form className={classes.root} noValidate autoComplete="off">
  <TextField id="standard-basic" label="Search through me" />
  </form>
    </div>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    left: '43%',
    position: 'absolute',
    top: '44vh',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Spinner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box>
        <CircularProgress color="primary" />
      </Box>
    </div>
  );
}

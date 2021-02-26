import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',

    '& > *': {
      margin: theme.spacing(0.5),
      border: '1px solid #DDDDDD',
      backgroundColor: '#F9F9F9',
    },
  },
}));

export default function Chips({ title }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Chip label={title} />
    </div>
  );
}

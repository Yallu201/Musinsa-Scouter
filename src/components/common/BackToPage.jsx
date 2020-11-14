import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  toBack: {
    zIndex: 2,
    position: 'fixed',
    bottom: '3vh',
    backgroundColor: 'black',
    color: 'white',
    right: '3%',
    transition: '0.5s',
  },
}));
const BackToPage = ({ history, showBelow }) => {
  const classes = useStyles();
  const handleClick = () => {
    history.goBack();
  };
  return (
    <IconButton onClick={handleClick} className={classes.toBack}>
      <ChevronLeftIcon />
    </IconButton>
  );
};

export default BackToPage;

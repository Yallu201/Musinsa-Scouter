import React from 'react';
import { Box, Link, makeStyles } from '@material-ui/core';
import GithubIcon from '@material-ui/icons/GitHub';
const useStyles = makeStyles(theme => ({
  root: {
    // width: '100%',
    padding: '2rem',
    margin: '0',
    background: 'black',
    color: 'whtie',
    textAlign: 'center',
  },
  button: {
    textAlign: 'center',
    color: 'white',
    fontSize: '2rem',
  },
}));
function footer({ props }) {
  const classes = new useStyles();
  return (
    <Box className={classes.root}>
      <Link href="https://github.com/Yallu201" rel="noopener noreferrer" target="_blank">
        <GithubIcon className={classes.button} />
      </Link>
    </Box>
  );
}

export default footer;

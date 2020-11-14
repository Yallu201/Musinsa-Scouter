import { AppBar, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  header: {
    margin: '0 0 1rem 0',
    background: 'black',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
  },
  changeTheme: {
    color: 'white',
    borderColor: 'white',
    width: '6rem',
  },
}));

function Header({ isDark, onToggle }) {
  const classes = useStyles(isDark);
  return (
    <AppBar position="static" color="transparent" className={classes.header}>
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Typography variant="h5" color="inherit">
            <Link to="/" className={classes.link}>
              MUSINSA SCOUTER
            </Link>
          </Typography>
          {/* <Button
            className={classes.changeTheme}
            variant="outlined"
            size="small"
            onClick={() => onToggle()}
          >
            {isDark ? '밝은 테마' : '어두운 테마'}
          </Button> */}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
export default Header;

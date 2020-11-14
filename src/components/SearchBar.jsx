import React from 'react';
import { Grid, makeStyles, InputBase, Divider, IconButton, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '1rem 0',
    padding: '0px 2px',
    display: 'flex',
    alignItems: 'center',
    width: '300px',
    height: '2.5rem',
  },
  input: {
    padding: 0,
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: '0.9rem',
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function SearchBar({ input, onChangeInput, onSearch }) {
  const classes = useStyles();
  const onSubmit = e => {
    e.preventDefault();
    onSearch(input);
  };
  const onChange = e => {
    onChangeInput(e.target.value);
  };
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item xs={12}>
        <Paper component="form" className={classes.root} onSubmit={onSubmit}>
          <InputBase
            autoFocus={true}
            className={classes.input}
            placeholder="상품명, 브랜드명"
            inputProps={{ 'aria-label': 'search google maps' }}
            onChange={onChange}
            value={input}
          />
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default SearchBar;

import React, { useState } from 'react';
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
  ulBrand: {
    borderRadius: '0.25rem',
    boxSizing: 'border-box',
    position: 'absolute',
    zIndex: 10,
    background: 'white',
    width: '300px',
    listStyle: 'none',
    padding: '0.5rem',
    margin: 0,
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  liBrand: {
    borderRadius: '0.25rem',
    padding: '0.5rem 0 0.5rem 0.25rem',
    background: '#f3f3f3',
    marginBottom: '0.25rem',
    width: '100%',
    cursor: 'pointer',
  },
}));

function SearchBar({ input, onChangeInput, onSearch, brands }) {
  const [showBrands, setShowBrands] = useState(false);
  const classes = useStyles();
  const onSubmit = e => {
    setShowBrands(false);
    e.preventDefault();
    onSearch(input);
  };
  const onChange = e => {
    setShowBrands(true);
    onChangeInput(e.target.value);
  };
  const onClick = e => {
    onSearch(e.target.innerText);
    onChangeInput(e.target.innerText);
    setShowBrands(false);
  };
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item xs={12}>
        <Paper component="form" className={classes.root} onSubmit={onSubmit}>
          <InputBase
            autoComplete="false"
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
        {showBrands && input && brands.length > 0 && (
          <ul className={classes.ulBrand}>
            <div style={{ marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '1rem' }}>
              브랜드
            </div>
            {brands.slice(0, 7).map(({ brand, brandEN }) => (
              <li onClick={onClick} key={`brand_${brandEN}`} className={classes.liBrand}>
                {brand}
              </li>
            ))}
          </ul>
        )}
      </Grid>
    </Grid>
  );
}

export default SearchBar;

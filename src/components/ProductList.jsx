import { Button, Container, makeStyles, Typography } from '@material-ui/core';
import React, { Fragment, memo, useEffect, useState } from 'react';
import ProductItem from './ProductItem';

const useStyles = makeStyles(theme => ({
  loading: {
    minHeight: '70vh',
    textAlign: 'center',
    padding: '1rem',
  },
  root: {
    paddingTop: '1rem',
    margin: '0px auto',
  },
  infoText1: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '1rem',
  },
  infoText2: {
    textAlign: 'center',
    fontSize: '1rem',
  },
  infoText3: {
    textAlign: 'center',
    margin: '1.5rem 0',
    fontSize: '1rem',
  },
  productList: {
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  addProduct: {
    color: 'inherit',
    margin: '0 0 2rem 0',
    width: '100%',
    padding: '1rem',
  },
}));
function ProductList({ date, list, count, isLoading, showMore }) {
  const [scrollPos, setScrollPos] = useState(0);
  const classes = useStyles();
  const onClick = () => {
    setScrollPos(window.pageYOffset);
    showMore();
  };

  useEffect(() => {
    window.scroll(0, scrollPos);
  }, [scrollPos]);
  return (
    <Container className={classes.root}>
      {isLoading && <Typography className={classes.loading}> 로딩중 ... </Typography>}
      {!isLoading && !list && (
        <Typography className={classes.loading}> 랭킹이 존재하지 않습니다. </Typography>
      )}
      {!isLoading && list && (
        <Fragment>
          <Typography className={classes.infoText1}>무신사 랭킹 상위 1000위 </Typography>
          <Typography className={classes.infoText2}>
            {`${date.slice(0, 4)}.${date.slice(4, 6)}.${date.slice(6, 8)} 기준`}
          </Typography>
          <Typography className={classes.infoText3}>검색결과 {list.length}개</Typography>
          <Container component="ul" className={classes.productList}>
            {list.slice(0, count).map((item, index) => (
              <ProductItem key={`${item.rank}${item.name}`} {...item} />
            ))}
          </Container>
        </Fragment>
      )}
      {!isLoading && list && list.length > count && (
        <Button className={classes.addProduct} onClick={onClick}>
          + 더보기
        </Button>
      )}
    </Container>
  );
}

export default memo(ProductList);

import React, { Fragment, useEffect, useState } from 'react';
import { createChart } from 'lib/chart';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Link, Typography, Slider } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
const useStyles = makeStyles(theme => ({
  loading: {
    minHeight: '70vh',
    textAlign: 'center',
    padding: '1rem',
  },
  brand: {
    marginBottom: '0.25rem',
  },
  name: {
    fontSize: '0.75rem',
    margin: '0 0 2rem 0',
  },
  date: {
    color: '#888888',
    fontSize: '0.75rem',
    marginBottom: '0.5rem',
  },
  item: {
    margin: '0',
  },
  item1: {
    margin: '0 0 1rem 0',
  },
  item2: {
    margin: '0 0 2rem 0',
  },
  item3: {
    margin: '0 0 3rem 0',
  },
  graph: {
    margin: '0 auto 1.8rem auto',
    maxWidth: '500px',
  },
  img: {
    maxWidth: '360px',
  },
  button: {
    color: 'inherit',
    borderColor: 'inherit',
  },
}));
const ProductInfo = ({ isDark, serialNo, product }) => {
  const { brand, img, name } = product;
  const date = Object.keys(product.calendar).slice(-1)[0];
  const [size, setSize] = useState(7);
  const [chartType, setChartType] = useState('price');
  const classes = useStyles();
  useEffect(() => {
    const ctx = document.getElementById('myChart');
    const pChart = createChart({ chartType, isDark, ctx, product, size });
    return () => pChart.destroy();
  }, [chartType, isDark, size, product]);
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item className={classes.item1}>
        <img
          src={img.substring(0, img.length - 7).concat('500.jpg')}
          alt="상품이미지"
          className={classes.img}
        />
      </Grid>
      <Grid item xs={12} md={12} lg={12} className={classes.brand}>
        <strong>{brand}</strong>
      </Grid>
      <Grid item xs={12} md={12} lg={12} className={classes.name}>
        <Link
          href={`https://store.musinsa.com/app/product/detail/${serialNo}`}
          // onClick={e=>e.preventDefault()}
          rel="noopener noreferrer"
          target="_blank"
        >
          {name}
        </Link>
      </Grid>
      <Grid item xs={12} md={12} lg={12} className={classes.date}>
        {`${date.slice(0, 4)}.${date.slice(4, 6)}.${date.slice(6, 8)} 기준`}
      </Grid>
      <Grid item xs={12} md={12} lg={12} className={classes.item1}>
        <ToggleButtonGroup
          size="small"
          value={chartType}
          exclusive
          onChange={(e, v) => setChartType(v ? v : 'price')}
          aria-label="chart type"
        >
          <ToggleButton value="ranking" aria-label="ranking type chart">
            {`${Object.values(product.calendar).slice(-1)[0].rank}위`}
          </ToggleButton>
          <ToggleButton value="price" aria-label="price type chart">
            {`${Intl.NumberFormat().format(Object.values(product.calendar).slice(-1)[0].price)}원`}
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        component="canvas"
        id="myChart"
        className={classes.graph}
      ></Grid>
      <Grid item xs={12} md={12} lg={12} className={classes.item3}>
        <ToggleButtonGroup
          size="small"
          value={size}
          exclusive
          onChange={(e, v) => setSize(v ? v : 7)}
          aria-label="select days chart to show"
        >
          <ToggleButton value={7} aria-label="show just 7 days">
            7일
          </ToggleButton>
          <ToggleButton value={14} aria-label="show just 14 days">
            14일
          </ToggleButton>
          <ToggleButton value={30} aria-label="show just 30 days">
            30일
          </ToggleButton>
          <ToggleButton
            value={Object.keys(product.calendar).length}
            aria-label="show just whole days"
          >
            전체 기간
          </ToggleButton>
        </ToggleButtonGroup>
        <Slider
          value={size}
          onChange={(e, v) => setSize(v)}
          valueLabelDisplay="auto"
          min={Object.keys(product.calendar).length > 7 ? 7 : 1}
          max={Object.keys(product.calendar).length}
          aria-labelledby="continuous-slider"
          marks={[
            {
              value: Object.keys(product.calendar).length,
              label: '전체 기간',
            },
          ]}
        />
      </Grid>
    </Grid>
  );
};
const ProductDetail = ({ isDark, serialNo, product, isLoading }) => {
  const classes = useStyles();
  return (
    <Fragment>
      {isLoading && <Typography className={classes.loading}> 로딩중 ... </Typography>}
      {!isLoading && !product && (
        <Typography className={classes.loading}> 상품이 없습니다. </Typography>
      )}
      {!isLoading && product && (
        <ProductInfo isDark={isDark} serialNo={serialNo} product={product} />
      )}
    </Fragment>
  );
};

export default ProductDetail;

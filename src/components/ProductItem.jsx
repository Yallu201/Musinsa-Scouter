import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { memo } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '0 1rem 1rem 1rem',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  rank: {
    padding: '2px 10px',
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  brand: {
    fontWeight: 'bold',
    marginBottom: 0,
  },
  name: {
    marginBottom: '12px',
  },
  media: {
    height: 140,
  },
  cardContent: {
    paddingBottom: '16px !important',
  },
});
function ProductItem({ children, rank, brand, name, img, price, serialNo }) {
  const classes = useStyles();
  const name_ = name.length > 24 ? name.substring(0, 23).concat('...') : name;
  return (
    <Card component="li" className={classes.root}>
      {!!children && children}
      <CardActionArea>
        <Link to={`/detail/${serialNo}`} className={classes.link}>
          <Typography className={classes.rank}>{rank}</Typography>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="160"
            image={img.substring(0, img.length - 7).concat('500.jpg')}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="subtitle1" className={classes.brand}>
              {brand}
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="h5" className={classes.name}>
              {name_}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {Intl.NumberFormat().format(price)}원
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}

export default memo(ProductItem);

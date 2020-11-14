import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductList from 'components/ProductList';
import { getRanking, showMore } from 'modules/ranking';
import today, { yesterday } from 'lib/date';

const ProductListContainer = ({ date, list, count, isLoading, getRanking, showMore }) => {
  useEffect(() => {
    const fn = async () => {
      try {
        // init origin product list
        await getRanking(today());
      } catch (e) {
        await getRanking(yesterday());
      }
    };
    fn();
  }, [getRanking]);
  return (
    <ProductList date={date} list={list} count={count} isLoading={isLoading} showMore={showMore} />
  );
};

const mapStateToProps = ({ loading, ranking: { date, list, count } }) => ({
  date,
  list,
  count,
  isLoading: loading['ranking/GET_RANKING'],
});

const mapDispatchToProps = { getRanking, showMore };
export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);

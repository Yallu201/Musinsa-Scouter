import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductDetail from 'components/ProductDetail';
import { getProduct } from 'modules/product';

const ProductDetailContainer = ({ isDark, serialNo, product, isLoading, getProduct }) => {
  useEffect(() => {
    const fn = async () => {
      try {
        // init origin product list
        await getProduct(serialNo);
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [serialNo, getProduct]);

  return (
    <ProductDetail isDark={isDark} serialNo={serialNo} product={product} isLoading={isLoading} />
  );
};

const mapStateToProps = ({ theme, product, loading }) => ({
  isDark: theme.isDark,
  product,
  isLoading: loading['ranking/GET_PRODUCT'],
});

const mapDispatchToProps = { getProduct };
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer);

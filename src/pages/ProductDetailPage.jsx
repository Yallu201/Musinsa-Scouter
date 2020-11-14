import React, { Fragment } from 'react';
import { ProductDetailContainer, HeaderContainer } from 'containers';
import BackToPage from 'components/common/BackToPage';

const ProductDetailPage = ({ history, match }) => {
  return (
    <Fragment>
      <HeaderContainer />
      <ProductDetailContainer serialNo={match.params.serialNo} />
      <BackToPage history={history} />
    </Fragment>
  );
};

export default ProductDetailPage;

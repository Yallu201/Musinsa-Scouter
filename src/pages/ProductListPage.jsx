import React, { Fragment } from 'react';
import { ProductListContainer, SearchBarContainer, HeaderContainer } from 'containers';
import ScrollTop from 'components/common/ScrollTop';

const ProductListPage = () => {
  return (
    <Fragment>
      <HeaderContainer />
      <SearchBarContainer />
      <ProductListContainer />
      <ScrollTop showBelow={200} />
    </Fragment>
  );
};

export default ProductListPage;

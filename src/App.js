import React from 'react';
import { ProductListPage, ProductDetailPage } from 'pages';
import { ThemeContainer } from 'containers';
import { Route } from 'react-router-dom';
import Footer from 'components/common/footer';

function App() {
  return (
    <ThemeContainer>
      <Route path="/" exact component={ProductListPage} />
      <Route path="/detail/:serialNo" component={ProductDetailPage} />
      <Footer />
    </ThemeContainer>
  );
}

export default App;

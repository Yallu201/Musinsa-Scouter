import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SearchBar from 'components/SearchBar';
import { changeInput, search } from 'modules/ranking';
import { getBrands } from 'modules/brands';

const SearchBarContainer = ({ input, brands, changeInput, getBrands, search }) => {
  useEffect(() => {
    const fn = async () => {
      try {
        // init origin brand list
        await getBrands();
      } catch (e) {
        console.error(e);
      }
    };
    fn();
  }, [getBrands]);
  const list = brands
    ? input
      ? Object.values(brands)
          .filter(({ brand }) => brand.includes(input))
          .sort((b1, b2) => b1.brand.indexOf(input) - b2.brand.indexOf(input))
      : Object.values(brands)
    : [];
  return <SearchBar input={input} brands={list} onChangeInput={changeInput} onSearch={search} />;
};

const mapStateToProps = ({ ranking, brands: { origin } }) => ({
  input: ranking.input,
  brands: origin,
});
const mapDispatchToProps = { changeInput, getBrands, search };
export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);

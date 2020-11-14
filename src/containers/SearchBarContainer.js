import React from 'react';
import { connect } from 'react-redux';
import SearchBar from 'components/SearchBar';
import { changeInput, search } from 'modules/ranking';

const SearchBarContainer = ({ input, changeInput, search }) => {
  return <SearchBar input={input} onChangeInput={changeInput} onSearch={search} />;
};
const mapStateToProps = ({ ranking }) => ({
  input: ranking.input,
});
const mapDispatchToProps = { changeInput, search };
export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);

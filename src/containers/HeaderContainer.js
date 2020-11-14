import React from 'react';
import { connect } from 'react-redux';
import { toggle } from 'modules/theme';
import { Header } from 'components';

const HeaderContainer = ({ isDark, toggle }) => {
  return <Header isDark={isDark} onToggle={toggle} />;
};

const mapStateToProps = ({ theme }) => ({ isDark: theme.isDark });
const mapDispatchToProps = { toggle };

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

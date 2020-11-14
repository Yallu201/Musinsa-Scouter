import React from 'react';
import { connect } from 'react-redux';
import Theme from 'components/Theme';
import { toggle } from 'modules/theme';
const ThemeContainer = ({ isDark, children, toggle }) => {
  return <Theme isDark={isDark} children={children} onToggle={toggle} />;
};
const mapStateToProps = ({ theme }) => ({ isDark: theme.isDark });
const mapDispatchToProps = { toggle };
export default connect(mapStateToProps, mapDispatchToProps)(ThemeContainer);

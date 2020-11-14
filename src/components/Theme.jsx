import React from 'react';
import 'scss/main.scss';
import classNames from 'classnames';
const Theme = ({ isDark, children, onToggle }) => {
  return (
    <div className={classNames('theme', { dark: isDark })}>{children.map(child => child)}</div>
  );
};

export default Theme;

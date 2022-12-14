import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string,
  text: string,
};

export const PageNavLink: React.FC<Props> = ({ to, text }) => {
  return (
    <NavLink
      className={({ isActive }) => (
        classNames('header__link uppercase',
          { 'header__link--active': isActive })
      )}
      to={to}
    >
      {text}
    </NavLink>
  );
};

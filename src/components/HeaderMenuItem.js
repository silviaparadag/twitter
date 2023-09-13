import '../styles/layout/Header.scss';

import { NavLink } from 'react-router-dom';

const HeaderMenuItem = (props) => {
  return (
    <>
      <li
        key={props.liClassName}
        className={`menu__item menu__item--${props.liClassName}`}
      >
        <NavLink className="menu__link" to={props.href} title={props.title} end>
          <span className="text">{props.text}</span>
        </NavLink>
      </li>
    </>
  );
};

export default HeaderMenuItem;

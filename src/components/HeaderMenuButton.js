import '../styles/layout/Header.scss';

const HeaderMenuBtn = (props) => {
  const handleClick = () => {
    props.handleToggleComposeBtns();
  };
  return (
    <li className={`menu__item menu__item--${props.liClassName}`}>
      <button
        type="button"
        className="menu__link"
        title={props.title}
        onClick={handleClick}
      >
        <span className="text">{props.text}</span>
      </button>
    </li>
  );
};

export default HeaderMenuBtn;

import '../styles/layout/Header.scss';
// import logo from '../images/faviconSP.png';

const Header = ({ handleToggleComposeBtns }) => {
  return (
    <header className="header">
      <nav className="menu">
        <ul className="menu__items">
          <li className="menu__item menu__item--twitter">
            <a className="menu__link" href=".#" title="Ir">
              <span className="text">Home</span>
            </a>
          </li>

          <li className="menu__item menu__item--search">
            <a className="menu__link" href=".#" title="Search">
              <span className="text">Explore</span>
            </a>
          </li>

          <li className="menu__item menu__item--profile">
            <a className="menu__link" href=".#" title="Perfil">
              <span className="text">Profile</span>
            </a>
          </li>

          <li className="menu__item menu__item--tweet">
            <button
              type="button"
              className="menu__link"
              title="Post"
              onClick={handleToggleComposeBtns}
            >
              <span className="text">Post</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

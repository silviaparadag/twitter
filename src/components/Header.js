import '../styles/layout/Header.scss';
import logo from '../images/faviconSP.png';

const Header = () => {
  return (
    <header className="header">
      {/* <h1 className="header__title">Ahoy!</h1>
      <h3 className="header__subtitle">Open console</h3>
      <a
        href="https://github.com/silviaparadag"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="header__logo"
          src={logo}
          alt="The initials of Silvia Parada's name"
        />
      </a> */}
      <nav className="menu">
        <ul className="menu__items">
          <li className="menu__item menu__item--twitter">
            <a className="menu__link" href=".#" title="Ir">
              <span className="text">Ir al inicio</span>
            </a>
          </li>

          <li className="menu__item menu__item--search">
            <a className="menu__link" href=".#" title="Buscar">
              <span className="text">Buscar</span>
            </a>
          </li>

          <li className="menu__item menu__item--profile">
            <a className="menu__link" href=".#" title="Perfil">
              <span className="text">Perfil</span>
            </a>
          </li>

          <li className="menu__item menu__item--tweet">
            <a className="menu__link" href=".#" title="Twittear">
              <span className="text">Postear</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

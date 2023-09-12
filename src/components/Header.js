import '../styles/layout/Header.scss';
import logo from '../images/faviconSP.png';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Ahoy!</h1>
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
      </a>
    </header>
  );
};

export default Header;

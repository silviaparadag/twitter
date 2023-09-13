import '../styles/layout/Header.scss';
import HeaderMenuItem from './HeaderMenuItem';
import HeaderMenuBtn from './HeaderMenuButton';

const Header = ({ handleToggleComposeBtns }) => {
  return (
    <header className="header">
      <nav className="menu">
        <ul className="menu__items">
          <HeaderMenuItem
            liClassName="twitter"
            text="Home"
            href="/home"
            title="Home"
          />
          <HeaderMenuItem
            liClassName="search"
            text="Explore"
            href="/search"
            title="Search"
          />
          <HeaderMenuItem
            liClassName="profile"
            text="Profile"
            href="/Profile"
            title="Profile"
          />
          <HeaderMenuBtn
            liClassName="tweet"
            text="Post"
            title="Post"
            handleToggleComposeBtns={handleToggleComposeBtns}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Header;

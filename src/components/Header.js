import '../styles/layout/Header.scss';
import HeaderMenuItem from './HeaderMenuItem';
import HeaderMenuBtn from './HeaderMenuButton';

const Header = ({ handleToggleComposeBtns, uuidHeader }) => {
  return (
    <header className="header">
      <nav className="menu">
        <ul className="menu__items">
          <HeaderMenuItem
            uuidHeader={uuidHeader}
            liClassName="twitter"
            text="Home"
            href="/"
            title="Home"
          />
          <HeaderMenuItem
            uuidHeader={uuidHeader}
            liClassName="home"
            text="Home"
            href="/"
            title="Home"
          />
          <HeaderMenuItem
            uuidHeader={uuidHeader}
            liClassName="search"
            text="Explore"
            href="/search"
            title="Search"
          />
          <HeaderMenuItem
            uuidHeader={uuidHeader}
            liClassName="profile"
            text="Profile"
            href="/profile"
            title="Profile"
          />
          <HeaderMenuBtn
            uuidHeader={uuidHeader}
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

import '../styles/layout/Main.scss';
import spBanner from '../images/xures.jpg';
import spLogo from '../images/sp.png';

const Main = () => {
  return (
    <main className="main">
      <section className="main__header">
        <header>
          <h1 className="header__title">
            <span className="header__account">Silvia Parada</span>
            <span className="header__tweets">6.762 Posts</span>
          </h1>

          <img src={spBanner} alt="Banner de Adalab" />

          <div className="header__content">
            <div className="header__profile-image">
              <img src={spLogo} alt="Silvia diving pic" />
            </div>

            <div className="header__actions">
              <button className="header__follow-btn">Following</button>
            </div>

            <div className="header__account-info">
              <span className="header__acount-title">Silvia Parada</span>
              <span className="header__acount-username">@silviaparada</span>
              <span className="header__acount-follow">Followed</span>
            </div>

            <h2 className="header__account-description">
              👩‍💻 I'm Silvia, architect in a process of change and recycling{' '}
              <br />
              💬 Ask me about design & restaurants & specitalty coffee <br />
              📌 World citizen
              <br />
              🚀 Open to work
            </h2>

            <div className="header__account-data">
              <span className="header__account-region">A Coruña, Galicia</span>
              <a
                className="header__account-link"
                href="https://github.com/silviaparadag"
              >
                github.com/silviaparadag
              </a>
              <span className="header__account-date">Joined November 2008</span>
            </div>

            <div className="header__followers-info">
              <span className="header__following">
                <span className="header__followers-number">1.908</span>{' '}
                Following
              </span>
              <span className="header__followers">
                <span className="header__followers-number">5.601</span>{' '}
                Followers
              </span>
            </div>
          </div>
        </header>
      </section>
    </main>
  );
};

export default Main;

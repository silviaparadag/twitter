import '../styles/layout/Main.scss';
import spBanner from '../images/xures.jpg';
import spProfileImg from '../images/sp.png';
import spLogo from '../images/faviconSP.png';

const Main = () => {
  const renderComposeModal = () => {
    return (
      <div className="compose__modal-overlay">
        <div className="compose__modal-wrapper">
          <div className="compose__modal-header">
            <button className="compose__modal-close-btn">Cerrar</button>
          </div>
          <div className="compose__modal-content">
            <img
              className="compose__profile-logo"
              src={spLogo}
              alt="Logo de Adalab"
            />
            <textarea
              className="compose__profile-textarea"
              placeholder="¿Qué está pasando?"
            />
          </div>
          <div className="compose__modal-footer">
            <button className="compose__modal-tweet-btn" disabled>
              Twittear
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="main">
      <section className="mainheader">
        <header>
          <h1 className="mainheader__title">
            <span className="mainheader__account">Silvia Parada</span>
            <span className="mainheader__tweets">6.762 Posts</span>
          </h1>

          <img src={spBanner} alt="Banner de Adalab" />

          <div className="mainheader__content">
            <div className="mainheader__profile-image">
              <img src={spProfileImg} alt="Silvia diving pic" />
            </div>

            <div className="mainheader__actions">
              <button className="mainheader__follow-btn">Following</button>
            </div>

            <div className="mainheader__account-info">
              <span className="mainheader__acount-title">Silvia Parada</span>
              <span className="mainheader__acount-username">@silviaparada</span>
              <span className="mainheader__acount-follow">Followed</span>
            </div>

            <h2 className="mainheader__account-description">
              👩‍💻 I'm Silvia, architect in a process of change and recycling{' '}
              <br />
              💬 Ask me about design & restaurants & specitalty coffee <br />
              📌 World citizen
              <br />
              🚀 Open to work
            </h2>

            <div className="mainheader__account-data">
              <span className="mainheader__account-region">
                A Coruña, Galicia
              </span>
              <a
                className="mainheader__account-link"
                href="https://github.com/silviaparadag"
              >
                github.com/silviaparadag
              </a>
              <span className="mainheader__account-date">
                Joined November 2008
              </span>
            </div>

            <div className="mainheader__followers-info">
              <span className="mainheader__following">
                <span className="mainheader__followers-number">1.908</span>{' '}
                Following
              </span>
              <span className="mainheader__followers">
                <span className="mainheader__followers-number">5.601</span>{' '}
                Followers
              </span>
            </div>
          </div>
        </header>
      </section>
      {renderComposeModal()}
      {/*  */}
    </main>
  );
};

export default Main;

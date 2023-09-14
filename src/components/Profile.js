import '../styles/layout/Main.scss';

const Profile = ({ profileInfo, uuidv4 }) => {
  return profileInfo.map((profile) => (
    <section key={uuidv4} className="mainheader">
      <header>
        <h1 className="mainheader__title">
          <span className="mainheader__account">{profile.user} </span>
          <span className="mainheader__tweets">{profile.tweets} posts</span>
        </h1>

        <img src={profile.banner} alt="Banner de Adalab" />

        <div className="mainheader__content">
          <div className="mainheader__profile-image">
            <img src={profile.avatar} alt="Silvia diving pic" />
          </div>

          <div className="mainheader__actions">
            <button className="mainheader__follow-btn">Following</button>
          </div>

          <div className="mainheader__account-info">
            <span className="mainheader__acount-title">{profile.user}</span>
            <span className="mainheader__acount-username">
              {profile.username}
            </span>
            <span className="mainheader__acount-follow">Followed</span>
          </div>

          <h2 className="mainheader__account-description">
            {profile.description}
          </h2>

          <div className="mainheader__account-data">
            <span className="mainheader__account-region">{profile.region}</span>
            <a
              className="mainheader__account-link"
              href="https://github.com/silviaparadag"
            >
              {profile.webLink}
            </a>
            <span className="mainheader__account-date">
              Joined {profile.date}
            </span>
          </div>

          <div className="mainheader__followers-info">
            <span className="mainheader__following">
              <span className="mainheader__followers-number">
                {profile.following}
              </span>{' '}
              Following
            </span>
            <span className="mainheader__followers">
              <span className="mainheader__followers-number">
                {profile.followers}
              </span>{' '}
              Followers
            </span>
          </div>
        </div>
      </header>
    </section>
  ));
};

export default Profile;

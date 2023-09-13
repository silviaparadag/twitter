// import { Link } from 'react-router-dom';
import '../styles/layout/PostDetail.scss';

const PostDetail = ({ getPostRoute }) => {
  const handleBackButton = () => {
    window.history.back();
  };

  return (
    <>
      <article className="tweet__wrapper">
        <img
          className="tweet__avatar"
          src={getPostRoute.avatar}
          alt={`Avatar of ${getPostRoute.user}`}
        />
        <div className="tweet__content">
          <p className="tweet__info">
            <span className="tweet__user">{getPostRoute.user}</span>
            <span className="tweet__username">@{getPostRoute.username}</span>
            <span className="tweet__date">{getPostRoute.date}</span>
          </p>
          <p className="tweet__text">{getPostRoute.text}</p>
          <ul className="tweet__actions">
            <li className="tweet__comments">{getPostRoute.comments}</li>
            <li className="tweet__retweets">{getPostRoute.retweets}</li>
            <li className="tweet__likes">{getPostRoute.likes}</li>
            <li className="tweet__share">
              <span className="tweet__share--text">Share</span>
            </li>
          </ul>
        </div>
      </article>
      {/* Navigate w/ history back */}
      <div className="tweet-detail__divBack">
        <button className="tweet-detail__back-btn" onClick={handleBackButton}>
          <span>Back</span>
        </button>
      </div>
      {/* <Link to="/">Back</Link> */}
    </>
  );
};
export default PostDetail;

import { Link } from 'react-router-dom';
//import { Fragment } from 'react';

const EachPost = ({ eachPost }) => {
  return (
    <li>
      <Link className="tweet__wrapper" to={`/post/` + eachPost.id}>
        <img
          className="tweet__avatar"
          src={eachPost.avatar}
          alt={`Avatar of ${eachPost.user}`}
        />
        <div className="tweet__content">
          <p className="tweet__info">
            <span className="tweet__user">{eachPost.user}</span>
            <span className="tweet__username">@{eachPost.username}</span>
            <span className="tweet__date">{eachPost.date}</span>
          </p>
          <p className="tweet__text">{eachPost.text}</p>
          <ul className="tweet__actions">
            <li key={eachPost.id + `a`} className="tweet__comments">
              {eachPost.comments}
            </li>
            <li key={eachPost.id + `b`} className="tweet__retweets">
              {eachPost.retweets}
            </li>
            <li key={eachPost.id + `z`} className="tweet__likes">
              {eachPost.likes}
            </li>
            <li key={eachPost.id + `9`} className="tweet__share">
              <span className="tweet__share--text">Share</span>
            </li>
          </ul>
        </div>
      </Link>
    </li>
  );
};
export default EachPost;

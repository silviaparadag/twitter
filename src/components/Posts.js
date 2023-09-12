import '../styles/layout/Posts.scss';
import posts from '../data/posts.json';

const Posts = () => {
  //   const htmlTweets = posts.map((tweet) => <li>holis</li>);
  const htmlTweets = posts.map((tweet) => (
    <li key={tweet.id}>
      <article className="tweet__wrapper">
        <img
          className="tweet__avatar"
          src={tweet.avatar}
          alt={`Avatar of ${tweet.user}`}
        />
        <div className="tweet__content">
          <p className="tweet__info">
            <span className="tweet__user">{tweet.user}</span>
            <span className="tweet__username">@{tweet.username}</span>
            <span className="tweet__date">{tweet.date}</span>
          </p>
          <p className="tweet__text">{tweet.text}</p>
          <ul className="tweet__actions">
            <li className="tweet__comments">{tweet.comments}</li>
            <li className="tweet__retweets">{tweet.retweets}</li>
            <li className="tweet__likes">{tweet.likes}</li>
            <li className="tweet__share">
              <span className="tweet__share--text">Share</span>
            </li>
          </ul>
        </div>
      </article>
    </li>
  ));
  //   return <ul>{htmlTweets}</ul>;
  return <ul>{htmlTweets}</ul>;
};

export default Posts;

/*
<ul>
      <li>
        <article className="tweet__wrapper">
          <img
            className="tweet__avatar"
            src="../assets/avatars/user-4.jpg"
            alt={`Avatar of`}
          />
          <div className="tweet__content">
            <p className="tweet__info">
              <span className="tweet__user">Lola</span>
              <span className="tweet__username">@lola</span>
              <span className="tweet__date">3 sep. 2021</span>
            </p>
            <p className="tweet__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur, soluta eaque. Obcaecati quo tempore labore aperiam
              beatae totam officia, et at! Odit, hic sapiente obcaecati
              assumenda impedit eveniet nam esse!
            </p>
            <ul className="tweet__actions">
              <li className="tweet__comments">1</li>
              <li className="tweet__retweets">3</li>
              <li className="tweet__likes">10</li>
              <li className="tweet__share">
                <span className="tweet__share--text">Share</span>
              </li>
            </ul>
          </div>
        </article>
      </li>
    </ul>*/

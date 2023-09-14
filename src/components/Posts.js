import '../styles/layout/Posts.scss';
import EachPost from './EachPost';

const Posts = ({ postsList }) => {
  const htmlTweets = postsList.map((eachPost) => {
    return <EachPost key={eachPost.id} eachPost={eachPost} />;
  });

  return <ul>{htmlTweets}</ul>;
};

export default Posts;

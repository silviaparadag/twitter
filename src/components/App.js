import '../styles/App.scss';
import '../styles/layout/Main.scss';

import Header from './Header';
import Home from './Home';
import Search from './Search';
import Profile from './Profile';
import ComposeModalWindow from './ComposeModalWindow';
import Posts from './Posts';
import PostDetail from './PostDetail';
import Loader from './Loader';
import Footer from './Footer';
import ls from '../services/localStorage';
import callToApi from '../services/api';

import { useEffect, useState } from 'react';
import { Route, Routes, matchPath, useLocation } from 'react-router-dom';

const App = () => {
  //state
  const [composeModal, setComposeModal] = useState(false);
  // Modal window must be closed when we run the app, therefore the state variable must be false.
  const [composeText, setComposeText] = useState('');
  //const [newPost, setNewPost] = useState('');

  const [postsList, setPostList] = useState(ls.get('posts', []));
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (ls.get('posts', null) === null) {
      setShowLoading(true);
      callToApi().then((data) => {
        console.log(data);
        setPostList(data);
        setShowLoading(false);
        ls.set('posts', data);
      });
    }
  }, []);

  //events
  const handleToggleComposeBtns = () => {
    console.log(`I've clicked a button`);
    setComposeModal(!composeModal);
  };
  const handleTextArea = (ev) => {
    console.log(`I've wrotten some text` + ev.target.value);
    setComposeText(ev.target.value);
  };

  const handleComposeSubmit = (ev) => {
    ev.preventDefault();
    postsList.unshift({
      id: '0as8pdsdf',
      avatar: '//silviaparadag.github.io/api-sp/twitter-v1/images/user-sp.jpg',
      user: 'Cristina Iglesias',
      username: 'Crisi',
      date: '12 sep 2023',
      text: composeText,
      comments: 0,
      retweets: 0,
      likes: 0,
    });
    setPostList([...postsList]);
    console.log(postsList);
    setComposeModal(false);
    setComposeText('');
  };

  const { pathname } = useLocation();
  const getPostRoute = () => {
    const routeData = matchPath('/post/:postId', pathname);
    if (routeData) {
      const postId = routeData?.params.postId;
      const postData = postsList.find((post) => post.id === postId);
      return postData || {};
    }
  };

  return (
    <>
      <div className="page">
        <Header handleToggleComposeBtns={handleToggleComposeBtns} />
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Posts postsList={postsList} />
                </>
              }
            ></Route>
            <Route
              path="/search"
              element={
                <>
                  <Search />
                  <Posts postsList={postsList} />
                </>
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <>
                  <Profile />
                  <Posts postsList={postsList} />
                </>
              }
            ></Route>
            <Route
              path="/post/:postId"
              element={
                <>
                  <PostDetail getPostRoute={getPostRoute()} />
                </>
              }
            ></Route>
          </Routes>
          <ComposeModalWindow
            handleToggleComposeBtns={handleToggleComposeBtns}
            composeModal={composeModal}
            composeText={composeText}
            handleComposeSubmit={handleComposeSubmit}
            handleTextArea={handleTextArea}
          />
          <Loader showLoading={showLoading} />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default App;

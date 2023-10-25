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
import dataApi from '../services/api';
import date from '../services/date';

import { v4 as uuidv4 } from 'uuid';

import { useEffect, useState } from 'react';
import { Route, Routes, matchPath, useLocation } from 'react-router-dom';

const App = () => {
  //state
  const [composeModal, setComposeModal] = useState(false);
  // Modal window must be closed when we run the app, therefore the state variable must be false.
  const [composeText, setComposeText] = useState('');
  const [postsList, setPostList] = useState(ls.get('posts', []));
  const [profileInfo, setProfileInfo] = useState(ls.get('profile', []));
  const [showLoading, setShowLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (ls.get('posts', null) === null) {
      setShowLoading(true);
      dataApi.getPostsFromApi().then((data) => {
        setPostList(data);
        setShowLoading(false);
        ls.set('posts', data);
      });
    }
  }, []);
  useEffect(() => {
    if (ls.get('profile', null) === null) {
      dataApi.getProfileFromApi().then((data) => {
        setProfileInfo(data);
        ls.set('profile', data);
      });
    }
  }, []);

  //events
  const handleToggleComposeBtns = () => {
    setComposeModal(!composeModal);
  };
  const handleTextArea = (ev) => {
    console.log(`I've wrotten some text` + ev.target.value);
    setComposeText(ev.target.value);
  };

  const handleComposeSubmit = (ev) => {
    ev.preventDefault();
    postsList.unshift({
      id: uuidv4(),
      avatar: '//silviaparadag.github.io/api-sp/twitter-v1/images/user-sp.jpg',
      user: 'Silvia Parada',
      username: 'Silvia',
      date: date.getCurrentDate(),
      text: composeText,
      comments: 0,
      retweets: 0,
      likes: 0,
    });
    setPostList([...postsList]);
    setComposeModal(false);
    setComposeText('');
  };

  const handleSearchByText = (searchText) => {
    setSearchText(searchText);
  };

  const filteredPosts = postsList.filter((post) => {
    return (
      post.text.toLowerCase().includes(searchText.toLowerCase()) ||
      post.user.toLowerCase().includes(searchText.toLowerCase()) ||
      post.username.toLowerCase().includes(searchText.toLowerCase())
    );
  });

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
        <Header
          handleToggleComposeBtns={handleToggleComposeBtns}
          uuidHeader={uuidv4()}
        />
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
                  <Search
                    searchText={searchText}
                    handleSearchByText={handleSearchByText}
                  />
                  <Posts postsList={filteredPosts} />
                </>
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <>
                  <Profile uuidv4={uuidv4()} profileInfo={profileInfo} />
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

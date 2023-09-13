import '../styles/App.scss';
import { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ls from '../services/localStorage';
import callToApi from '../services/api';

//import {Link, Route, Routes} from 'react-router-dom';

const App = () => {
  //state
  const [composeModal, setComposeModal] = useState(false);
  // Modal window must be closed when we run the app, therefore the state variable must be false.
  const [composeText, setComposeText] = useState('');
  //const [newPost, setNewPost] = useState('');

  const [postsList, setPostList] = useState(ls.get('posts', []));

  useEffect(() => {
    if (ls.get('posts', null) === null) {
      callToApi().then((data) => {
        console.log(data);
        setPostList(data);
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

  return (
    <>
      <div className="page">
        <Header handleToggleComposeBtns={handleToggleComposeBtns} />
        <Main
          composeModal={composeModal}
          composeText={composeText}
          handleComposeSubmit={handleComposeSubmit}
          handleTextArea={handleTextArea}
          handleToggleComposeBtns={handleToggleComposeBtns}
          postsList={postsList}
        />
      </div>
      <Footer />
    </>
  );
};

export default App;

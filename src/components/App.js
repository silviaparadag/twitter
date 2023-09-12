import '../styles/App.scss';
import { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

//import {Link, Route, Routes} from 'react-router-dom';

const App = () => {
  //state
  const [composeNewPost, setComposeNewPost] = useState(false);
  // Modal window must be closed when we run the app, therefore the state variable must be false.

  //events
  const handleComposeBtn = () => {
    console.log(`I've clicked a button`);
    setComposeNewPost(!composeNewPost);
  };

  //render

  return (
    <>
      <div className="page">
        <Header handleComposeBtn={handleComposeBtn} />
        <Main />
      </div>
      <Footer />
    </>
  );
};

export default App;

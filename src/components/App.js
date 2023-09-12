import '../styles/App.scss';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import spLogo from '../images/faviconSP.png';

//import {Link, Route, Routes} from 'react-router-dom';
// #7-filters

const App = () => {
  //state
  const [composeNewPost, setComposeNewPost] = useState(false);
  // Modal window must be closed when we run the app, therefore the state variable must be false.

  //events
  const handleToggleComposeBtns = () => {
    console.log(`I've clicked a button`);
    setComposeNewPost(!composeNewPost);
  };

  //render

  const renderComposeModal = () => {
    if (composeNewPost === true) {
      return (
        <div className="compose__modal-overlay">
          <div className="compose__modal-wrapper">
            <div className="compose__modal-header">
              <button
                className="compose__modal-close-btn"
                onClick={handleToggleComposeBtns}
              >
                Close
              </button>
            </div>
            <div className="compose__modal-content">
              <img
                className="compose__profile-logo"
                src={spLogo}
                alt="Logo de Adalab"
              />
              <textarea
                className="compose__profile-textarea"
                placeholder="What's happening?!"
              />
            </div>
            <div className="compose__modal-footer">
              <button className="compose__modal-tweet-btn" disabled>
                Post
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div className="page">
        <Header handleToggleComposeBtns={handleToggleComposeBtns} />
        <Main renderComposeModal={renderComposeModal} />
      </div>
      <Footer />
    </>
  );
};

export default App;

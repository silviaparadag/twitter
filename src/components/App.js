import '../styles/App.scss';
import { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
//import MainHeader from './MainHeader';
import Footer from './Footer';
import spLogo from '../images/faviconSP.png';
import callToApi from '../services/api';

//import {Link, Route, Routes} from 'react-router-dom';
// #7-filters

const App = () => {
  //state
  const [composeModal, setComposeModal] = useState(false);
  // Modal window must be closed when we run the app, therefore the state variable must be false.
  const [composeText, setComposeText] = useState('');

  const [postsList, setPostList] = useState([]);

  useEffect(() => {
    callToApi().then((data) => {
      console.log(data);
      setPostList(data);
    });
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
  };
  //render

  const renderComposeModal = () => {
    const isButtonDisabled = composeText.length === 0;
    if (composeModal === true) {
      return (
        <div className="compose__modal-overlay">
          <form type="submit" onSubmit={handleComposeSubmit}>
            <div className="compose__modal-wrapper">
              <div className="compose__modal-header">
                <button
                  className="compose__modal-close-btn"
                  type="button"
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
                  value={composeText}
                  onChange={handleTextArea}
                />
              </div>
              <div className="compose__modal-footer">
                <button
                  className="compose__modal-tweet-btn"
                  disabled={isButtonDisabled}
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    } else {
    }
  };

  return (
    <>
      <div className="page">
        <Header handleToggleComposeBtns={handleToggleComposeBtns} />
        <Main renderComposeModal={renderComposeModal} postsList={postsList} />
      </div>
      <Footer />
    </>
  );
};

export default App;

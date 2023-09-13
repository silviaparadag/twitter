import '../styles/layout/Compose.scss';
import spLogo from '../images/faviconSP.png';

const ComposeModalWindow = ({
  composeModal,
  composeText,
  handleComposeSubmit,
  handleTextArea,
  handleToggleComposeBtns,
}) => {
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
  }
};

export default ComposeModalWindow;

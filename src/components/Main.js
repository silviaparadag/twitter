import '../styles/layout/Main.scss';
import ComposeModalWindow from './ComposeModalWindow';
import Posts from './Posts';
import Profile from './Profile';

const Main = ({
  composeModal,
  composeText,
  handleComposeSubmit,
  handleTextArea,
  postsList,
  handleToggleComposeBtns,
}) => {
  return (
    <main className="main">
      <Profile />
      <ComposeModalWindow
        handleToggleComposeBtns={handleToggleComposeBtns}
        composeModal={composeModal}
        composeText={composeText}
        handleComposeSubmit={handleComposeSubmit}
        handleTextArea={handleTextArea}
      />

      <Posts postsList={postsList} />
    </main>
  );
};

export default Main;

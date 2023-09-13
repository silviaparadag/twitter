import '../styles/layout/Main.scss';

import Posts from './Posts';
import MainHeader from './MainHeader';

const Main = ({ renderComposeModal, postsList }) => {
  return (
    <main className="main">
      <MainHeader />
      {renderComposeModal()}

      <Posts postsList={postsList} />
    </main>
  );
};

export default Main;

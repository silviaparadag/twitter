import '../styles/layout/Main.scss';

import Posts from './Posts';
import MainHeader from './MainHeader';

const Main = ({ renderComposeModal }) => {
  return (
    <main className="main">
      <MainHeader />
      {renderComposeModal()}

      <Posts />
    </main>
  );
};

export default Main;

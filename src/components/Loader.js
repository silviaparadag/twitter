import '../styles/layout/Loader.scss';

const Loader = ({ showLoading }) => {
  return showLoading ? (
    <div className="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : null;
};

export default Loader;

/* */

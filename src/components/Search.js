import '../styles/layout/Search.scss';

const Search = () => {
  return (
    <form className="search">
      <input
        className="search__input"
        type="search"
        name="search"
        id="search"
        placeholder="Search on Twitter"
      />
    </form>
  );
};

export default Search;

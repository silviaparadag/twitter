import '../styles/layout/Search.scss';
// handleSearchByText
const Search = (props) => {
  const handleSearch = (ev) => {
    props.handleSearchByText(ev.target.value);
  };

  return (
    <form className="search">
      <input
        className="search__input"
        type="search"
        name="search"
        id="search"
        placeholder="Search on Twitter"
        value={props.searchText}
        onChange={handleSearch}
      />
    </form>
  );
};

export default Search;

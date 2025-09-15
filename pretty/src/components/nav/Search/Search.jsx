import './Search.css';

export const Search = () => {
  return (
    <form className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search LinkedIn"
        aria-label="Search"
      />
      <button type="submit" className="search-btn">
        🔍
      </button>
    </form>
  );
};
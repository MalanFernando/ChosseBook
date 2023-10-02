import './styles/Filter.css';
import { TYPES } from '../../reducers/filterReducer';
import { useLibrary } from '../../context/LibraryContext';
import { useFilter } from '../../context/FilterProvider';
import { useState, useEffect } from 'react';

export const Filter = () => {
  const { library, minPag, maxPag } = useLibrary();
  const { filter, dispatchFilter } = useFilter();
  const [showDropdown, setShowDropdown] = useState(false);

  const genresList = [...new Set(library?.map((books) => books.book.genre))];

  const searchFiltered = (e) => {
    const searchBook = e.target.value;
    dispatchFilter({ type: TYPES.SEARCH, payload: searchBook });
  };
  const rangeFiltered = (e) => {
    const rangePage = e.target.value;
    dispatchFilter({ type: TYPES.RANGE, payload: rangePage });
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const genreFiltered = (e) => {
    const genreBook = e.target.value;
    dispatchFilter({ type: TYPES.GENRE, payload: genreBook });
    toggleDropdown();
  };

  //  handles the event if you click on a different location in the gender menu
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (e.target.closest('#genre') === null) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <section className="books-filter">
      <label className="filter_search" htmlFor="search">
        <input
          id="search"
          type="text"
          placeholder="search by title / author"
          value={filter.search}
          onChange={searchFiltered}
        />
      </label>
      <label className="filter_pages" htmlFor="pages">
        <small className="pages-title">
          <strong>Pages:</strong> {minPag} to {filter.range}
        </small>
        <input
          className="pages-input"
          id="pages"
          type="range"
          value={filter.range}
          min={minPag}
          max={maxPag}
          onChange={rangeFiltered}
        />
      </label>
      <label className="filter_genre" htmlFor="genre">
        <ul id="genre">
          <li className="select">
            <button type="button" onClick={toggleDropdown}>
              {filter.genre || 'All'} <i className="las la-angle-down"></i>
            </button>
            <ul className={`dropdown ${showDropdown ? 'visible' : ''}`}>
              <li>
                <button
                  className="options"
                  type="button"
                  value=""
                  onClick={genreFiltered}
                >
                  All
                </button>
              </li>
              {genresList.map((genre) => (
                <li key={genre}>
                  <button
                    className="options"
                    type="button"
                    onClick={genreFiltered}
                    value={genre}
                  >
                    {genre}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </label>
    </section>
  );
};

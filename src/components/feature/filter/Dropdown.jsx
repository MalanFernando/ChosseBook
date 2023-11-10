import { useState } from 'react';
import { useLibrary } from '../../../context/LibraryContext';
import { TYPES } from '../../../reducers/filterReducer';
import { useFilter } from '../../../context/FilterProvider';
import { ArrowDownSLine } from '../../../assets/vectors';

export const Dropdown = () => {
  const { library } = useLibrary();
  const { filter, dispatchFilter } = useFilter();
  const [showDropdown, setShowDropdown] = useState(false);

  const genresList = [...new Set(library?.map((books) => books.book.genre))];

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const genreFiltered = (e) => {
    const genreBook = e.target.value;
    dispatchFilter({ type: TYPES.GENRE, payload: genreBook });
    toggleDropdown();
  };

  //  handles the event if you click on a different location in the gender menu
  // useEffect(() => {
  //   const handleDocumentClick = (e) => {
  //     if (e.target.closest('#genre') === null) {
  //       setShowDropdown(false);
  //     }
  //   };

  //   document.addEventListener('click', handleDocumentClick);

  //   return () => {
  //     document.removeEventListener('click', handleDocumentClick);
  //   };
  // }, []);

  return (
    <ul id="genre">
      <li className="select">
        <button type="button" onClick={toggleDropdown}>
          {filter.genre || 'All'} <ArrowDownSLine/>
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
  );
};

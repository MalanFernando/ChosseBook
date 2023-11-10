import '../styles/Filter.css';
import { TYPES } from '../../../reducers/filterReducer';
import { useLibrary } from '../../../context/LibraryContext';
import { useFilter } from '../../../context/FilterProvider';
import { Dropdown } from './Dropdown';

export const Filter = ({ availableFilter }) => {
  const { minPag, maxPag } = useLibrary();
  const { filter, dispatchFilter } = useFilter();

  const searchFiltered = (e) => {
    const searchBook = e.target.value;
    dispatchFilter({ type: TYPES.SEARCH, payload: searchBook });
  };
  const rangeFiltered = (e) => {
    const rangePage = e.target.value;
    dispatchFilter({ type: TYPES.RANGE, payload: rangePage });
  };

  return (
    <section className={`books-filter ${availableFilter}`}>
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
        <Dropdown />
      </label>
    </section>
  );
};

import './styles/Filter.css';
import { TYPES } from '../../reducers/filterReducer';
import { useLibrary } from '../../context/LibraryContext';
import { useFilter } from '../../context/FilterProvider';

export const Filter = () => {
  const { library, minPag, maxPag } = useLibrary();
  const { filter, dispatchFilter } = useFilter();

  const genresList = [...new Set(library?.map((books) => books.book.genre))];

  const searchFiltered = (e) => {
    const searchBook = e.target.value;
    dispatchFilter({ type: TYPES.SEARCH, payload: searchBook });
  };
  const rangeFiltered = (e) => {
    const rangePage = e.target.value;
    dispatchFilter({ type: TYPES.RANGE, payload: rangePage });
  };
  const genreFiltered = (e) => {
    const genreBook = e.target.value;
    dispatchFilter({ type: TYPES.GENRE, payload: genreBook });
  };

  return (
    <section className="books-filter">
      <label className='filter_search' htmlFor="search">
        <input
          id="search"
          type="text"
          placeholder="title/author"
          value={filter.search}
          onChange={searchFiltered}
        />
      </label>
      <label className='filter_pages' htmlFor="pages">
        <span>{minPag}</span>
        <input
          id="pages"
          type="range"
          list="markers"
          value={filter.range}
          min={minPag}
          max={maxPag}
          onChange={rangeFiltered}
        />
        <datalist id="markers">
          {library.map((books) => (
            <option key={books.book.ISBN} value={books.book.pages}></option>
          ))}
        </datalist>
        <span>{maxPag}</span>
      </label>
      <label className='filter_genre' htmlFor="genre">
        <select
          name=""
          id="genre"
          value={filter.genre}
          onChange={genreFiltered}
        >
          <option value="">All</option>
          {genresList.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </label>
    </section>
  );
};

import { createContext, useContext, useReducer } from 'react';
import { filterReducer } from '../reducers/filterReducer';
import { useLibrary } from './LibraryContext';

const FilterContext = createContext();

export function useFilter() {
  return useContext(FilterContext);
}

export function FilterProvider({ children }) {
  const { maxPag } = useLibrary();

  const [filter, dispatchFilter] = useReducer(filterReducer, {
    search: '',
    range: maxPag || 1200,
    genre: ''
  });

  return (
    <FilterContext.Provider value={{ filter, dispatchFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

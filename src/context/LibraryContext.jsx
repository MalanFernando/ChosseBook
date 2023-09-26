import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { initLibState, libraryReducer } from '../reducers/LibraryReducer';
import { bookMarkReducer, initBookState } from '../reducers/bookMarkReducer';
import { getData } from '../services/getData';

const LibContext = createContext();

export function useLibrary() {
  return useContext(LibContext);
};

export function LibraryContext({ children }) {
  const [library, dispatchLib] = useReducer(libraryReducer, initLibState);
  const [bookMark, dispatchBook] = useReducer(bookMarkReducer, initBookState);

  useEffect(() => {
    const resData = async() => {
      const data = await getData();
      return dispatchLib({ type: 'GET_DATA', payload: data.library });
    };
    resData();
    // Data persistence for bookmarks and filters
    localStorage.setItem('bookMark', JSON.stringify(bookMark));
  }, [bookMark]);

  const pages = [...library?.map((books) => books.book.pages)];

  const [minPag, setMinPag] = useState(0);
  const [maxPag, setMaxPag] = useState(0);

  useEffect(() => {
    let min = pages[0];
    let max = pages[0];

    for (let i = 0; i < pages.length; i++) {
      if (pages[i] < min) min = pages[i];
      if (pages[i] > max) max = pages[i];
    }

    setMinPag(min);
    setMaxPag(max);
  }, [pages]);
  return (
    <LibContext.Provider value={{ library, bookMark, dispatchBook, minPag, maxPag }}>
      {children}
    </LibContext.Provider>
  );
}

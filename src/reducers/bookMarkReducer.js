export const initBookState = JSON.parse(localStorage.getItem('bookMark')) || {
  fav: []
};

export const TYPES = {
  ADD_BOOK: 'ADD_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK'
};

export const bookMarkReducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_BOOK:
      return {
        ...state,
        fav: [...state.fav, action.payload]
      };
    case TYPES.REMOVE_BOOK:
      return {
        ...state,
        fav: state.fav.filter(
          (books) => books.book.ISBN !== action.payload.ISBN
        )
      };
    default:
      return state;
  }
};

export const TYPES = {
  SEARCH: 'search_filter',
  RANGE: 'range_filter',
  GENRE: 'genre_filter'
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case TYPES.SEARCH:
      return {
        ...state,
        search: action.payload
      };
    case TYPES.RANGE:
      return {
        ...state,
        range: action.payload
      };
    case TYPES.GENRE:
      return {
        ...state,
        genre: action.payload
      };
    default:
      return state;
  }
};

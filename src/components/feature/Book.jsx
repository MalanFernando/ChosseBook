import { BookIcon } from '../../assets/icons';
import { useLibrary } from '../../context/LibraryContext';
import { TYPES } from '../../reducers/bookMarkReducer';

export const Book = ({ books, opacity }) => {
  const { bookMark, dispatchBook } = useLibrary();

  const isFavorite = bookMark.fav.some(
    (fav) => fav.book.ISBN === books.book.ISBN
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatchBook({ type: TYPES.REMOVE_BOOK, payload: books.book });
    } else {
      dispatchBook({ type: TYPES.ADD_BOOK, payload: books });
    }
  };

  const selected = isFavorite ? opacity : '';

  return (
    <div className={`container-book ${isFavorite ? 'choose' : ''}`}>
      <button className="bookmark-btn" onClick={toggleFavorite} aria-label='bookmark button'>
        <BookIcon isFavorite={isFavorite} />
      </button>
      <div className={`book ${selected ? 'selected' : ''}`}>
        <img
          className="book_cover"
          src={books.book.cover}
          alt={books.book.title}
          width={300}
          height={200}
          loading="lazy"
        />
        <h4 className="book_title">{books.book.title}</h4>
        <span className="book_author">{books.book.author?.name}</span>
      </div>
    </div>
  );
};

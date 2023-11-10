import { useFilter } from '../../../context/FilterProvider';
import { useLibrary } from '../../../context/LibraryContext';
import { Book } from '../../feature/Book';
import { Filter } from '../../feature/filter/Filter';
import { InfoCards } from '../../feature/InfoCards';
import '../styles/Library&BookFav.css';

export default function BookFav() {
  const { bookMark } = useLibrary();
  const { filter } = useFilter();

  const filterBooks = bookMark.fav.filter((books) => {
    return (
      (!filter.search ||
        books.book.title.toLowerCase().includes(filter.search.toLowerCase()) ||
        books.book.author.name
          .toLowerCase()
          .includes(filter.search.toLowerCase())) &&
      (!filter.range || books.book.pages <= filter.range) &&
      (!filter.genre || books.book.genre === filter.genre)
    );
  });

  const available = bookMark?.fav.length > 0 ? '' : 'availableFilter';

  return (
    <main className="books-library">
      <section className="library">
        <Filter availableFilter={available} />
        <h3 className="lib_title">Your Bookmarks</h3>
        <InfoCards />
        <div className="bookMark_container">
          {filterBooks.length === 0 && (
            <p className="bookMark-empty">Add books for viewing here</p>
          )}
          {filterBooks.length > 0 &&
            filterBooks.map((books) => (
              <Book opacity={false} key={books.book.ISBN} books={books} />
            ))}
        </div>
      </section>
    </main>
  );
}

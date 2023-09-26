import { useFilter } from '../../../context/FilterProvider';
import { useLibrary } from '../../../context/LibraryContext';
import { Book } from '../../feature/Book';
import { Filter } from '../../feature/Filter';
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

  return (
    <main className="books-library">
      <section className='library'>
        <Filter />
        <div className="lib_container">
          {filterBooks.length === 0 && <p>No existen libros</p>}
          {filterBooks.length > 0 &&
            filterBooks.map((books) => (
              <Book opacity={false} key={books.book.ISBN} books={books} />
            ))}
        </div>
      </section>
    </main>
  );
}

import '../styles/Library&BookFav.css';
import { Filter } from '../../feature/Filter';
import { useLibrary } from '../../../context/LibraryContext';
import { useFilter } from '../../../context/FilterProvider';
import { Book } from '../../feature/Book';
import { InfoCards } from '../../feature/InfoCards';

export default function Library() {
  const { library } = useLibrary();
  const { filter } = useFilter();

  const filterBooks = library.filter((books) => {
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
    <>
      <main id="Library" className="books-library">
        <section className="library">
          <Filter />
          <h3 className="lib_title">Library</h3>
          <InfoCards/>
          <div className="lib_container">
            {!filterBooks && <p>No existe</p>}
            {filterBooks &&
              filterBooks.map((books) => (
                <Book opacity={true} key={books.book.ISBN} books={books} />
              ))}
          </div>
        </section>
      </main>
    </>
  );
}

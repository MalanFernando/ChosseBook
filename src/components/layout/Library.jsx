import { Link } from 'wouter';
import Filter from '../feature/Filter';
import data from '../../local-data/data.json';
import miduLogo from '../../assets/midulog.png';
import './styles/Library.css';

const dataBooks = data.library;

export default function Library() {
  return (
    <>
      <main id="Library" className="books-library">
        <section className="library">
          <h3 className="lib_title">Library</h3>
          <Filter />
          <div className="lib_container">
            {dataBooks.map(({ book, id = book.ISBN }) => {
              return (
                <div key={id} className="container-book">
                  <Link className="book_btn" to="#">
                    <i className="btn-fav fa-solid fa-bookmark"></i>
                  </Link>
                  <img
                    className="book_cover"
                    src={book.cover}
                    alt={book.title}
                  />
                  <h4 className="book_title">{book.title}</h4>
                  <span className="book_author">{book.author?.name}</span>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <footer className="books-footer">
        <div className="footer_pwb">
          <span className="pwb-text">Powered by </span>
          <a
            href="https://www.youtube.com/c/midudev"
            target="_blank"
            rel="noreferrer"
          >
            <img className="pwb-midu" src={miduLogo} alt="logotype midudev" />
          </a>
        </div>
        {/* <div className='footer_social'>
          <span className='social-name'>Da<strong>bit</strong></span>
          <div className='social-icons'>
            <a className='icon-link' href="https://www.linkedin.com/in/fernando-david-malan-perugachi-b48b6321a/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a className='icon-link' href="https://www.linkedin.com/in/fernando-david-malan-perugachi-b48b6321a/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div> */}
      </footer>
    </>
  );
}

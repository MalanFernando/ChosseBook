import { Link } from 'wouter';
import '../styles/Intro&HeadBM.css';
import { useLibrary } from '../../../context/LibraryContext';
import { useEffect, useState } from 'react';
import { SaveIcon } from '../../../assets/icons';
import { CssImg, ReactImg, WouterImg } from '../../../assets/vectors';

export default function Intro() {
  const { library } = useLibrary();
  const [recommendedBooks, setRecommendedBooks] = useState([]);

  useEffect(() => {
    function randomBooks(array) {
      const cloneLib = [...array];

      for (let i = cloneLib.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cloneLib[i], cloneLib[j]] = [cloneLib[j], cloneLib[i]];
      }
      const threeRandBooks = cloneLib.slice(0, 3);
      return threeRandBooks;
    }

    const booksRand = randomBooks(library);
    setRecommendedBooks(booksRand);
  }, [library]);

  return (
    <header className="books-cover">
      <div className="cover_info">
        <h1 className="info-title">Choose Book</h1>
        <p className="info-descri">
          This project has been created with the following technologies, if you
          want to know more, scroll down and visit my github to see the code.
        </p>
        <div className="info-icons">
          <ReactImg className="icon_react" />
          <CssImg className="icon_css" />
          <WouterImg className="icon_wouter" />
        </div>
        <Link className="cover_favorites-btn" to="/bookmark">
          Favorites <SaveIcon />
        </Link>
      </div>
      <div className="cover_media">
        <span className="media-sticker">
          <h2>{library.length}+</h2>
          <small>
            <strong>Books</strong>
          </small>
        </span>
        <div className="media-img">
          {recommendedBooks.map(({ book, id = book.ISBN }) => {
            return (
              <img
                key={id}
                className="img_cover"
                src={book.cover}
                alt={book.title}
              />
            );
          })}
        </div>
      </div>
    </header>
  );
}

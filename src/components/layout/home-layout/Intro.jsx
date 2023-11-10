import { Link } from 'wouter';
import '../styles/Intro&HeadBM.css';
import { useLibrary } from '../../../context/LibraryContext';
import { useEffect, useState } from 'react';
import { SaveIcon } from '../../../assets/icons';

const randomIndex = Math.floor(Math.random() * 11);
const randomEndNum = randomIndex + 3;

export default function Intro() {
  const { library } = useLibrary();
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const newLibrary = [...library];
  let randomBooks = 0;

  const randFunc = () => {
    if (library) {
      randomBooks = newLibrary.slice(randomIndex, randomEndNum);
      setRecommendedBooks(randomBooks);
    }
    return randomBooks;
  };

  useEffect(() => {
    randFunc();
  }, [library]);

  return (
    <header className="books-cover">
      <div className="cover_info">
        <h1 className="info-title">Choose Book</h1>
        <p className="info-descri">
          This project has been created with the following technologies:{' '}
          <span className="icons">React</span>
          <span className="icons">Css</span>
          <span className="icons">Wouter</span> If you want to know more, scroll
          down and visit my github to see the code.
        </p>
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
                width={300}
                height={420}
                loading="lazy"
              />
            );
          })}
        </div>
      </div>
    </header>
  );
}

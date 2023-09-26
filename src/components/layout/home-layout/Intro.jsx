import { Link } from 'wouter';
import '../styles/Intro&HeadBM.css';

// const dataBooks = data.library;
// const arrayRandomBooks = [];

// for (let i = 0; i < 3; i++) {
//   const rand = Math.floor(Math.random() * 13);
//   if (!arrayRandomBooks[i]?.book.title) {
//     arrayRandomBooks.push(dataBooks[rand]);
//   }
// }

export default function Intro() {
  return (
    <header className="books-cover">
      <div className="cover_info">
        <h1 className="info-title">Choose Book</h1>
        <p className="info-descri">
          This project has been created with the following technologies, if you
          want to know more, scroll down and visit my github to see the code.
        </p>
        <div className="info-icons">
          {/* <svg>tech-logo</svg>
                        <svg>tech-logo</svg>
                        <svg>tech-logo</svg> */}
        </div>
        <Link className="cover_favorites-btn" to="/bookmark">
          Favorites <i className="las la-bookmark"></i>
        </Link>
      </div>
      {/* <div className="cover_media">
        <span className="media-sticker">
          <h2>{dataBooks.length}+</h2>
          <small>
            <strong>Books</strong>
          </small>
        </span>
        <div className="media-img">
          {arrayRandomBooks.map(({ book, id = book.ISBN }) => {
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
      </div> */}
    </header>
  );
}

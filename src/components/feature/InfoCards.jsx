import { useLibrary } from '../../context/LibraryContext';
import './styles/InfoCards.css';

export const InfoCards = ({ info }) => {
  const { bookMark, library } = useLibrary();
  const available = library.length - bookMark.fav.length;
  return (
    <div className="content_info">
      <span className="info-books">
        <h3>{available}</h3>
        <small> Available books</small>
      </span>
      <span className="info-fav">
        <h3>{bookMark.fav.length}</h3>
        <small> Favorites</small>
      </span>
    </div>
  );
};

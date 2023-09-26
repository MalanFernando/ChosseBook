import { Link } from 'wouter';
import '../styles/Intro&HeadBM.css';

export default function HeadBM() {
  return (
    <div className="headBM">
      <h2>Favorites</h2>
      <p>Libros que te gustaría leer</p>
      <Link className="headBM_btn-home" to="/">
        Home <i className="las la-home"></i>
      </Link>
    </div>
  );
}

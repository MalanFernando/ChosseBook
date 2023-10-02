import { Link } from 'wouter';
import '../styles/Intro&HeadBM.css';
import { HomeIcon } from '../../../assets/icons';
import { BookMarkImg } from '../../../assets/vectors';

export default function HeadBM() {
  return (
    <div className="headBM">
      <section className="headBM-container">
        <div>
          <h1 className="headBM_title">Favorites</h1>
          <p className="headBM_info">
            Expand your literary horizons by adding more books and embark on a
            journey to discover a whole new world of stories and adventures.
          </p>
          <Link className="headBM_btn-home" to="/">
            Home <HomeIcon />
          </Link>
        </div>
        <BookMarkImg className="headBM_img" />
      </section>
      <picture>
        <img src="" alt="" />
      </picture>
    </div>
  );
}

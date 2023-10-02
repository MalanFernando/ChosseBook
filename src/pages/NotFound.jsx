import { Link } from 'wouter';
import './styles/NotFound.css';
import { HomeIcon } from '../assets/icons';
export default function NotFound() {
  return (
    <section className="notfound-contain">
      <div className="notfound_msg">
        <h2>404</h2>
        <p>Page not found, return to</p>
      </div>
      <div>
        <Link className="headBM_btn-home" to="/">
          Home <HomeIcon />
        </Link>
      </div>
    </section>
  );
}

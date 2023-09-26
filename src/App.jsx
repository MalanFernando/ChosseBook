import { Switch, Route } from 'wouter';
import routes from './routes/routes';
import { LibraryContext } from './context/LibraryContext';
import miduLogo from './assets/midulog.png';
import './App.css';

export default function App() {
  return (
    <LibraryContext>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path || 'Not Found'}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
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
    </LibraryContext>
  );
}

// Font created by Barry Schwartz

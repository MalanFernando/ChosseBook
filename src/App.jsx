import { Switch, Route } from 'wouter';
import routes from './routes/routes';
import { LibraryContext } from './context/LibraryContext';
import miduLogo from './assets/midulog.png';
import './App.css';
import { GithubIcon, LinkedinIcon } from './assets/vectors';

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
          <small className="pwb-text">Powered by </small>
          <a
            href="https://www.youtube.com/c/midudev"
            target="_blank"
            rel="noreferrer"
          >
            <img className="pwb-midu" width={90} height={25} src={miduLogo} alt="logotype midudev" loading='lazy'/>
          </a>
        </div>
        <div className="footer_social">
          <div className="social-logo">
            <small className="logo-tag">Created by </small>
            <a
              className="logo-name"
              href="https://malanfernando.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Da<strong>bit</strong>
            </a>
          </div>
          <div className="social-icons">
            <a
              className="github icon-link"
              href="https://github.com/MalanFernando/ChosseBook"
              target="_blank"
              rel="noopener noreferrer"
              aria-label='github icon'
            >
              <GithubIcon/>
            </a>
            <a
              className="linkedIn icon-link"
              href="https://www.linkedin.com/in/fernando-david-malan-perugachi-b48b6321a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label='linkedIn icon'
            >
              <LinkedinIcon/>
            </a>
          </div>
        </div>
      </footer>
    </LibraryContext>
  );
}

// Font created by Barry Schwartz

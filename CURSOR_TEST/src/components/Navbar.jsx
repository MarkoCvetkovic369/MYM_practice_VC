import { Link } from 'react-router-dom';

function Navbar({ isExiting = false, onAboutClick }) {
  return (
    <header className={`navbar ${isExiting ? 'navbar--exiting' : ''}`}>
      <nav className="navbar__inner" aria-label="Main navigation">
        <Link to="/" className="navbar__logo">
          M<span className="navbar_logo-accent">Y</span>M
        </Link>

        <div className="navbar__actions">
          <a href="/about" className="navbar__link" onClick={onAboutClick}>
            ABOUT
          </a>
          <Link to="/login" className="btn btn--outline navbar__btn">
            LOGIN
          </Link>
          <Link to="/register" className="btn btn--outline navbar__btn">
            REGISTER
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

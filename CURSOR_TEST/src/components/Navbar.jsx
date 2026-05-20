import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Main navigation">
        <Link to="/" className="navbar__logo">
          MYM
        </Link>

        <div className="navbar__actions">
          <Link to="/#about" className="navbar__link">
            ABOUT
          </Link>
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

import { Link } from 'react-router-dom';

function Register() {
  return (
    <main className="page__main page__main--auth">
      <div className="auth">
        <form className="auth__card" onSubmit={(e) => e.preventDefault()}>
          <h1 className="auth__title">REGISTER</h1>

          <div className="auth__field">
            <label className="auth__label" htmlFor="register-name">
              Full Name
            </label>
            <input
              id="register-name"
              className="auth__input"
              type="text"
              name="fullName"
              placeholder="Your full name"
              autoComplete="name"
            />
          </div>

          <div className="auth__field">
            <label className="auth__label" htmlFor="register-email">
              Email
            </label>
            <input
              id="register-email"
              className="auth__input"
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div className="auth__field">
            <label className="auth__label" htmlFor="register-password">
              Password
            </label>
            <input
              id="register-password"
              className="auth__input"
              type="password"
              name="password"
              placeholder="••••••••"
              autoComplete="new-password"
            />
          </div>

          <div className="auth__field">
            <label className="auth__label" htmlFor="register-confirm">
              Confirm Password
            </label>
            <input
              id="register-confirm"
              className="auth__input"
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              autoComplete="new-password"
            />
          </div>

          <button type="submit" className="btn btn--primary auth__submit">
            CREATE ACCOUNT
          </button>

          <p className="auth__switch">
            Already have an account?{' '}
            <Link to="/login" className="auth__switch-link">
              Login
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}

export default Register;

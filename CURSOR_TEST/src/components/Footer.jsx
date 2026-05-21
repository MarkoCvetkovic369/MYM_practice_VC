const footerLinks = [
  { label: 'Link One', href: '#' },
  { label: 'Link Two', href: '#' },
  { label: 'Link Three', href: '#' },
  { label: 'Link Four', href: '#' },
  { label: 'Link Five', href: '#' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookies Settings', href: '#' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <p className="footer__logo" aria-label="Match Your Match">
          <span>MATCH</span>
          <span className="footer__logo-accent">YOUR</span>
          <span>MATCH</span>
        </p>

        <nav className="footer__nav" aria-label="Footer navigation">
          <ul className="footer__links">
            {footerLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="footer__divider" aria-hidden="true" />

      <div className="footer__bottom">
        <p className="footer__copyright">
          &copy;  {new Date().getFullYear()} MYM TEAM. All rights reserved.
        </p>
        <nav className="footer__legal" aria-label="Legal">
          <ul>
            {legalLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

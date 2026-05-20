import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socialLinks = [
  { href: 'https://instagram.com', label: 'Instagram', Icon: FaInstagram },
  { href: 'https://youtube.com', label: 'YouTube', Icon: FaYoutube },
  { href: 'https://x.com', label: 'X (Twitter)', Icon: FaXTwitter },
];

function Hero() {
  return (
    <section id="about" className="hero" aria-labelledby="hero-heading">
      <div className="hero__title-wrap">
        <h1 id="hero-heading" className="hero__title">
          <span className="hero__match hero__match--left" aria-hidden="true">
            MATCH
          </span>
          <span className="hero__your">YOUR</span>
          <span className="hero__match hero__match--right" aria-hidden="true">
            MATCH
          </span>
          <span className="sr-only">Match Your Match</span>
        </h1>
      </div>

      <p className="hero__subtitle">FIND IT. FEEL IT. MATCH IT.</p>

      <div className="hero__cta">
        <span className="hero__cta-line" aria-hidden="true" />
        <a href="#match-in" className="btn btn--primary hero__cta-btn">
          MATCH IN
        </a>
        <span className="hero__cta-line" aria-hidden="true" />
      </div>

      <ul className="hero__social" aria-label="Social media">
        {socialLinks.map(({ href, label, Icon }) => (
          <li key={label}>
            <a
              href={href}
              className="hero__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Hero;

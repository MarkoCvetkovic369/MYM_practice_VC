import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div className="page-fade-in">
      <main className="page__main page__main--about">
        <div className="about">
          {/* Section 1 — Hero statement */}
          <section className="about-hero" aria-labelledby="about-heading">
            <h1 id="about-heading" className="about-hero__heading about-animate about-animate--up">
              WE CONNECT
              <br />
              PEOPLE TO
              <br />
              <span className="about-hero__accent">MOMENTS.</span>
            </h1>
            <p className="about-hero__body about-animate about-animate--up about-animate--delay-15">
              MatchYourMatch is a platform built for people who believe the best
              experiences happen when the right people find each other at the
              right time.
            </p>
          </section>

          {/* Section 2 — Three pillars */}
          <section className="about-pillars" aria-label="Platform pillars">
            <article className="about-pillar about-animate about-animate--up about-animate--delay-10">
              <span className="about-pillar__icon" aria-hidden="true">
                01
              </span>
              <h2 className="about-pillar__title">DISCOVER</h2>
              <p className="about-pillar__text">
                Browse events, meetups, and experiences happening around you —
                filtered to what actually matters to you.
              </p>
            </article>

            <article className="about-pillar about-pillar--featured about-animate about-animate--up about-animate--delay-25">
              <span className="about-pillar__icon" aria-hidden="true">
                02
              </span>
              <h2 className="about-pillar__title">CONNECT</h2>
              <p className="about-pillar__text">
                Match with people who share your interests, your schedule, and
                your vibe. Real connections over shared experiences.
              </p>
            </article>

            <article className="about-pillar about-animate about-animate--up about-animate--delay-40">
              <span className="about-pillar__icon" aria-hidden="true">
                03
              </span>
              <h2 className="about-pillar__title">EXPERIENCE</h2>
              <p className="about-pillar__text">
                Show up, participate, and build memories. Rate events, follow
                people, and grow your social world.
              </p>
            </article>
          </section>

          {/* Section 3 — Manifesto quote */}
          <section className="about-quote" aria-label="Manifesto">
            <div className="about-quote__line" aria-hidden="true" />
            <blockquote className="about-quote__text about-animate about-animate--fade about-animate--delay-20">
              The best match isn&apos;t found — it&apos;s experienced.
            </blockquote>
            <p className="about-quote__attrib about-animate about-animate--fade about-animate--delay-20">
              — MYM TEAM, 2025
            </p>
            <div className="about-quote__line" aria-hidden="true" />
          </section>

          {/* Section 4 — Stats */}
          <section className="about-stats" aria-label="Platform statistics">
            <div className="about-stat about-animate about-animate--up about-animate--delay-10">
              <span className="about-stat__number">10K+</span>
              <span className="about-stat__label">Users</span>
            </div>
            <div className="about-stat about-animate about-animate--up about-animate--delay-20">
              <span className="about-stat__number">500+</span>
              <span className="about-stat__label">Events</span>
            </div>
            <div className="about-stat about-animate about-animate--up about-animate--delay-30">
              <span className="about-stat__number">98%</span>
              <span className="about-stat__label">Match rate</span>
            </div>
          </section>

          {/* Section 5 — CTA strip */}
          <section className="about-cta" aria-labelledby="about-cta-heading">
            <h2 id="about-cta-heading" className="about-cta__heading about-animate about-animate--fade">
              READY TO FIND <span className="about-hero__accent">YOUR</span> MATCH?
            </h2>
            <button
              type="button"
              className="btn btn--primary about-cta__btn about-animate about-animate--fade"
              onClick={() => navigate('/register')}
            >
              GET STARTED
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}

export default About;

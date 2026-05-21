import Hero from '../components/Hero';
import Footer from '../components/Footer';

function Home({ isExiting = false }) {
  return (
    <div className="page-fade-in">
      <main className="page__main">
        <Hero isExiting={isExiting} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;

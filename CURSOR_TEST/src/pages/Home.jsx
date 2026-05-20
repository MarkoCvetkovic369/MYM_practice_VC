import Hero from '../components/Hero';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="page-fade-in">
      <main className="page__main">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default Home;

import Hero from '../components/Hero';
import Footer from '../components/Footer';

function Home(props) {
  return (
    <div className="page-fade-in">
      <main className="page__main">
        <Hero isExiting={props.isExiting} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;

import './assets/style/normalize.scss';
import './assets/style/index.scss';
import './assets/style/icon.scss';
import './assets/mixins/index.scss';

import Header from './Components/Header';
import Hero from './Components/Hero';
import Bake from './Components/Bake';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <Hero />
        <Bake />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;

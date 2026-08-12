import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Historia from './components/Historia';
import Turismo from './components/Turismo';
import Localizacao from './components/Localizacao';
import Footer from './components/Footer';

function App() {
  document.title = 'Joinville-SC';
  document.body.style.backgroundColor = '#f0f0f0';

  return (
    <>
      <Header />
      <Banner />

      <main className="container">
        <Historia />
        <Turismo />
        <Localizacao />
      </main>

      <Footer />
    </>
  );
}

export default App;

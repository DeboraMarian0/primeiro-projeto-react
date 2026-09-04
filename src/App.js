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
      <div className="container">
        <Header />
        <Banner />

        <Historia />
        <Turismo />
        <Localizacao />

        <Footer />
      </div>
    </>
  );
}

export default App;

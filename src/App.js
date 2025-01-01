import './assets/css/App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import Header from './components/Theme/Header';
import Footer from './components/Theme/Footer';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

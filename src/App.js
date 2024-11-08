import './assets/css/App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import Header from './components/Header';
import Footer from './components/Footer';

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

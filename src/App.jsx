import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/Store';
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import 'animate.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element="" />
          <Route path="/projects" element="" />
          <Route path="/certifications" element="" />
          <Route path="/contacts" element="" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

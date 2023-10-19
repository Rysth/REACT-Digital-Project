import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import 'animate.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element="" />
        <Route path="/projects" element="" />
        <Route path="/certifications" element="" />
        <Route path="/contacts" element="" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

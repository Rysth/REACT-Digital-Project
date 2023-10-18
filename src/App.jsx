import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element="" />
        <Route path="/gallery" element="" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

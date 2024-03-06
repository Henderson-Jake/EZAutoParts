import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import InteriorParts from './pages/InteriorParts'; // Import the InteriorParts component

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/interior-parts" element={<InteriorParts />} /> {/* Add the InteriorParts route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

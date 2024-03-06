import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<>
            <Navbar />
            <Home />
          </>}
        />
        <Route path="/about" element={<>
          <Navbar />
          <About />
        </>} />
        <Route path="/faq" element={<>
          <Navbar />
          <FAQ />
        </>} />
        <Route path="/contact" element={<>
          <Navbar />
          <Contact />
        </>} />
        <Route path="/register" element={<>
        <Register />
        </>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;



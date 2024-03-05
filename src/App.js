import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  return (
      <div className="App">
        

        <BrowserRouter>
        <Navbar />
        <Routes>

        <Route path="/" element={<Home />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/FAQ" element={<FAQ />} />
        <Route path ="/Contact" element={<Contact />} />
      

        </Routes>
        
        
        </BrowserRouter>

        
        
        
    
        
        </div>
      
  );
}

export default App;

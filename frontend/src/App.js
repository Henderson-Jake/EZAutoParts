import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Interior from './pages/InteriorParts';
import Body from './pages/BodyParts';
import Wheel from './pages/WheelParts';
import Cart from './pages/Cart';

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
        <Route path="/cart" element={<>
          <Navbar />
          <Cart />
        </>} />
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
        <Route path="/interior-parts" element={<>
        <Navbar/>
        <Interior />
          </>} />
        <Route path="/body-parts" element={<>
        <Navbar/>
        <Body />
        </>} />
        <Route path="/wheel-parts" element={<>
        <Navbar/>
        <Wheel />
        </>} />
        <Route path="/body-parts/filters" element={<>
        <Navbar />
        <Body filtersOnly />
        </>} />
        <Route path="/body-parts/headlight-bulbs" element={<>
        <Navbar />
        <Body headlightsOnly />
        </>} />
        <Route path="/body-parts/batteries" element={<>
        <Navbar />
        <Body batteriesOnly />
        </>} />
        <Route path="/body-parts/spark-plugs" element={<>
        <Navbar />
        <Body sparkPlugsOnly />
        </>} />
        <Route path="/body-parts/alternators" element={<>
        <Navbar />
        <Body alternatorsOnly />
        </>} />



  

        <Route path="/register" element={<>
        <Register />
        </>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;



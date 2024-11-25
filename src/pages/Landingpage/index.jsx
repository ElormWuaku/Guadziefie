// 

import { Routes, Route } from 'react-router-dom';

// Import components
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import ProductListing from './components/ProductListing';

const LandingPage = () => {
  return (
    <div>
      {/* Define sub-routes for the Landing Page */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductListing />} />
      </Routes>
    </div>
  );
};

export default LandingPage;

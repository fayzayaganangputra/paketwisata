import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // ⬅️ import

import Home from './pages/Home';
import TourPackages from './pages/TourPackages';
import DestinationDetail from './pages/DestinationDetail';
import PackageDetail from './pages/PackageDetail';
import CarRental from './pages/CarRental';
import About from './pages/About';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <Router basename="/paketwisata">
      <ScrollToTop /> {/* ⬅️ tambahkan di sini */}
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paket-wisata" element={<TourPackages />} />
            <Route path="/destinasi/:destination" element={<DestinationDetail />} />
            <Route path="/paket/:destination/:package" element={<PackageDetail />} />
            <Route path="/sewa-mobil" element={<CarRental />} />
            <Route path="/tentang" element={<About />} />
            <Route path="/kontak" element={<Contact />} />
            <Route path="/artikel" element={<Articles />} />
            <Route path="/artikel/:slug" element={<ArticleDetail />} />
            <Route path="/testimoni" element={<Testimonials />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

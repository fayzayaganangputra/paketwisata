import React from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Rentalku Yogyakarta</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Solusi terpercaya untuk paket wisata dan sewa mobil di Yogyakarta.
              Liburan mudah, hemat, dan berkesan bersama kami.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a
                href="mailto:info@lajutujuyogya.com"
                className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/lajutujuyogya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigasi Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/paket-wisata" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  Paket Wisata
                </Link>
              </li>
              <li>
                <Link to="/sewa-mobil" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  Sewa Mobil
                </Link>
              </li>
              <li>
                <Link to="/tentang" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+62 812-3456-7890</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@rentalkuuyogya.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Yogyakarta, Indonesia</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Rentalku Yogyakarta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
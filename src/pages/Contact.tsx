import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppSubmit = () => {
    const message = `Halo, saya ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Pesan: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telepon & WhatsApp',
      details: ['+62 812-3456-7890', '+62 856-7890-1234'],
      action: 'tel:+6281234567890'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['info@lajutujuyogya.com', 'booking@lajutujuyogya.com'],
      action: 'mailto:info@lajutujuyogya.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Alamat',
      details: ['Jl. Malioboro No. 123', 'Yogyakarta 55271, Indonesia'],
      action: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Jam Operasional',
      details: ['Senin - Minggu: 06:00 - 22:00', '24/7 Emergency Support'],
      action: null
    }
  ];

  const socialMedia = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-6 h-6" />,
      url: 'https://wa.me/6281234567890',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      url: 'https://instagram.com/lajutujuyogya',
      color: 'bg-pink-600 hover:bg-pink-700'
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      url: 'mailto:info@lajutujuyogya.com',
      color: 'bg-blue-600 hover:bg-blue-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1200)'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Hubungi Kami
            </h1>
            <p className="text-lg md:text-xl animate-fade-in">
              Siap membantu merencanakan perjalanan wisata impian Anda
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  placeholder="Masukkan nama lengkap Anda"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  placeholder="nama@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  placeholder="08123456789"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Ceritakan tentang rencana perjalanan Anda..."
                  required
                ></textarea>
              </div>

              <button
                onClick={handleWhatsAppSubmit}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105"
              >
                <Send className="w-5 h-5" />
                <span>Kirim via WhatsApp</span>
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Pesan akan dikirim langsung ke WhatsApp kami untuk respon yang lebih cepat
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 group-hover:bg-amber-200 transition-colors duration-200">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm">
                          {info.action && detailIndex === 0 ? (
                            <a 
                              href={info.action} 
                              className="hover:text-amber-600 transition-colors duration-200"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Media Sosial</h2>
              <div className="grid grid-cols-1 gap-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white p-4 rounded-lg transition-all duration-200 flex items-center space-x-3 hover:scale-105`}
                  >
                    {social.icon}
                    <span className="font-semibold">Hubungi via {social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-xl shadow-lg p-8 animate-fade-in">
              <h3 className="text-xl font-bold mb-3">Respon Cepat!</h3>
              <p className="mb-4 opacity-90">
                Tim customer service kami siap membantu Anda 24/7. Dapatkan respon dalam 5 menit!
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>Rata-rata respon: 3 menit</span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Lokasi Kami</h2>
            <p className="text-gray-600 mb-6">
              Kunjungi kantor kami di jantung kota Yogyakarta untuk konsultasi langsung
            </p>
          </div>
          <div className="h-96 bg-gray-200 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-12 h-12 mx-auto mb-2" />
              <p className="font-semibold">Jl. Malioboro No. 123</p>
              <p>Yogyakarta 55271, Indonesia</p>
              <p className="text-sm mt-2">
                * Peta interaktif akan tersedia segera
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
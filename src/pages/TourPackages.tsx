import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

const TourPackages = () => {
  const destinations = [
    {
      id: 'jogja',
      name: 'Yogyakarta',
      description: 'Kota budaya dengan pesona istimewa. Nikmati wisata sejarah, kuliner, dan budaya yang tak terlupakan.',
      image: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Candi Borobudur', 'Malioboro', 'Kraton Yogyakarta', 'Alun-Alun Kidul']
    },
    {
      id: 'bali',
      name: 'Bali',
      description: 'Pulau dewata yang memukau dengan pantai eksotis, budaya Hindu yang kental, dan pemandangan alam yang menawan.',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Tanah Lot', 'Ubud', 'Pantai Kuta', 'Pura Besakih']
    },
    {
      id: 'malang',
      name: 'Malang',
      description: 'Kota apel dengan udara sejuk dan wisata alam yang mempesona. Cocok untuk liburan keluarga.',
      image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Bromo Tengger', 'Coban Rondo', 'Jatim Park', 'Museum Angkut']
    },
    {
      id: 'semarang',
      name: 'Semarang',
      description: 'Kota dengan perpaduan arsitektur kolonial dan modern. Nikmati kuliner khas dan wisata sejarah.',
      image: 'https://images.pexels.com/photos/3250364/pexels-photo-3250364.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Kota Lama', 'Lawang Sewu', 'Sam Poo Kong', 'Brown Canyon']
    },
    {
      id: 'karimunjawa',
      name: 'Karimunjawa',
      description: 'Kepulauan tropis yang eksotis dengan pantai berpasir putih dan air laut yang jernih.',
      image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Pantai Nirwana', 'Snorkeling', 'Mangrove Tour', 'Sunset Point']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pilih Destinasi Wisata Favorit Anda
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Jelajahi keindahan Indonesia dengan paket wisata yang dirancang khusus untuk memberikan pengalaman tak terlupakan
            </p>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">{destination.name}</h2>
                  <div className="flex items-center text-amber-300">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">Indonesia</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {destination.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Highlight Destinasi:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {destination.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/destinasi/${destination.id}`}
                  className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 w-full justify-center group-hover:shadow-lg"
                >
                  <span>Lihat Paket Wisata</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Masih Bingung Memilih?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Hubungi tim kami untuk konsultasi gratis dan dapatkan rekomendasi paket wisata terbaik sesuai kebutuhan Anda
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20paket%20wisata"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
          >
            <span>Konsultasi Gratis via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourPackages;
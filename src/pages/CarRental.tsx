import React from 'react';
import { Users, Fuel, Shield, Star, Phone, CheckCircle, Clock } from 'lucide-react';

const CarRental = () => {
  const cars = [
    {
      name: 'Toyota Avanza',
      capacity: '6 orang',
      price: 'Rp 550.000',
      image: '/paketwisata/images/armada1.png',
      features: ['AC', 'Audio System', 'Manual'],
      description: 'Mobil keluarga yang nyaman dan hemat bahan bakar, cocok untuk perjalanan dalam kota.',
      specs: ['BBM Included', 'Driver Profesional', 'AC & Audio System', 'Pemakaian 12 Jam/Day', 'Asuransi Perjalanan']
    },
    {
      name: 'Toyota Innova',
      capacity: '7 orang',
      price: 'Rp 750.000',
      image: '/paketwisata/images/reborn.png',
      features: ['AC', 'Audio System', 'Manual'],
      description: 'Kendaraan premium dengan ruang lebih luas, ideal untuk perjalanan jarak jauh.',
      specs: ['BBM Included', 'Driver Profesional', 'AC & Audio System', 'Pemakaian 12 Jam/Day', 'Asuransi Perjalanan']
    },
    {
      name: 'Hiace',
      capacity: '15 orang',
      price: 'Rp 1.200.000',
      image: '/paketwisata/images/armada2.png',
      features: ['AC', 'Audio System', 'Manual'],
      description: 'Bus mini untuk group besar dengan kenyamanan maksimal dan bagasi yang luas.',
      specs: ['BBM Included', 'Driver Profesional', 'AC & Audio System', 'Pemakaian 12 Jam/Day', 'Asuransi Perjalanan']
    },
    {
      name: 'Toyota Alphard',
      capacity: '7 orang',
      price: 'Rp 2.000.000',
      image: '/paketwisata/images/alphard.png',
      features: ['AC', 'Premium Audio', 'Automatic'],
      description: 'Kendaraan mewah dengan fasilitas premium untuk pengalaman perjalanan yang eksklusif.',
      specs: ['BBM Included', 'Driver Profesional', 'Premium Audio System', 'Pemakaian 12 Jam/Day', 'Asuransi Perjalanan']
    }
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Driver Profesional',
      description: 'Driver berpengalaman dan berlisensi resmi'
    },
    {
      icon: <Fuel className="w-8 h-8" />,
      title: 'BBM Included',
      description: 'Sudah termasuk bahan bakar selama perjalanan'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Armada Terawat',
      description: 'Kendaraan selalu dalam kondisi prima dan bersih'
    }
  ];

  const whatsappMessage = "Halo, saya ingin bertanya tentang sewa mobil";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sewa Mobil dengan Driver Profesional
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pilihan kendaraan berkualitas dengan driver berpengalaman untuk perjalanan yang aman, nyaman, dan berkesan
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600 group-hover:shadow-lg transition-shadow duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group animate-fade-in"
            >
              <div className="relative">
                <img
                src={car.image}
                alt={car.name}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-xl"
              />


                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1 text-amber-600">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold">4.9</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{car.name}</h3>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">Kapasitas {car.capacity}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-amber-600">{car.price}</div>
                    <div className="text-sm text-gray-500">/ hari</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {car.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Yang Anda Dapatkan:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {car.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {car.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/6281234567890?text=${whatsappMessage} - ${car.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 group-hover:shadow-lg hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span>Pesan via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Terms Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Syarat & Ketentuan</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Minimal sewa 1 hari (12 jam)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Sudah termasuk driver, BBM dalam kota</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Luar kota dikenakan biaya tambahan</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Booking minimal H-1 sebelum keberangkatan</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Overtime Rp 50.000/jam</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Area Layanan</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Yogyakarta dan sekitarnya</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Solo, Semarang, Magelang</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Bandara Yogyakarta (YIA)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Stasiun Yogyakarta</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Hotel di area Yogyakarta</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Butuh Konsultasi?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Tim kami siap membantu Anda memilih kendaraan yang tepat sesuai kebutuhan perjalanan
          </p>
          <a
            href={`https://wa.me/6281234567890?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
          >
            <Phone className="w-5 h-5" />
            <span>Hubungi Kami Sekarang</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarRental;
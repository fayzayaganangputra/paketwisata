import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, MapPin } from 'lucide-react';

const DestinationDetail = () => {
  const { destination } = useParams();

  const destinationData: Record<string, any> = {
    jogja: {
      name: 'Yogyakarta',
      description: 'Kota istimewa yang kaya akan budaya dan sejarah. Nikmati wisata heritage, kuliner legendaris, dan keramahtamahan masyarakat Jogja.',
      image: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1200',
      packages: [
        {
          id: '1-day',
          name: 'Paket 1 Day Jogja',
          duration: '1 Hari',
          minPax: 2,
          description: 'Wisata singkat namun berkesan untuk merasakan pesona Yogyakarta',
          highlights: ['Malioboro Street', 'Kraton Yogyakarta', 'Taman Sari']
        },
        {
          id: '2-day',
          name: 'Paket 2 Day Jogja',
          duration: '2 Hari 1 Malam',
          minPax: 2,
          description: 'Paket populer untuk menikmati wisata budaya dan alam Yogyakarta',
          highlights: ['Candi Borobudur', 'Malioboro', 'Alun-Alun Kidul', 'Candi Prambanan']
        },
        {
          id: '3-day',
          name: 'Paket 3 Day Jogja',
          duration: '3 Hari 2 Malam',
          minPax: 2,
          description: 'Paket lengkap untuk eksplorasi mendalam Yogyakarta dan sekitarnya',
          highlights: ['Borobudur', 'Prambanan', 'Hutan Pinus', 'Tebing Breksi', 'Pantai Parangtritis']
        }
      ]
    },
    bali: {
      name: 'Bali',
      description: 'Pulau dewata yang memikat dengan keindahan alam, budaya Hindu yang kental, dan keramahan penduduk lokal.',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200',
      packages: [
        {
          id: '3-day',
          name: 'Paket 3 Day Bali',
          duration: '3 Hari 2 Malam',
          minPax: 2,
          description: 'Wisata essential Bali dengan destinasi ikonik',
          highlights: ['Tanah Lot', 'Ubud', 'Pantai Kuta', 'Tegallalang Rice Terrace']
        },
        {
          id: '4-day',
          name: 'Paket 4 Day Bali',
          duration: '4 Hari 3 Malam',
          minPax: 2,
          description: 'Eksplorasi lengkap Bali Selatan dan Tengah',
          highlights: ['Pura Besakih', 'Kintamani', 'Pantai Sanur', 'Monkey Forest Ubud']
        },
        {
          id: '5-day',
          name: 'Paket 5 Day Bali',
          duration: '5 Hari 4 Malam',
          minPax: 2,
          description: 'Petualangan lengkap dari pantai hingga gunung',
          highlights: ['Uluwatu', 'Sekumpul Waterfall', 'Jatiluwih', 'Bedugul']
        }
      ]
    },
    malang: {
      name: 'Malang',
      description: 'Kota apel dengan udara sejuk dan pemandangan alam yang menawan. Cocok untuk wisata keluarga dan pecinta alam.',
      image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1200',
      packages: [
        {
          id: '2-day',
          name: 'Paket 2 Day Malang',
          duration: '2 Hari 1 Malam',
          minPax: 2,
          description: 'Wisata alam dan wahana edukatif di Malang',
          highlights: ['Jatim Park 2', 'Coban Rondo', 'Kota Malang Heritage']
        },
        {
          id: '3-day',
          name: 'Paket 3 Day Malang Bromo',
          duration: '3 Hari 2 Malam',
          minPax: 2,
          description: 'Kombinasi wisata kota Malang dan sunrise Bromo',
          highlights: ['Bromo Sunrise', 'Museum Angkut', 'Alun-Alun Malang']
        }
      ]
    }
  };

  const currentDestination = destinationData[destination || ''] || destinationData.jogja;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${currentDestination.image})`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Paket Wisata {currentDestination.name}
            </h1>
            <p className="text-lg md:text-xl">
              {currentDestination.description}
            </p>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pilih Paket Wisata Anda
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tersedia berbagai pilihan paket sesuai kebutuhan dan durasi liburan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentDestination.packages.map((pkg: any) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                  <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    {pkg.duration}
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-amber-500" />
                    <span>Minimal {pkg.minPax} orang</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Highlight:</h4>
                  <div className="space-y-1">
                    {pkg.highlights.map((highlight: string, index: number) => (
                      <div key={index} className="flex items-center space-x-2">
                        <MapPin className="w-3 h-3 text-amber-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/paket/${destination}/${pkg.id}`}
                  className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 w-full justify-center group-hover:shadow-lg"
                >
                  <span>Lihat Detail & Harga</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Butuh Paket Custom?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Kami dapat menyesuaikan itinerary sesuai kebutuhan dan budget Anda. 
            Hubungi kami untuk konsultasi gratis!
          </p>
          <a
            href={`https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20paket%20custom%20untuk%20${currentDestination.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
          >
            <span>Konsultasi via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
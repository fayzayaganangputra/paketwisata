import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, MapPin, Star, Calendar, Phone } from 'lucide-react';

const PackageDetail = () => {
  const { destination, package: packageId } = useParams();

  const packageData: Record<string, any> = {
    'jogja-1-day': {
    name: 'Paket 1 Day Jogja',
    destination: 'Yogyakarta',
    duration: '1 Hari',
    image: '/images/jogja-1-day.jpg', // ganti sesuai lokasi gambarmu
    description: 'Wisata singkat namun berkesan untuk merasakan pesona Yogyakarta.',
    pricing: [
      { range: '2-5 pax', price: 'Rp 400.000', pricePerPax: true },
      { range: '6-10 pax', price: 'Rp 350.000', pricePerPax: true }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Hari Pertama',
        activities: [
          { time: '08.00', location: 'Malioboro Street', description: 'Belanja dan wisata kota' },
          { time: '11.00', location: 'Kraton Yogyakarta', description: 'Sejarah budaya Jogja' },
          { time: '14.00', location: 'Taman Sari', description: 'Istana air peninggalan Sultan' }
        ]
      }
    ],
    includes: ['Transport AC', 'Driver', 'BBM', 'Tiket wisata'],
    excludes: ['Makan & minum', 'Hotel']
  },
    'jogja-2-day': {
      name: 'Paket 2 Day Jogja',
      destination: 'Yogyakarta',
      duration: '2 Hari 1 Malam',
      image: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Paket wisata 2 hari di Yogyakarta yang menghadirkan pengalaman lengkap budaya dan sejarah kota istimewa ini.',
      pricing: [
        { range: '2-5 pax', price: 'Rp 500.000', pricePerPax: true },
        { range: '6-10 pax', price: 'Rp 450.000', pricePerPax: true },
        { range: '10-20 pax', price: 'Rp 400.000', pricePerPax: true }
      ],
      itinerary: [
        {
          day: 1,
          title: 'Hari Pertama',
          activities: [
            {
              time: '06.00',
              location: 'Candi Borobudur',
              description: 'Sunrise dan eksplorasi candi Buddha terbesar di dunia'
            },
            {
              time: '10.00',
              location: 'Malioboro Street',
              description: 'Belanja oleh-oleh dan menikmati street food khas Jogja'
            },
            {
              time: '15.00',
              location: 'Alun-Alun Kidul',
              description: 'Bermain di alun-alun dan menikmati kuliner lesehan'
            },
            {
              time: '19.00',
              location: 'Hotel Check-in',
              description: 'Istirahat di hotel pilihan'
            }
          ]
        },
        {
          day: 2,
          title: 'Hari Kedua',
          activities: [
            {
              time: '08.00',
              location: 'Candi Prambanan',
              description: 'Mengunjungi kompleks candi Hindu terbesar di Indonesia'
            },
            {
              time: '11.00',
              location: 'Tebing Breksi',
              description: 'Spot foto Instagram dengan pemandangan yang menakjubkan'
            },
            {
              time: '14.00',
              location: 'Hutan Pinus Mangunan',
              description: 'Berfoto di tengah hutan pinus yang sejuk'
            },
            {
              time: '17.00',
              location: 'Perjalanan Pulang',
              description: 'Kembali dengan kenangan indah'
            }
          ]
        }
      ],
      includes: [
        'Transport AC full',
        'Driver profesional',
        'Bahan bakar',
        'Tiket masuk wisata',
        'Parkir dan tol',
        'Asuransi perjalanan'
      ],
      excludes: [
        
        'Makan dan minum',
        'Akomodasi hotel',
        'Pengeluaran pribadi'
      ]
    },
    'jogja-3-day': {
    name: 'Paket 3 Day Jogja',
    destination: 'Yogyakarta',
    duration: '3 Hari 2 Malam',
    image: '/images/jogja-3-day.jpg',
    description: 'Paket lengkap untuk eksplorasi mendalam Yogyakarta dan sekitarnya.',
    pricing: [
      { range: '2-5 pax', price: 'Rp 1.200.000', pricePerPax: true },
      { range: '6-10 pax', price: 'Rp 1.100.000', pricePerPax: true }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Hari Pertama',
        activities: [
          { time: '08.00', location: 'Borobudur', description: 'Wisata sejarah dan budaya dunia' },
          { time: '13.00', location: 'Malioboro', description: 'Belanja dan kuliner khas Jogja' }
        ]
      },
      {
        day: 2,
        title: 'Hari Kedua',
        activities: [
          { time: '09.00', location: 'Prambanan', description: 'Candi Hindu terbesar di Indonesia' },
          { time: '14.00', location: 'Hutan Pinus', description: 'Wisata alam yang asri dan sejuk' }
        ]
      },
      {
        day: 3,
        title: 'Hari Ketiga',
        activities: [
          { time: '08.00', location: 'Tebing Breksi', description: 'Spot foto alam dan sejarah geologi' },
          { time: '13.00', location: 'Pantai Parangtritis', description: 'Pantai ikonik di selatan Jogja' }
        ]
      }
    ],
    includes: ['Transport AC', 'Driver', 'BBM', 'Tiket wisata'],
    excludes: ['Makan & minum', 'Hotel']
  },

    // ===========================
  // PAKET MALANG + BROMO 2 HARI
  // ===========================
     'malang-2-day': {
    name: 'Paket 2 Day Malang',
    destination: 'Malang',
    duration: '2 Hari 1 Malam',
    image:
      'https://images.pexels.com/photos/2611690/pexels-photo-2611690.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'Wisata alam dan wahana edukatif di Malang yang cocok untuk keluarga maupun rombongan.',
    pricing: [
      { range: '2-5 pax', price: 'Rp 600.000', pricePerPax: true },
      { range: '6-10 pax', price: 'Rp 550.000', pricePerPax: true },
      { range: '10-20 pax', price: 'Rp 500.000', pricePerPax: true },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Hari Pertama',
        activities: [
          {
            time: '08.00',
            location: 'Jatim Park 2',
            description: 'Wisata edukasi keluarga dan satwa di Batu.',
          },
          {
            time: '13.00',
            location: 'Coban Rondo',
            description: 'Air terjun alami di pegunungan Malang.',
          },
          {
            time: '16.00',
            location: 'Kota Malang Heritage',
            description: 'Jelajah kota Malang dan kuliner khas.',
          },
        ],
      },
      {
        day: 2,
        title: 'Hari Kedua',
        activities: [
          {
            time: '08.00',
            location: 'Museum Angkut',
            description: 'Museum transportasi unik di Kota Batu.',
          },
          {
            time: '12.00',
            location: 'Belanja Oleh-oleh',
            description: 'Pusat oleh-oleh khas Malang.',
          },
          {
            time: '15.00',
            location: 'Pulang',
            description: 'Kembali ke meeting point.',
          },
        ],
      },
    ],
    includes: [
      'Transport AC full',
      'Driver profesional',
      'BBM',
      'Tiket masuk wisata',
    ],
    excludes: ['Makan & Minum', 'Hotel', 'Pengeluaran pribadi'],
  },

  // ===========================
  // PAKET MALANG + BROMO 3 HARI
  // ===========================
  'malang-3-day': {
    name: 'Paket 3 Day Malang Bromo',
    destination: 'Malang',
    duration: '3 Hari 2 Malam',
    image:
      'https://images.pexels.com/photos/2777735/pexels-photo-2777735.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'Kombinasi wisata kota Malang, Batu, dan sunrise Gunung Bromo.',
    pricing: [
      { range: '2-5 pax', price: 'Rp 1.000.000', pricePerPax: true },
      { range: '6-10 pax', price: 'Rp 950.000', pricePerPax: true },
      { range: '10-20 pax', price: 'Rp 900.000', pricePerPax: true },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Hari Pertama',
        activities: [
          {
            time: '08.00',
            location: 'Museum Angkut',
            description: 'Jelajah museum transportasi.',
          },
          {
            time: '13.00',
            location: 'Alun-Alun Malang',
            description: 'Wisata kuliner dan foto-foto di alun-alun.',
          },
        ],
      },
      {
        day: 2,
        title: 'Hari Kedua',
        activities: [
          {
            time: '02.00',
            location: 'Gunung Bromo',
            description: 'Sunrise view point, Lautan Pasir, Bukit Teletubbies.',
          },
          {
            time: '10.00',
            location: 'Kembali ke Malang',
            description: 'Check-in hotel & istirahat.',
          },
        ],
      },
      {
        day: 3,
        title: 'Hari Ketiga',
        activities: [
          {
            time: '08.00',
            location: 'Selecta Batu',
            description: 'Taman bunga & kolam renang di Batu.',
          },
          {
            time: '12.00',
            location: 'Belanja Oleh-oleh',
            description: 'Shopping di pusat oleh-oleh khas Malang.',
          },
          {
            time: '15.00',
            location: 'Pulang',
            description: 'Perjalanan pulang.',
          },
        ],
      },
    ],
    includes: [
      'Transport AC full',
      'Driver profesional',
      'BBM',
      'Jeep Bromo',
      'Tiket wisata',
    ],
    excludes: ['Makan & Minum', 'Hotel', 'Pengeluaran pribadi'],
  },

  // --- Paket Bali ---
  'bali-3-day': {
    name: 'Paket 3 Day Bali',
    destination: 'Bali',
    duration: '3 Hari 2 Malam',
    image: '/images/bali-3-day.jpg',
    description: 'Wisata essential Bali dengan destinasi ikonik.',
    pricing: [
      { range: '2-5 pax', price: 'Rp 1.500.000', pricePerPax: true },
      { range: '6-10 pax', price: 'Rp 1.400.000', pricePerPax: true }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Hari Pertama',
        activities: [
          { time: '08.00', location: 'Tanah Lot', description: 'Ikon wisata pura di atas laut' },
          { time: '13.00', location: 'Ubud', description: 'Eksplorasi seni dan budaya Bali' }
        ]
      },
      {
        day: 2,
        title: 'Hari Kedua',
        activities: [
          { time: '09.00', location: 'Pantai Kuta', description: 'Wisata pantai populer dengan sunset indah' },
          { time: '15.00', location: 'Tegalalang Rice Terrace', description: 'Pemandangan sawah terasering khas Bali' }
        ]
      },
      {
        day: 3,
        title: 'Hari Ketiga',
        activities: [
          { time: '09.00', location: 'Belanja oleh-oleh', description: 'Pusat oleh-oleh khas Bali' },
          { time: '13.00', location: 'Pulang', description: 'Kembali dengan kenangan indah' }
        ]
      }
    ],
    includes: ['Transport AC', 'Driver', 'BBM', 'Tiket wisata'],
    excludes: ['Makan & minum', 'Hotel']
  },

  'bali-4-day': {
    name: 'Paket 4 Day Bali',
    destination: 'Bali',
    duration: '4 Hari 3 Malam',
    image: '/images/bali-4-day.jpg',
    description: 'Eksplorasi lengkap Bali Selatan dan Tengah.',
    pricing: [
      { range: '2-5 pax', price: 'Rp 2.000.000', pricePerPax: true },
      { range: '6-10 pax', price: 'Rp 1.900.000', pricePerPax: true }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Hari Pertama',
        activities: [
          { time: '08.00', location: 'Pura Besakih', description: 'Pura terbesar dan termegah di Bali' },
          { time: '14.00', location: 'Kintamani', description: 'Pemandangan Gunung Batur dan Danau Batur' }
        ]
      },
      {
        day: 2,
        title: 'Hari Kedua',
        activities: [
          { time: '09.00', location: 'Pantai Sanur', description: 'Pantai tenang dengan sunrise indah' },
          { time: '13.00', location: 'Monkey Forest Ubud', description: 'Hutan dengan kera jinak & pura kuno' }
        ]
      },
      {
        day: 3,
        title: 'Hari Ketiga',
        activities: [
          { time: '09.00', location: 'Ubud Traditional Market', description: 'Pasar seni & kerajinan tangan Bali' },
          { time: '14.00', location: 'Goa Gajah', description: 'Peninggalan arkeologi Hindu-Buddha' }
        ]
      },
      {
        day: 4,
        title: 'Hari Keempat',
        activities: [
          { time: '10.00', location: 'Pulang', description: 'Kembali dengan pengalaman berkesan' }
        ]
      }
    ],
    includes: ['Transport AC', 'Driver', 'BBM', 'Tiket wisata'],
    excludes: ['Makan & minum', 'Hotel']
  },

  'bali-5-day': {
    name: 'Paket 5 Day Bali',
    destination: 'Bali',
    duration: '5 Hari 4 Malam',
    image: '/images/bali-5-day.jpg',
    description: 'Petualangan lengkap dari pantai hingga gunung di Bali.',
    pricing: [
      { range: '2-5 pax', price: 'Rp 2.800.000', pricePerPax: true },
      { range: '6-10 pax', price: 'Rp 2.600.000', pricePerPax: true }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Hari Pertama',
        activities: [
          { time: '08.00', location: 'Uluwatu', description: 'Pura tepi tebing dengan sunset indah' }
        ]
      },
      {
        day: 2,
        title: 'Hari Kedua',
        activities: [
          { time: '09.00', location: 'Sekumpul Waterfall', description: 'Air terjun paling indah di Bali Utara' }
        ]
      },
      {
        day: 3,
        title: 'Hari Ketiga',
        activities: [
          { time: '09.00', location: 'Jatiluwih', description: 'Warisan dunia UNESCO berupa sawah terasering' }
        ]
      },
      {
        day: 4,
        title: 'Hari Keempat',
        activities: [
          { time: '09.00', location: 'Bedugul', description: 'Pura Ulun Danu Bratan di tepi danau' }
        ]
      },
      {
        day: 5,
        title: 'Hari Kelima',
        activities: [
          { time: '10.00', location: 'Pulang', description: 'Kembali dengan pengalaman lengkap menjelajah Bali' }
        ]
      }
    ],
    includes: ['Transport AC', 'Driver', 'BBM', 'Tiket wisata'],
    excludes: ['Makan & minum', 'Hotel']
  },
  };

  const currentPackage = packageData[`${destination}-${packageId}`] || packageData['jogja-2-day'];
  const whatsappMessage = `Halo, saya tertarik dengan ${currentPackage.name}. Bisa info lebih detail?`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${currentPackage.image})`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {currentPackage.name}
            </h1>
            <p className="text-lg md:text-xl mb-2">
              {currentPackage.destination}
            </p>
            <div className="flex items-center justify-center space-x-4 text-amber-200">
              <div className="flex items-center space-x-1">
                <Clock className="w-5 h-5" />
                <span>{currentPackage.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5" />
                <span>Highly Rated</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Deskripsi Paket</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {currentPackage.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Termasuk:</h3>
                  <ul className="space-y-2">
                    {currentPackage.includes.map((item: string, index: number) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Tidak Termasuk:</h3>
                  <ul className="space-y-2">
                    {currentPackage.excludes.map((item: string, index: number) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Itinerary</h2>
              <div className="space-y-8">
                {currentPackage.itinerary.map((day: any) => (
                  <div key={day.day}>
                    <h3 className="text-xl font-bold text-amber-600 mb-4 flex items-center space-x-2">
                      <Calendar className="w-5 h-5" />
                      <span>{day.title}</span>
                    </h3>
                    <div className="space-y-4">
                      {day.activities.map((activity: any, index: number) => (
                        <div key={index} className="flex space-x-4 p-4 bg-gray-50 rounded-lg">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                              <span className="text-amber-600 font-semibold text-sm">{activity.time}</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <MapPin className="w-4 h-4 text-amber-500" />
                              <h4 className="font-semibold text-gray-900">{activity.location}</h4>
                            </div>
                            <p className="text-gray-600 text-sm">{activity.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Harga Per Pax</h3>
              
              <div className="space-y-4 mb-8">
                {currentPackage.pricing.map((price: any, index: number) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-amber-500" />
                      <span className="font-medium text-gray-900">{price.range}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-amber-600">{price.price}</span>
                      {price.pricePerPax && <span className="text-sm text-gray-500 block">/ pax</span>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <a
                  href={`https://wa.me/6281234567890?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-4 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Pesan Sekarang via WhatsApp</span>
                </a>
                
                <div className="text-center text-sm text-gray-500">
                  <p>💬 Respon cepat</p>
                  <p>✅ Gratis konsultasi itinerary</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Info Penting:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Minimal booking 2 orang</li>
                  <li>• Harga dapat berubah saat high season</li>
                  <li>• Gratis revisi itinerary 1x</li>
                  <li>• Booking min. H-1 sebelum keberangkatan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
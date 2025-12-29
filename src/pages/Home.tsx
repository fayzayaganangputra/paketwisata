import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, Star, MapPin, Car, Award, Shield, Clock, Fuel, CheckCircle, Quote, ThumbsUp, TrendingUp, Target } from 'lucide-react';

const Home = () => {
  const tourPackages = [
    {
      id: 'jogja',
      name: 'Jogja',
      image: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Kota budaya dengan pesona istimewa'
    },
    {
      id: 'bali',
      name: 'Bali',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Pulau dewata yang memukau'
    },
    {
      id: 'malang',
      name: 'Malang',
      image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Kota apel dengan udara sejuk'
    },
    {
      id: 'karimunjawa',
      name: 'Karimunjawa',
      image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Kepulauan tropis yang eksotis'
    }
  ];

  const carRentals = [
    {
      name: 'Toyota Avanza',
      capacity: '6 orang',
      price: 'Rp 550.000',
      image: '/paketwisata/images/armada1.png',
      specs: ['BBM Included', 'Driver Profesional', 'AC & Audio', 'Pemakaian 12 Jam/Day']
    },
    {
      name: 'Toyota Innova',
      capacity: '7 orang',
      price: 'Rp 750.000',
      image: '/paketwisata/images/reborn.png',
      specs: ['BBM Included', 'Driver Profesional', 'AC & Audio', 'Pemakaian 12 Jam/Day']
    },
    {
      name: 'Hiace',
      capacity: '15 orang',
      price: 'Rp 1.200.000',
      image: '/paketwisata/images/armada2.png',
      specs: ['BBM Included', 'Driver Profesional', 'AC & Audio', 'Pemakaian 12 Jam/Day']
    }
  ];

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Candi Borobudur',
      title: 'Candi Borobudur'
    },
    {
      src: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Pantai Bali',
      title: 'Pantai Bali'
    },
    {
      src: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Malang',
      title: 'Kota Malang'
    },
    {
      src: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Karimunjawa',
      title: 'Karimunjawa'
    },
    {
      src: 'https://images.pexels.com/photos/3250364/pexels-photo-3250364.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Semarang',
      title: 'Kota Lama Semarang'
    },
    {
      src: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Rental Car',
      title: 'Armada Berkualitas'
    }
  ];

  const whatsappMessage = "Halo, saya ingin bertanya tentang layanan Rentalku Yogyakarta";

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1600)'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Rentalku Yogyakarta
            </h1>
            <p className="text-lg md:text-xl mb-4">Paket Wisata & Sewa Mobil</p>
            <p className="text-xl md:text-2xl mb-8 text-amber-200">
              Liburan mudah, hemat, dan berkesan bersama kami
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/paket-wisata"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <MapPin className="w-5 h-5" />
                <span>Lihat Paket Wisata</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/sewa-mobil"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Car className="w-5 h-5" />
                <span>Sewa Mobil Sekarang</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-4 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg font-semibold">
              🎉 PROMO SPESIAL! Diskon 15% untuk booking paket wisata bulan ini! 
              <a 
                href={`https://wa.me/6281234567890?text=${whatsappMessage} - Promo Diskon 15%`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 underline hover:no-underline"
              >
                Hubungi Sekarang →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tentang Rentalku Yogyakarta
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami adalah penyedia layanan wisata dan transportasi terpercaya yang telah melayani ribuan wisatawan 
              dengan pengalaman tak terlupakan di berbagai destinasi menarik di Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">5+ Tahun Pengalaman</h3>
              <p className="text-gray-600">Melayani wisatawan dengan dedikasi tinggi sejak 2019</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">10,000+ Wisatawan</h3>
              <p className="text-gray-600">Telah melayani ribuan wisatawan dengan kepuasan maksimal</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Terpercaya & Aman</h3>
              <p className="text-gray-600">Layanan berlisensi resmi dengan standar keamanan tinggi</p>
            </div>
          </div>
        </div>
      </section>


      {/* Car Rental Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Pilihan Kendaraan Sewa
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Armada berkualitas dengan driver profesional untuk perjalanan yang aman dan nyaman
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {carRentals.map((car, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
          <img
            src={car.image}
            alt={car.name}
            className="w-full object-cover rounded-t-xl"
          />

          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {car.name}
            </h3>

            <div className="flex items-center space-x-2 mb-4 text-gray-600">
              <Users className="w-4 h-4" />
              <span className="text-sm">Kapasitas {car.capacity}</span>
            </div>

            <h4 className="font-semibold text-gray-900 mb-2">
              Spesifikasi:
            </h4>

            <div className="space-y-1 mb-4">
              {car.specs.map((spec, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">{spec}</span>
                </div>
              ))}
            </div>

            <div className="text-2xl font-bold text-amber-600 mb-4">
              {car.price}
              <span className="text-sm text-gray-500 font-normal">
                {' '} / hari
              </span>
            </div>

            <a
              href={`https://wa.me/6281234567890?text=${whatsappMessage} - ${car.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      ))}
    </div>

    {/* === BUTTON LIHAT SEMUA ARMADA === */}
    <div className="text-center mt-12">
      <Link
        to="/sewa-mobil"
        className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-10 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
      >
        <Car className="w-5 h-5" />
        Lihat Semua Armada
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  </div>
</section>



      {/* Tour Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Paket Wisata Populer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jelajahi keindahan Indonesia dengan paket wisata terpercaya dan harga terjangkau
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in">
                <div className="relative">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{pkg.name}</h3>
                    <p className="text-sm text-gray-200">{pkg.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <Link
                    to={`/destinasi/${pkg.id}`}
                    className="block w-full bg-amber-500 hover:bg-amber-600 text-white text-center py-2 px-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Galeri Perjalanan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lihat momen-momen indah dari perjalanan wisata bersama kami
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                    {image.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Artikel Terbaru
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Tips, panduan, dan informasi menarik seputar wisata Indonesia
      </p>
    </div>

    {/* Articles Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "10 Destinasi Wajib Dikunjungi di Yogyakarta",
          excerpt: "Panduan lengkap tempat wisata terbaik di Kota Gudeg yang tidak boleh dilewatkan...",
          image: "https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=600",
          date: "15 Januari 2025",
          slug: "destinasi-wajib-yogyakarta"
        },
        {
          title: "Tips Hemat Liburan ke Bali untuk Pemula",
          excerpt: "Cara menikmati keindahan Pulau Dewata dengan budget terbatas namun pengalaman maksimal...",
          image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=600",
          date: "12 Januari 2025",
          slug: "tips-hemat-liburan-bali"
        },
        {
          title: "Panduan Lengkap Sunrise Bromo dari Malang",
          excerpt: "Persiapan dan tips untuk menikmati momen sunrise terbaik di Gunung Bromo...",
          image: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600",
          date: "10 Januari 2025",
          slug: "panduan-sunrise-bromo"
        }
      ].map((article, index) => (
        <Link
          key={index}
          to={`/artikel/${article.slug}`}
          className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="text-sm text-amber-600 mb-2">{article.date}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-200">
              {article.title}
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
              {article.excerpt}
            </p>
            <span className="inline-flex items-center space-x-2 text-amber-600 font-semibold transition-colors duration-200 group-hover:text-amber-700">
              <span>Baca Selengkapnya</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>
      ))}
    </div>

    {/* View All Button */}
    <div className="text-center mt-12">
      <Link
        to="/artikel"
        className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
      >
        <span>Lihat Semua Artikel</span>
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  </div>
</section>

      {/* Testimonials Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Testimoni Pelanggan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dengarkan pengalaman nyata dari pelanggan yang telah merasakan layanan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sari Indah",
                location: "Jakarta",
                rating: 5,
                comment: "Pelayanan sangat memuaskan! Driver ramah dan profesional. Paket wisata Jogja 2 hari sangat worth it. Pasti akan menggunakan jasa mereka lagi.",
                image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150"
              },
              {
                name: "Budi Santoso",
                location: "Surabaya",
                rating: 5,
                comment: "Liburan keluarga ke Bali jadi sangat berkesan. Itinerary fleksibel dan sesuai budget. Tim Rentalku sangat membantu dari awal sampai akhir perjalanan.",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
              },
              {
                name: "Maya Putri",
                location: "Bandung",
                rating: 5,
                comment: "Sunrise Bromo trip yang luar biasa! Mobil nyaman, driver berpengalaman, dan harga sangat kompetitif. Highly recommended untuk yang mau liburan hassle-free.",
                image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="w-6 h-6 text-amber-400 mb-2" />
                  <p className="text-gray-600 italic leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimoni"
              className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <span>Lihat Semua Testimoni</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kenapa Pilih Rentalku Yogyakarta?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Berpengalaman</h3>
              <p className="text-gray-300">Melayani ribuan wisatawan dengan kepuasan terjamin</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Driver Profesional</h3>
              <p className="text-gray-300">Tim driver berpengalaman dan berlisensi resmi</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fleksibel</h3>
              <p className="text-gray-300">Paket wisata dan jadwal yang dapat disesuaikan</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
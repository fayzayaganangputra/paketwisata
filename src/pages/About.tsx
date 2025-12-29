import React from 'react';
import { Award, Users, Shield, Star, Clock, MapPin, Car, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '5+', label: 'Tahun Pengalaman', icon: <Clock className="w-8 h-8" /> },
    { number: '10,000+', label: 'Wisatawan Dilayani', icon: <Users className="w-8 h-8" /> },
    { number: '50+', label: 'Destinasi Wisata', icon: <MapPin className="w-8 h-8" /> },
    { number: '25+', label: 'Armada Kendaraan', icon: <Car className="w-8 h-8" /> }
  ];

  const values = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Pelayanan Terbaik',
      description: 'Kami berkomitmen memberikan pelayanan terbaik dengan sepenuh hati untuk setiap wisatawan'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Keamanan Terjamin',
      description: 'Keselamatan dan kenyamanan Anda adalah prioritas utama dalam setiap perjalanan'
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: 'Kualitas Premium',
      description: 'Armada berkualitas tinggi dan driver profesional untuk pengalaman wisata yang tak terlupakan'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Terpercaya',
      description: 'Dipercaya ribuan wisatawan dengan rating tinggi dan testimoni positif'
    }
  ];

  const team = [
    {
      name: 'Budi Santoso',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Berpengalaman 10+ tahun di industri pariwisata Indonesia'
    },
    {
      name: 'Sari Dewi',
      position: 'Operations Manager',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Ahli dalam perencanaan itinerary dan koordinasi perjalanan'
    },
    {
      name: 'Ahmad Rizki',
      position: 'Fleet Manager',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Mengelola armada kendaraan dan memastikan kualitas layanan'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1200)'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Tentang Rentalku Yogyakarta
            </h1>
            <p className="text-lg md:text-xl animate-fade-in">
              Mitra terpercaya untuk petualangan wisata dan transportasi berkualitas di Indonesia
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:shadow-lg transition-shadow duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cerita Kami
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Rentalku Yogyakarta didirikan pada tahun 2019 dengan visi menjadi penyedia layanan 
                  wisata dan transportasi terdepan di Indonesia. Berawal dari kecintaan terhadap keindahan 
                  alam dan budaya Indonesia, kami berkomitmen untuk memberikan pengalaman wisata yang 
                  tak terlupakan bagi setiap wisatawan.
                </p>
                <p>
                  Dengan pengalaman lebih dari 5 tahun, kami telah melayani ribuan wisatawan dari berbagai 
                  daerah dan negara. Tim profesional kami terdiri dari driver berpengalaman, guide wisata 
                  berlisensi, dan staff customer service yang siap membantu 24/7.
                </p>
                <p>
                  Kepercayaan yang diberikan wisatawan kepada kami adalah amanah yang kami jaga dengan 
                  sepenuh hati. Setiap perjalanan yang kami fasilitasi adalah kesempatan untuk menciptakan 
                  kenangan indah dan pengalaman berharga.
                </p>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Story"
                className="w-full h-96 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi dalam setiap layanan yang kami berikan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:shadow-lg transition-shadow duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tim Profesional Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Orang-orang berpengalaman yang berdedikasi untuk memberikan layanan terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-amber-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Memulai Petualangan Anda?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Bergabunglah dengan ribuan wisatawan yang telah mempercayakan perjalanan mereka kepada kami. 
            Hubungi tim kami sekarang untuk konsultasi gratis!
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20layanan%20Laju%20Tuju%20Yogyakarta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105"
          >
            <span>Konsultasi Gratis Sekarang</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
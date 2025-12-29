import React from 'react';
import { Star, Quote, MapPin, Calendar } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sari Indah",
      location: "Jakarta",
      rating: 5,
      date: "Desember 2024",
      trip: "Paket 2 Day Jogja",
      comment: "Pelayanan sangat memuaskan! Driver ramah dan profesional. Paket wisata Jogja 2 hari sangat worth it. Itinerary fleksibel dan sesuai dengan keinginan kami. Pasti akan menggunakan jasa mereka lagi untuk trip selanjutnya.",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300",
      highlights: ["Driver Profesional", "Itinerary Fleksibel", "Harga Terjangkau"]
    },
    {
      id: 2,
      name: "Budi Santoso",
      location: "Surabaya",
      rating: 5,
      date: "November 2024",
      trip: "Paket 4 Day Bali",
      comment: "Liburan keluarga ke Bali jadi sangat berkesan. Itinerary fleksibel dan sesuai budget. Tim Rentalku sangat membantu dari awal sampai akhir perjalanan. Anak-anak senang sekali dengan destinasi yang dipilih.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      highlights: ["Family Friendly", "Budget Sesuai", "Pelayanan Lengkap"]
    },
    {
      id: 3,
      name: "Maya Putri",
      location: "Bandung",
      rating: 5,
      date: "Oktober 2024",
      trip: "Paket 3 Day Malang Bromo",
      comment: "Sunrise Bromo trip yang luar biasa! Mobil nyaman, driver berpengalaman, dan harga sangat kompetitif. Highly recommended untuk yang mau liburan hassle-free. Pengalaman yang tidak akan terlupakan!",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300",
      highlights: ["Sunrise Bromo", "Mobil Nyaman", "Harga Kompetitif"]
    },
    {
      id: 4,
      name: "Andi Wijaya",
      location: "Medan",
      rating: 5,
      date: "September 2024",
      trip: "Sewa Mobil Innova",
      comment: "Sewa mobil untuk acara keluarga di Jogja. Mobil bersih, driver sangat ramah dan tahu betul jalan-jalan di Jogja. Pelayanan customer service juga responsif. Terima kasih Rentalku!",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      highlights: ["Mobil Bersih", "Driver Lokal", "CS Responsif"]
    },
    {
      id: 5,
      name: "Dewi Sartika",
      location: "Makassar",
      rating: 5,
      date: "Agustus 2024",
      trip: "Paket 3 Day Karimunjawa",
      comment: "Trip Karimunjawa yang amazing! Dari transportasi darat sampai kapal, semuanya diatur dengan baik. Snorkeling dan island hopping-nya seru banget. Tim guide juga informatif dan friendly.",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300",
      highlights: ["Transportasi Lengkap", "Guide Informatif", "Island Hopping"]
    },
    {
      id: 6,
      name: "Rizki Pratama",
      location: "Palembang",
      rating: 5,
      date: "Juli 2024",
      trip: "Paket 2 Day Semarang",
      comment: "Pertama kali ke Semarang dan tidak menyesal pilih Rentalku. Destinasi wisata yang dipilih bagus-bagus, mulai dari Kota Lama sampai Lawang Sewu. Driver juga kasih rekomendasi kuliner enak!",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300",
      highlights: ["Destinasi Bagus", "Rekomendasi Kuliner", "Pengalaman Pertama"]
    },
    {
      id: 7,
      name: "Linda Sari",
      location: "Balikpapan",
      rating: 5,
      date: "Juni 2024",
      trip: "Paket Custom Jogja-Solo",
      comment: "Request paket custom Jogja-Solo untuk rombongan kantor dan hasilnya memuaskan sekali. Semua request kami diakomodir dengan baik. Harga juga masuk akal untuk group 20 orang. Recommended!",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300",
      highlights: ["Paket Custom", "Group Besar", "Harga Masuk Akal"]
    },
    {
      id: 8,
      name: "Fajar Nugroho",
      location: "Pontianak",
      rating: 5,
      date: "Mei 2024",
      trip: "Sewa Mobil Hiace",
      comment: "Sewa Hiace untuk rombongan keluarga besar. Mobil terawat dengan baik, AC dingin, dan driver sangat sabar menghadapi anak-anak yang aktif. Pelayanan after sales juga bagus, ada follow up setelah trip.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      highlights: ["Mobil Terawat", "Driver Sabar", "Follow Up Bagus"]
    },
    {
      id: 9,
      name: "Sinta Maharani",
      location: "Batam",
      rating: 5,
      date: "April 2024",
      trip: "Paket 5 Day Bali",
      comment: "Honeymoon trip ke Bali yang sempurna! Semua destinasi romantis dan instagramable. Driver juga membantu foto-foto kami. Terima kasih sudah membuat honeymoon kami jadi tak terlupakan!",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300",
      highlights: ["Honeymoon Trip", "Destinasi Romantis", "Foto Membantu"]
    }
  ];

  const stats = [
    { number: '4.9/5', label: 'Rating Rata-rata', icon: <Star className="w-8 h-8" /> },
    { number: '1,200+', label: 'Testimoni Positif', icon: <Quote className="w-8 h-8" /> },
    { number: '98%', label: 'Tingkat Kepuasan', icon: <Star className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Testimoni Pelanggan
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dengarkan pengalaman nyata dari ribuan pelanggan yang telah merasakan layanan terbaik kami
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-3 h-3" />
                    <span>{testimonial.location}</span>
                    <span>•</span>
                    <Calendar className="w-3 h-3" />
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-sm font-medium text-gray-600">
                  {testimonial.trip}
                </span>
              </div>

              {/* Comment */}
              <div className="relative mb-4">
                <Quote className="w-6 h-6 text-amber-400 mb-2" />
                <p className="text-gray-600 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {testimonial.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ingin Menjadi Bagian dari Testimoni Positif?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Bergabunglah dengan ribuan pelanggan yang telah merasakan pengalaman wisata tak terlupakan bersama kami
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20merencanakan%20liburan%20bersama%20Laju%20Tuju%20Yogyakarta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105"
          >
            <span>Mulai Perjalanan Anda</span>
          </a>
        </div>
      </div>

      {/* Review Form CTA */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sudah Pernah Menggunakan Layanan Kami?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Bagikan pengalaman Anda dan bantu calon wisatawan lain untuk merasakan pengalaman yang sama
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memberikan%20testimoni%20untuk%20layanan%20Laju%20Tuju%20Yogyakarta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <Quote className="w-5 h-5" />
              <span>Kirim Testimoni</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "10 Destinasi Wajib Dikunjungi di Yogyakarta",
      slug: "destinasi-wajib-yogyakarta",
      excerpt: "Panduan lengkap tempat wisata terbaik di Kota Gudeg yang tidak boleh dilewatkan. Dari wisata sejarah hingga kuliner legendaris.",
      content: "Yogyakarta memiliki banyak destinasi wisata menarik...",
      image: "https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Tim Rentalku",
      date: "15 Januari 2025",
      readTime: "5 menit",
      category: "Destinasi"
    },
    {
      id: 2,
      title: "Tips Hemat Liburan ke Bali untuk Pemula",
      slug: "tips-hemat-liburan-bali",
      excerpt: "Cara menikmati keindahan Pulau Dewata dengan budget terbatas namun pengalaman maksimal. Tips dan trik dari para traveler berpengalaman.",
      content: "Bali tidak harus mahal jika Anda tahu caranya...",
      image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Tim Rentalku",
      date: "12 Januari 2025",
      readTime: "7 menit",
      category: "Tips Travel"
    },
    {
      id: 3,
      title: "Panduan Lengkap Sunrise Bromo dari Malang",
      slug: "panduan-sunrise-bromo",
      excerpt: "Persiapan dan tips untuk menikmati momen sunrise terbaik di Gunung Bromo. Mulai dari persiapan hingga spot foto terbaik.",
      content: "Sunrise di Bromo adalah pengalaman yang tak terlupakan...",
      image: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Tim Rentalku",
      date: "10 Januari 2025",
      readTime: "6 menit",
      category: "Adventure"
    },
    {
      id: 4,
      title: "Kuliner Khas Yogyakarta yang Wajib Dicoba",
      slug: "kuliner-khas-yogyakarta",
      excerpt: "Jelajahi cita rasa autentik Yogyakarta melalui kuliner khasnya. Dari gudeg hingga bakpia, semua ada di sini.",
      content: "Yogyakarta terkenal dengan kekayaan kulinernya...",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Tim Rentalku",
      date: "8 Januari 2025",
      readTime: "4 menit",
      category: "Kuliner"
    },
    {
      id: 5,
      title: "Persiapan Liburan ke Karimunjawa",
      slug: "persiapan-liburan-karimunjawa",
      excerpt: "Panduan lengkap untuk liburan ke kepulauan eksotis Karimunjawa. Tips transportasi, akomodasi, dan aktivitas menarik.",
      content: "Karimunjawa menawarkan keindahan bawah laut yang memukau...",
      image: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Tim Rentalku",
      date: "5 Januari 2025",
      readTime: "8 menit",
      category: "Destinasi"
    },
    {
      id: 6,
      title: "Cara Memilih Paket Wisata yang Tepat",
      slug: "cara-memilih-paket-wisata",
      excerpt: "Tips memilih paket wisata yang sesuai dengan kebutuhan dan budget Anda. Hindari kesalahan umum dalam memilih travel agent.",
      content: "Memilih paket wisata yang tepat sangat penting...",
      image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Tim Rentalku",
      date: "3 Januari 2025",
      readTime: "5 menit",
      category: "Tips Travel"
    }
  ];

  const categories = ["Semua", "Destinasi", "Tips Travel", "Adventure", "Kuliner"];
  const [selectedCategory, setSelectedCategory] = React.useState("Semua");

  const filteredArticles = selectedCategory === "Semua" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Artikel & Tips Wisata
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Temukan informasi menarik, tips perjalanan, dan panduan wisata untuk membuat liburan Anda lebih berkesan
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-amber-50 hover:text-amber-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-200">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{article.author}</span>
                  </div>
                  <Link
                    to={`/artikel/${article.slug}`}
                    className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-200"
                  >
                    <span>Baca</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Siap Merencanakan Liburan?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk konsultasi gratis dan dapatkan paket wisata terbaik sesuai kebutuhan Anda
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20paket%20wisata"
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

export default Articles;
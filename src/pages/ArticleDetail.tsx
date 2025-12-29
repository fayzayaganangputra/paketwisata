import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Heart } from 'lucide-react';

const ArticleDetail = () => {
  const { slug } = useParams();

  const articles: Record<string, any> = {
    'destinasi-wajib-yogyakarta': {
      title: "10 Destinasi Wajib Dikunjungi di Yogyakarta",
      image: "https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1200",
      author: "Tim Rentalku",
      date: "15 Januari 2025",
      readTime: "5 menit",
      category: "Destinasi",
      content: `
        <p>Yogyakarta, atau yang akrab disapa Jogja, adalah salah satu destinasi wisata terpopuler di Indonesia. Kota istimewa ini menawarkan perpaduan sempurna antara wisata budaya, sejarah, dan kuliner yang tak terlupakan.</p>

        <h2>1. Candi Borobudur</h2>
        <p>Candi Buddha terbesar di dunia ini wajib menjadi destinasi pertama Anda. Nikmati sunrise yang memukau dari puncak candi sambil merasakan keagungan arsitektur kuno yang menakjubkan.</p>

        <h2>2. Malioboro Street</h2>
        <p>Jantung kota Yogyakarta yang tidak pernah tidur. Di sini Anda bisa berbelanja oleh-oleh, menikmati street food, dan merasakan kehidupan malam Jogja yang meriah.</p>

        <h2>3. Kraton Yogyakarta</h2>
        <p>Istana Sultan yang masih berfungsi hingga kini. Jelajahi museum, taman, dan arsitektur Jawa yang memukau sambil belajar tentang sejarah kerajaan Mataram.</p>

        <h2>4. Taman Sari</h2>
        <p>Bekas taman kerajaan yang kini menjadi kompleks wisata menarik. Jangan lewatkan foto di sumur gumuling yang instagramable!</p>

        <h2>5. Alun-Alun Kidul</h2>
        <p>Tempat berkumpulnya warga Jogja di malam hari. Coba tantangan masangin mata untuk berjalan lurus di antara dua pohon beringin!</p>

        <p>Masih ada 5 destinasi lainnya yang tidak kalah menarik. Hubungi kami untuk mendapatkan paket wisata lengkap Yogyakarta!</p>
      `
    },
    'tips-hemat-liburan-bali': {
      title: "Tips Hemat Liburan ke Bali untuk Pemula",
      image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200",
      author: "Tim Rentalku",
      date: "12 Januari 2025",
      readTime: "7 menit",
      category: "Tips Travel",
      content: `
        <p>Bali memang terkenal sebagai destinasi wisata yang mahal, tapi sebenarnya Anda bisa menikmati keindahan Pulau Dewata dengan budget terbatas. Berikut tips hemat liburan ke Bali:</p>

        <h2>1. Pilih Waktu yang Tepat</h2>
        <p>Hindari high season (Juli-Agustus dan Desember-Januari). Pilih bulan April-Juni atau September-November untuk harga yang lebih terjangkau.</p>

        <h2>2. Cari Akomodasi di Luar Area Turis</h2>
        <p>Menginap di daerah seperti Denpasar atau Gianyar bisa menghemat budget hingga 50% dibanding menginap di Seminyak atau Kuta.</p>

        <h2>3. Gunakan Transportasi Lokal</h2>
        <p>Sewa motor atau gunakan ojek online untuk transportasi sehari-hari. Lebih murah dan fleksibel dibanding sewa mobil.</p>

        <h2>4. Makan di Warung Lokal</h2>
        <p>Warung makan lokal menawarkan makanan autentik dengan harga yang sangat terjangkau. Nasi campur Bali hanya Rp 15.000-25.000!</p>

        <h2>5. Manfaatkan Pantai Gratis</h2>
        <p>Banyak pantai indah di Bali yang gratis dikunjungi seperti Pantai Sanur, Jimbaran, dan Padang Padang.</p>

        <p>Dengan perencanaan yang baik, liburan ke Bali dengan budget Rp 2-3 juta untuk 4 hari sangat mungkin!</p>
      `
    },
    'panduan-sunrise-bromo': {
      title: "Panduan Lengkap Sunrise Bromo dari Malang",
      image: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1200",
      author: "Tim Rentalku",
      date: "10 Januari 2025",
      readTime: "6 menit",
      category: "Adventure",
      content: `
        <p>Sunrise di Gunung Bromo adalah salah satu pengalaman paling menakjubkan yang bisa Anda dapatkan di Indonesia. Berikut panduan lengkap untuk trip sunrise Bromo dari Malang:</p>

        <h2>Persiapan Sebelum Berangkat</h2>
        <p>Siapkan jaket tebal, sepatu trekking, senter, dan kamera. Suhu di Bromo bisa mencapai 2-5°C di pagi hari!</p>

        <h2>Jadwal Perjalanan</h2>
        <ul>
          <li><strong>23.00:</strong> Berangkat dari Malang menuju Cemoro Lawang</li>
          <li><strong>01.00:</strong> Tiba di Cemoro Lawang, istirahat sejenak</li>
          <li><strong>03.30:</strong> Berangkat ke Penanjakan 1 untuk sunrise</li>
          <li><strong>05.30:</strong> Menikmati sunrise terbaik</li>
          <li><strong>07.00:</strong> Turun ke kawah Bromo</li>
          <li><strong>09.00:</strong> Kembali ke Malang</li>
        </ul>

        <h2>Spot Foto Terbaik</h2>
        <p>Penanjakan 1 adalah spot terbaik untuk sunrise. Datang lebih awal untuk mendapatkan posisi terdepan. Jangan lupa foto di lautan pasir dan kawah Bromo!</p>

        <h2>Tips Penting</h2>
        <ul>
          <li>Booking jeep H-1 untuk memastikan ketersediaan</li>
          <li>Bawa masker untuk melindungi dari debu vulkanik</li>
          <li>Siapkan uang cash untuk tiket masuk dan parkir</li>
          <li>Charge kamera/HP penuh karena cuaca dingin menguras baterai</li>
        </ul>

        <p>Dengan persiapan yang matang, pengalaman sunrise Bromo akan menjadi kenangan tak terlupakan!</p>
      `
    }
  };

  const currentArticle = articles[slug || ''] || articles['destinasi-wajib-yogyakarta'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${currentArticle.image})`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <div className="mb-4">
              <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                {currentArticle.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {currentArticle.title}
            </h1>
            <div className="flex items-center justify-center space-x-6 text-amber-200">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{currentArticle.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{currentArticle.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{currentArticle.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/artikel"
            className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Artikel</span>
          </Link>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 lg:p-12">
            {/* Social Share */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors duration-200">
                  <Heart className="w-5 h-5" />
                  <span>Suka</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors duration-200">
                  <Share2 className="w-5 h-5" />
                  <span>Bagikan</span>
                </button>
              </div>
            </div>

            {/* Article Body */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: currentArticle.content }}
            />

            {/* CTA Section */}
            <div className="mt-12 p-6 bg-amber-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Tertarik dengan destinasi ini?
              </h3>
              <p className="text-gray-600 mb-4">
                Hubungi kami untuk mendapatkan paket wisata terbaik dan konsultasi gratis!
              </p>
              <a
                href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20paket%20wisata%20setelah%20membaca%20artikel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <span>Konsultasi via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Artikel Terkait</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(articles)
              .filter(([key]) => key !== slug)
              .slice(0, 2)
              .map(([key, article]) => (
                <div key={key} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="text-sm text-amber-600 mb-2">{article.date}</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 hover:text-amber-600 transition-colors duration-200">
                      {article.title}
                    </h4>
                    <Link
                      to={`/artikel/${key}`}
                      className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-200"
                    >
                      <span>Baca Artikel</span>
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
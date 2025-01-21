import backgroundImage from '../assets/gambar/about-bg.png';
import premiumImage from '../assets/gambar/Kaos/kaos14.jpeg'; 
import creativityImage from '../assets/gambar/Kaos/kaos12.jpeg'; 
import fastServiceImage from '../assets/gambar/Kaos/kaos13.jpeg';

const About = () => {
  return (
    <div className="relative w-full">
      {/* Background Image Section */}
      <div
        className="relative flex flex-col items-center justify-center h-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Text Content */}
        <div className="relative text-center">
          <h1 className="text-white text-4xl font-bold">About UNIVY</h1>
          <p className="text-white text-lg max-w-3xl mt-4">
            UNIVY hadir sebagai solusi bagi Anda yang ingin menciptakan sesuatu yang unik dan spesial. Kami menawarkan berbagai produk custom, mulai dari kaos, mug, tote bag, stiker, tumbler, hingga polaroid foto, yang semuanya dapat Anda desain sendiri sesuai keinginan. Dengan menggabungkan teknologi cetak modern dan bahan berkualitas tinggi, kami percaya setiap desain memiliki cerita, dan kami ada untuk membantu mewujudkannya.
          </p>
        </div>
      </div>

      {/* Text Below Background */}
      <div className="flex items-center justify-center bg-white py-8">
        <h2 className="text-3xl font-extrabold text-black text-center">
          Kenapa Harus Memilih UNIVY!
        </h2>
      </div>

      {/* Kualitas Premium Section */}
      <div className="flex flex-col md:flex-row-reverse items-center bg-blue-100 py-12 px-6">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={premiumImage}
            alt="Kualitas Premium"
            className="w-full max-w-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
        {/* Text */}
        <div className="md:w-1/2 text-left">
          <h3 className="text-2xl font-bold text-black mb-4">Kualitas Premium</h3>
          <p className="text-lg text-gray-700">
            Kami berkomitmen untuk selalu memberikan yang terbaik dengan memastikan setiap produk dibuat menggunakan bahan pilihan berkualitas tinggi. Dengan perhatian terhadap detail dan standar yang ketat, kami memastikan hasil akhir yang maksimal dan memuaskan. Kepercayaan Anda adalah motivasi kami untuk terus menghadirkan produk yang tak hanya indah, tetapi juga tahan lama dan fungsional.
          </p>
        </div>
      </div>

      {/* Kebebasan Kreativitas Section */}
      <div className="flex flex-col md:flex-row items-center bg-white py-12 px-6">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={creativityImage}
            alt="Kebebasan Kreativitas"
            className="w-full max-w-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
        {/* Text */}
        <div className="md:w-1/2 text-left">
          <h3 className="text-2xl font-bold text-black mb-4">Kebebasan Kreativitas</h3>
          <p className="text-lg text-gray-700">
            Dengan UNIVY, Anda menjadi desainer utama dari setiap produk yang Anda inginkan. Kami hadir untuk membantu mewujudkan ide-ide kreatif Anda menjadi kenyataan, memberikan kebebasan penuh untuk menciptakan produk yang benar-benar mencerminkan kepribadian dan kebutuhan Anda.
          </p>
        </div>
      </div>

      {/* Pelayanan Cepat Section */}
      <div className="flex flex-col md:flex-row-reverse items-center bg-blue-100 py-12 px-6">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={fastServiceImage}
            alt="Pelayanan Cepat"
            className="w-full max-w-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
        {/* Text */}
        <div className="md:w-1/2 text-left">
          <h3 className="text-2xl font-bold text-black mb-4">Pelayanan Cepat</h3>
          <p className="text-lg text-gray-700">
            Kami berkomitmen memberikan pelayanan terbaik dengan proses yang efisien, mulai dari pemesanan hingga pengiriman. Dengan layanan yang cepat dan tanpa hambatan, kami memastikan kebutuhan Anda terpenuhi secara maksimal dan tepat waktu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

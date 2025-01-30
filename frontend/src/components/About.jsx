import { motion } from 'framer-motion'; // Import Framer Motion
import backgroundImage from '../assets/gambar/about-bg.png';
import premiumImage from '../assets/gambar/Kaos/kaos3.jpeg';
import creativityImage from '../assets/gambar/Kaos/kaos12.jpeg';
import fastServiceImage from '../assets/gambar/Kaos/kaos13.jpeg';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full mx-auto">
      {/* Background Image Section */}
      <section
        className="relative flex flex-col items-center justify-center h-screen bg-no-repeat bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Background Blur */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            filter: 'blur(10px)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Text Content */}
        <motion.div
          className="relative text-center z-5 px-6 space-y-6 md:space-y-10 mt-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-poppins-36-500">About UNIVY</h1>
          <p className="font-poppins-18-500 max-w-2xl md:max-w-4xl leading-relaxed">
            UNIVY hadir sebagai solusi bagi Anda yang ingin menciptakan sesuatu yang unik dan spesial.
            Kami menawarkan berbagai produk custom, mulai dari kaos, mug, tote bag, stiker, tumbler,
            hingga polaroid foto, yang semuanya dapat Anda desain sendiri sesuai keinginan.
            Dengan menggabungkan teknologi cetak modern dan bahan berkualitas tinggi, kami percaya
            setiap desain memiliki cerita, dan kami ada untuk membantu mewujudkannya. Apakah Anda ingin
            mengekspresikan gaya pribadi, mempersiapkan merchandise acara atau bisnis, atau menghadirkan
            hadiah spesial, UNIVY siap memenuhi kebutuhan Anda. Dengan slogan "Solution Custom n Printing
            only at Univy!", kami memberikan hasil terbaik untuk setiap ide kreatif Anda tanpa batas.
          </p>
        </motion.div>
      </section>

      {/* Section Title */}
      <motion.section
        className="bg-white py-8 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-poppins text-2xl md:text-4xl font-semibold text-black">Kenapa Harus Memilih UNIVY!</h2>
      </motion.section>

      {/* Kualitas Premium Section */}
      <motion.section
        className="flex flex-col md:flex-row-reverse items-center bg-blue-100 py-12 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={premiumImage}
            alt="Kualitas Premium"
            className="w-full max-w-[400px] h-[300px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-left px-6 md:px-10">
          <h3 className="font-poppins-36-500 text-black mb-4">Kualitas Premium</h3>
          <p className="font-poppins-20-300 leading-relaxed">
            Kami berkomitmen untuk selalu memberikan yang terbaik dengan memastikan setiap produk dibuat menggunakan bahan pilihan berkualitas tinggi. Dengan perhatian terhadap detail, kami memastikan hasil akhir yang maksimal dan memuaskan.
          </p>
        </div>
      </motion.section>
      {/* Tester */}
      {/* test lewat vscode  */}
      {/* Kebebasan Kreativitas Section */}
      <motion.section
        className="flex flex-col md:flex-row items-center bg-white py-12 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={creativityImage}
            alt="Kebebasan Kreativitas"
            className="w-full max-w-[400px] h-[300px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-left px-6 md:px-10">
          <h3 className="font-poppins-36-500 text-black mb-4">Kebebasan Kreativitas</h3>
          <p className="font-poppins-20-300 leading-relaxed">
            Dengan UNIVY, Anda menjadi desainer utama dari setiap produk yang Anda inginkan. Kami hadir untuk membantu mewujudkan ide-ide kreatif Anda menjadi kenyataan.
          </p>
        </div>
      </motion.section>

      {/* Pelayanan Cepat Section */}
      <motion.section
        className="flex flex-col md:flex-row-reverse items-center bg-blue-100 py-12 px-6 mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={fastServiceImage}
            alt="Pelayanan Cepat"
            className="w-full max-w-[400px] h-[300px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-left px-6 md:px-10">
          <h3 className="font-poppins-36-500 text-black mb-4">Pelayanan Cepat</h3>
          <p className="font-poppins-20-300 leading-relaxed">
            Kami berkomitmen memberikan pelayanan terbaik dengan proses yang efisien. Dengan layanan yang cepat dan tanpa hambatan, kami memastikan kebutuhan Anda terpenuhi secara maksimal.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
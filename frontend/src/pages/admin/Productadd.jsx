import React, { useState } from "react";
import { LiaCloudUploadAltSolid } from "react-icons/lia";

const AProductadd = () => {
  const [formValues, setFormValues] = useState({
    nama_produk: "",
    kategori_produk: "",
    deskripsi: "",
    stok: "",
    harga: "",
  });

  const [gambar, setGambar] = useState([]); // Untuk menyimpan file gambar

  // Fungsi untuk menangani perubahan input file
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setGambar((prev) => [...prev, ...files]); // Menambahkan gambar ke state
  };

  // Fungsi untuk menghapus gambar dari pratinjau
  const handleRemoveImage = (index) => {
    setGambar((prev) => prev.filter((_, i) => i !== index));
  };

  // Logika untuk validasi form
  // const isFormValid =
  //   &&
  //    &&
  //    &&
  //    &&
  //    &&
  //    > 0;

  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman
    setErrorMessage('');
    setSuccessMessage('');

    // Validasi sederhana
    if (
      !formValues.nama_produk ||
      !formValues.kategori_produk ||
      !formValues.deskripsi ||
      !formValues.stok ||
      !formValues.harga ||
      gambar.length === 0
    ) {
      setErrorMessage('Semua Kolom Wajib di Isi!');
      return;
    }

    try {
      // Membuat objek FormData dan menambahkan data
      const formData = new FormData();
      formData.append('nama_produk', formValues.nama_produk);
      formData.append('kategori_produk', formValues.kategori_produk);
      formData.append('deskripsi', formValues.deskripsi);
      formData.append('stok', formValues.stok);
      formData.append('harga', formValues.harga);
      gambar.forEach((file, index) => {
        formData.append(`gambar_${index}`, file); // Menambahkan gambar satu per satu
      });

      // Mengirimkan data ke server
      const response = await fetch('http://localhost:5000/product/add', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        // Tangani kesalahan dari server
        const errorData = await response.json();
        enqueueSnackbar(errorData.message || 'Gagal Menambahkan Produk', { variant: 'error' });
        return;
      }

      // Berhasil menambahkan produk
      const data = await response.json();
      enqueueSnackbar('Produk Berhasil ditambahkan!', { variant: 'success' });

      // Reset form
      setFormValues({
        nama_produk: '',
        kategori_produk: '',
        deskripsi: '',
        stok: '',
        harga: '',
      });
      setGambar([]); // Kosongkan file gambar
    } catch (error) {
      setErrorMessage(error.message || 'Server Error');
    }
  };

  return (
    <div className="font-poppins p-6">
      {/* Judul */}
      <h1 className="text-2xl font-bold text-blue-800 mb-6">Tambah Produk</h1>

      {/* Form */}
      <div className="form-admin bg-white p-6 rounded-lg shadow-md">
        <form>
          {/* Nama Produk */}
          <div className="mb-4">
            <label htmlFor="nama_produk" className="block text-start font-bold mb-2">
              Nama Produk
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="nama_produk"
              id="nama_produk"
              placeholder="Masukkan nama produk"
              value={formValues.nama_produk}
              onChange={(e) =>
                setFormValues({ ...formValues, nama_produk: e.target.value })
              }
            />
          </div>

          {/* Kategori Produk */}
          <div className="mb-4">
            <label htmlFor="kategori_produk" className="block text-start font-bold mb-2">
              Kategori Produk
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="kategori_produk"
              id="kategori_produk"
              value={formValues.kategori_produk}
              onChange={(e) =>
                setFormValues({ ...formValues, kategori_produk: e.target.value })
              }
            >
              <option value="">Pilih kategori produk</option>
              <option value="kaos">Kaos</option>
              <option value="mug">Mug</option>
              <option value="tas">Tas</option>
              <option value="aksesoris">Aksesoris</option>
              <option value="tumbler">Tumbler</option>
              <option value="stiker">Stiker</option>
              <option value="polaroid">Polaroid</option>
            </select>
          </div>

          {/* Deskripsi Produk */}
          <div className="mb-4">
            <label htmlFor="deskripsi" className="block text-start font-bold mb-2">
              Deskripsi Produk
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="deskripsi"
              id="deskripsi"
              placeholder="Masukkan deskripsi produk"
              value={formValues.deskripsi}
              onChange={(e) =>
                setFormValues({ ...formValues, deskripsi: e.target.value })
              }
            />
          </div>

          {/* Stok Produk */}
          <div className="mb-4">
            <label htmlFor="stok" className="block text-start font-bold mb-2">
              Stok Produk
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              name="stok"
              id="stok"
              placeholder="Masukkan jumlah stok"
              value={formValues.stok}
              onChange={(e) =>
                setFormValues({ ...formValues, stok: e.target.value })
              }
            />
          </div>

          {/* Harga Produk */}
          <div className="mb-4">
            <label htmlFor="harga" className="block text-start font-bold mb-2">
              Harga Produk
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              name="harga"
              id="harga"
              placeholder="Masukkan harga produk"
              value={formValues.harga}
              onChange={(e) =>
                setFormValues({ ...formValues, harga: e.target.value })
              }
            />
          </div>

          {/* Input Gambar */}
          <div className="mb-6">
            <label htmlFor="gambar" className="block text-start font-bold mb-2">
              Gambar Produk
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-blue-500 transition">
              <input
                type="file"
                name="gambar"
                id="gambar"
                className="hidden"
                multiple // Menambahkan atribut multiple untuk upload beberapa gambar
                onChange={handleFileChange}
              />
              <label htmlFor="gambar" className="text-gray-400 cursor-pointer">
                <LiaCloudUploadAltSolid className="text-center text-4xl mx-auto mb-2" />
                {gambar.length > 0
                  ? `${gambar.length} file dipilih`
                  : "Unggah file atau klik untuk mengunggah"}
              </label>

            </div>
            {/* Pratinjau Gambar */}
            {gambar.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-4">
                {gambar.map((file, index) => (
                  <div key={index} className="relative group border-2 border-gray-200 rounded-lg p-3 pb-">
                    {/* Gambar */}
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index}`}
                      className="w-full max-h-48 object-cover rounded-md"
                    />

                    {/* Tombol Hapus */}
                    <button
                      type="button"
                      className="absolute top-1 right-1 bg-red-500 text-white text-sm px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                      onClick={() => handleRemoveImage(index)}
                    >
                      ✕
                    </button>

                    {/* Informasi Gambar */}
                    <div className="mt-2 text-center">
                      {/* Nama Gambar */}
                      <p className="text-sm font-semibold text-gray-800 truncate">
                        {file.name}
                      </p>

                      {/* Ukuran Gambar */}
                      <p className="text-xs text-gray-500">
                        {(file.size / 1024).toFixed(2)} KB
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}


          </div>

          {/* Tombol Simpan */}
          <div>
            <button
              type="submit"
              className={`w-full font-bold py-2 px-4 rounded-lg ${handleSubmit
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                } transition`}
              disabled={!handleSubmit}
            >
              Simpan Produk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AProductadd;

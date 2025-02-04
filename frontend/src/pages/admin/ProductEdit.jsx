import React, { useState, useEffect } from "react";
import { LiaCloudUploadAltSolid } from "react-icons/lia";

const AProductEdit = ({ existingProduct, handleUpdateProduct }) => {
  const [formValues, setFormValues] = useState({
    nama_produk: "",
    kategori_produk: "",
    deskripsi: "",
    stok: "",
    harga: "",
  });

  const [gambar, setGambar] = useState([]);
  const [gambarBaru, setGambarBaru] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [alert, setAlert] = useState(null);

  // Mengisi data saat komponen pertama kali dimuat
  useEffect(() => {
    if (existingProduct) {
      setFormValues({
        nama_produk: existingProduct.nama_produk || "",
        kategori_produk: existingProduct.kategori_produk || "",
        deskripsi: existingProduct.deskripsi || "",
        stok: existingProduct.stok || "",
        harga: existingProduct.harga || "",
      });
      setGambar(existingProduct.gambar || []);
    } else {
      showAlert("Produk tidak ditemukan!", "error");
    }
    setIsLoading(false);
  }, [existingProduct]);

  // Fungsi untuk menampilkan alert sementara
  const showAlert = (message, type) => {
    setAlert({ message, type });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  // Fungsi menangani perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Fungsi menangani perubahan file gambar
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setGambarBaru((prev) => [...prev, ...files]);
  };

  // Fungsi menghapus gambar dari pratinjau
  const handleRemoveImage = (index) => {
    setGambar((prev) => prev.filter((_, i) => i !== index));
  };

  // Logika validasi form
  const isFormValid =
    formValues.nama_produk &&
    formValues.kategori_produk &&
    formValues.deskripsi &&
    formValues.stok &&
    formValues.harga &&
    (gambar.length > 0 || gambarBaru.length > 0);

  // Fungsi saat submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!existingProduct) {
      showAlert("Produk tidak ditemukan! Tidak dapat menyimpan perubahan.", "error");
      return;
    }

    const updatedProduct = {
      ...formValues,
      gambar: [...gambar, ...gambarBaru],
    };

    handleUpdateProduct(updatedProduct);
    showAlert("Perubahan berhasil disimpan!", "success");
  };

  return (
    <div className="font-poppins p-6">
      {/* Alert Pop-up */}
      {alert && (
        <div
          className={`fixed top-5 right-5 z-50 px-4 py-2 rounded-lg text-white shadow-md ${
            alert.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {alert.message}
        </div>
      )}

      {/* Judul */}
      <h1 className="text-2xl font-bold text-blue-800 mb-6">Edit Produk</h1>

      {/* Form */}
      <div className="form-admin bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
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
              onChange={handleChange}
            />
          </div>

          {/* Kategori Produk */}
          <div className="mb-4">
            <label htmlFor="kategori_produk" className="block text-start font-bold mb-2">
              Kategori Produk
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="kategori_produk"
              id="kategori_produk"
              placeholder="Masukkan kategori produk"
              value={formValues.kategori_produk}
              onChange={handleChange}
            />
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
                multiple
                onChange={handleFileChange}
              />
              <label htmlFor="gambar" className="text-gray-400 cursor-pointer">
                <LiaCloudUploadAltSolid className="text-center text-4xl mx-auto mb-2" />
                {gambar.length + gambarBaru.length > 0
                  ? `${gambar.length + gambarBaru.length} file dipilih`
                  : "Unggah file atau klik untuk mengunggah"}
              </label>
            </div>

            {/* Pratinjau Gambar */}
            {gambar.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-4">
                {gambar.map((file, index) => (
                  <div key={index} className="relative group border-2 border-gray-200 rounded-lg p-3">
                    <img src={URL.createObjectURL(file)} alt={`Preview ${index}`} className="w-full h-32 object-cover rounded-md" />
                    <button type="button" className="absolute top-1 right-1 bg-red-500 text-white text-sm px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition" onClick={() => handleRemoveImage(index)}>
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tombol Simpan */}
          <button type="submit" className={`w-full font-bold py-2 px-4 rounded-lg ${isFormValid ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-300 text-gray-500 cursor-not-allowed"} transition`} disabled={!isFormValid}>
            Simpan Perubahan
          </button>
        </form>
      </div>
    </div>
  );
};

export default AProductEdit;

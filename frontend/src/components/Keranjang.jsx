import React from "react";

const Keranjang = () => {
    return (
        // Main content
        <main className="container mx-auto flex-grow p-16">
            <h2 className="text-xl font-bold mb-4">
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4">
                <div className="border-b pb-4">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox" />
                        <span>Pilih semua</span>
                    </label>
                </div>

                {/* item */}
                <div className="flex items-center space-x-2 py-4 border-b px-5">
                    <input type="checkbox" className="form-checkbbox" />
                    <img src="src/assets/gambar/Kaos/kaos1.jpeg" alt="kaos" className="w-32 h-32 object-cover" />
                    <div className="flex-grow">
                        <h3 className="text-left font-medium">Kaos Custom</h3>
                        <p className="text-sm text-left font-light">Ukuran L</p>
                        <p className="text-sm text-left font-light">Warna Putih</p>
                        <button className="text-blue-600 text-sm text-left font-light">Ubah</button>
                    </div>
                    <p className="font-bold">Rp 50.000</p>
                    <div className="flex items-center space-x-2">
                        <button className="px-2 py-1 border rounded">-</button>
                        <span>1</span>
                        <button   button className="px-2 py-1 border rounded">+</button>
                    </div>
                    <button className="text-red-600">🗑</button>
                </div>
                
                {/* item 2 */}
                <div className="flex items-center space-x-4 py-4 border-b px-5">
                    <input type="checkbox" className="form-checkbox" />
                    <img src="src/assets/gambar/Kaos/kaos2.jpeg" alt="Kaos Hitam" className="w-32 h-32 object-cover" />
                    <div className="flex-grow">
                        <h3 className="text-left font-medium">Kaos Custom</h3>
                        <p className="text-sm text-left font-light">Ukuran L</p>
                        <p className="text-sm text-left font-light">Warna Hitam</p>
                        <button className="text-blue-600 text-sm">Ubah</button>
                    </div>
                    <p className="font-bold">Rp 50.000</p>
                    <div className="flex items-center space-x-2">
                        <button className="px-2 py-1 border rounded">-</button>
                    <span>1</span>
                        <button className="px-2 py-1 border rounded">+</button>
                    </div>
                    <button className="text-red-600">🗑</button>
                </div>

                {/* summary */}
                <div className="bg-gray-200 rounded-lg shadow-md p-4 mt-4">
                    <div className="flex justify-between">
                        <p className="font-medium px-4">Total Barang 1</p>
                        <p className="font-bold">Rp 50.000</p>
                    </div>
                    <button className="bg-blue-300 text-blue-600 font-medium rounded-lg py-2 px-4 mt-auto">Check out</button>
                </div>
            </div>

        </main>
    )
}

export default Keranjang;
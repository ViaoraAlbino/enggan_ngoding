import React, { useState } from 'react';

const AEditCustomer = () => {
    const [formData, setFormData] = useState({
        nama: '',
        email: '',
        phone: '',
        address: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const isFormValid = Object.values(formData).every((field) => field.trim() !== '');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Data yang diinput:', formData);
        alert('Data berhasil disimpan!');
    };

    return (
        <div className="bg-neutral-100 font-poppins min-h-screen">
            <div className="flex p-4 text-xl font-bold text-blue-700">
                <span>Edit Customer</span>
            </div>
            <div className="m-3 rounded-lg shadow-lg bg-white p-8">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="nama" className="block text-start font-bold mb-2">
                            Nama Customer
                        </label>
                        <input
                            type="text"
                            name="nama"
                            id="nama"
                            placeholder="Masukkan nama customer"
                            value={formData.nama}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-start font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Masukkan email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-start font-bold mb-2">
                            No Telepon
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="Masukkan no telepon"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-start font-bold mb-2">
                            Alamat
                        </label>
                        <textarea
                            name="address"
                            id="address"
                            placeholder="Masukkan alamat customer"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={!isFormValid}
                        className={`w-full py-2 px-4 text-white rounded-lg 
                            ${isFormValid ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'}`}
                    >
                        Simpan Data
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AEditCustomer;

import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex justify-center items-center">
      <div className="bg-white rounded-md shadow-lg w-4/5 max-w-4xl flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/3 bg-white p-6">
          <ul className="space-y-4">
            <li className="font-medium text-lg text-blue-700 cursor-pointer">
              Profile
            </li>
            <li className="text-gray-500 cursor-pointer">Alamat</li>
            <li className="text-gray-500 cursor-pointer">Rekening</li>
            <li className="text-gray-500 cursor-pointer">Ganti Password</li>
            <li className="text-gray-500 cursor-pointer">Pesanan Saya</li>
            <li className="text-gray-500 cursor-pointer">Log out</li>
          </ul>
        </div>
        {/* Content */}
        <div className="w-2/3 p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-blue-300 rounded-full flex items-center justify-center">
              {/* Placeholder avatar */}
              <span className="text-3xl font-bold text-white">A</span>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Profile Saya</h1>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Nama
              </label>
              <input
                type="text"
                value="Adam"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Username
              </label>
              <input
                type="text"
                value="Adam"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                value="Adam@gmail.com"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium">
                No Telpon
              </label>
              <input
                type="text"
                value="0888 - 8888 - 8888"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

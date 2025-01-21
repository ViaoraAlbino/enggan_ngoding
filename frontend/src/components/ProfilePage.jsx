import React, { useState } from "react";

const ProfilePage = () => {
  const [activePage, setActivePage] = useState("Profile");

  const renderContent = () => {
    switch (activePage) {
      case "Profile":
        return (
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-blue-300 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">A</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Profile Saya</h1>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Nama</label>
                <input
                  type="text"
                  value="Adam"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Username
                </label>
                <input
                  type="text"
                  value="Adam"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  value="Adam@gmail.com"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  No Telpon
                </label>
                <input
                  type="text"
                  value="0888 - 8888 - 8888"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled
                />
              </div>
            </form>
          </div> 
        );
      case "Alamat":
        return <h1 className="text-2xl font-bold">Alamat</h1>;
      case "Rekening":
        return <h1 className="text-2xl font-bold">Rekening</h1>;
      case "Ganti Password":
        return <h1 className="text-2xl font-bold">Ganti Password</h1>;
      case "Pesanan Saya":
        return <h1 className="text-2xl font-bold">Pesanan Saya</h1>;
      case "Log out":
        return <h1 className="text-2xl font-bold">Log out</h1>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-4/5 max-w-4xl flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/3 bg-white p-6">
          <ul className="space-y-4">
            {[
              "Profile",
              "Alamat",
              "Rekening",
              "Ganti Password",
              "Pesanan Saya",
              "Log out",
            ].map((item) => (
              <li
                key={item}
                onClick={() => setActivePage(item)}
                className={`text-center py-2 rounded-lg cursor-pointer ${
                  activePage === item
                    ? "bg-blue-100 text-blue-700 font-bold"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Content */}
        <div className="w-2/3 p-6">{renderContent()}</div>
      </div>
    </div>
  );
};

export default ProfilePage;

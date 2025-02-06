// src/App.jsx
import React, { useState } from 'react';

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState('profile');

  const renderContent = () => {
    switch (selectedMenu) {
      case 'profile':
        return <User Profile />;
      case 'address':
        return <User Address />;
      case 'accountInfo':
        return <User AccountInfo />;
      case 'changePassword':
        return <ChangePassword />;
      case 'purchases':
        return <PurchaseHistory />;
      case 'orders':
        return <OrderHistory />;
      case 'purchaseHistory':
        return <PurchaseHistory />;
      case 'logout':
        // Logika logout di sini
        return <div>Anda telah logout.</div>;
      default:
        return <User Profile />;
    }
  };

  return (
    <div className="flex">
      {/* Menu di sebelah kiri */}
      <div className="w-1/4 bg-gray-200 p-4">
        <ProfileMenu onSelect={setSelectedMenu} />
      </div>
      {/* Konten di sebelah kanan */}
      <div className="w-3/4 p-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default App;
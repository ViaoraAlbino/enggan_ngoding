import React, { useState } from 'react';

const Kategori = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div className="w-45 h-full bg-white border-none fixed top-0 left-5 p-4 overflow-y-auto text-left">
      <h2 className="text-3xl font-bold mb-4 font-poppins-category-header">Category</h2>
      <ul className="space-y-2">
        <li>
          <button
            className="w-45 flex justify-between items-center text-left text-blue-600 font-semibold"
            onClick={() => toggleCategory('kaos')}
          >
            Kaos
            <span className="text-blue-600 ml-12">{activeCategory === 'kaos' ? '▲' : '▼'}</span>
          </button>
          {activeCategory === 'kaos' && (
            <ul className=" mt-2 space-y-2 text-gray-600 font-poppins-category-body">
              <li>Kaos</li>
              <li>Kaos Custom Desain</li>
            </ul>
          )}
        </li>
        <li>
          <button
            className="w-45 flex justify-between items-center text-left"
            onClick={() => toggleCategory('mugs')}
          >
            Mugs
            <span className="text-gray-600 ml-12">{activeCategory === 'mugs' ? '▲' : '▼'}</span>
          </button>
          {activeCategory === 'mugs' && (
            <ul className=" mt-2 space-y-2 text-gray-600 font-poppins-category-body">
              <li>Mugs</li>
              <li>Mugs 2</li>
            </ul>
          )}
        </li>
        {/* Tambahkan kategori lain di sini */}
      </ul>
    </div>
  );
};

export default Kategori;

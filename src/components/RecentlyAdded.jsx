import React from 'react';

export default function RecentlyAdded() {
  const recentProducts = [
    { id: 1, title: "Pink Chair", price: "$99", img: "/assets/pink-chair.jpg" },
    { id: 2, title: "Orange Chair", price: "$129", img: "/assets/orange-chair.jpg" },
  ];

  return (
    <section className="py-10 px-6">
      <h2 className="text-2xl font-semibold mb-6">Recently Added</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recentProducts.map((product) => (
          <div key={product.id} className="p-4 bg-white shadow rounded">
            <img src={product.img} alt={product.title} className="mb-4" />
            <h3 className="font-medium">{product.title}</h3>
            <p className="text-blue-500">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

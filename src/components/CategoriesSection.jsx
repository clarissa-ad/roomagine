import React from "react";
export function CategoriesSection() {
  const categories = ["Chairs", "Tables", "Sofas", "Decor"];

  return (
    <section className="py-10 px-6">
      <h2 className="text-2xl font-semibold mb-6">Top Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div key={cat} className="p-4 bg-white shadow rounded text-center">
            <h3 className="font-medium">{cat}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

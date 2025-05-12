import React from 'react';

export function Testimonials() {
  const feedbacks = [
    { id: 1, text: "Amazing quality!", author: "John Doe" },
    { id: 2, text: "Stylish and affordable.", author: "Jane Smith" },
  ];

  return (
    <section className="py-10 px-6 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-6">What Clients Say About Us</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {feedbacks.map((fb) => (
          <div key={fb.id} className="p-4 bg-white shadow rounded">
            <p className="italic">"{fb.text}"</p>
            <p className="mt-2 font-medium">- {fb.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

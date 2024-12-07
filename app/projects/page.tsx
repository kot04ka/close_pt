"use client";  // This marks the component as a Client Component

import { useState } from "react";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { title: "Project Coming Soon", description: "Stay tuned for upcoming projects!" },
    { title: "Exciting Projects Ahead", description: "Our new projects will be showcased here soon!" },
    { title: "Creative Ventures", description: "Watch this space for creativity and innovation!" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden w-full h-96 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="absolute inset-0 flex items-center justify-center transition-all ease-in-out duration-500">
        <h2 className="text-4xl font-bold">{slides[currentSlide].title}</h2>
        <p className="mt-4 text-lg">{slides[currentSlide].description}</p>
      </div>

      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <button onClick={prevSlide} className="p-2 bg-teal-500 rounded text-white">
          &#8592;
        </button>
      </div>
      
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <button onClick={nextSlide} className="p-2 bg-teal-500 rounded text-white">
          &#8594;
        </button>
      </div>
    </div>
  );
}

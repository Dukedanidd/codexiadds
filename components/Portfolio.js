"use client";

import { useState, useEffect } from "react";

// Portfolio items data
const portfolioItems = [
  {
    title: "Proyecto 1: E-commerce",
    description:
      "Desarrollo de una plataforma de comercio electrónico con carrito de compras e integración de pagos.",
    image: "/images/ecommerce.jpg", // Ruta de la imagen
  },
  {
    title: "Proyecto 2: Blog Personal",
    description:
      "Diseño y desarrollo de un blog personalizado con sistema de administración de contenido.",
    image: "/images/blog.jpg", // Ruta de la imagen
  },
  {
    title: "Proyecto 3: Landing Page",
    description:
      "Creación de una landing page optimizada para campañas publicitarias.",
    image: "/images/landing.jpg", // Ruta de la imagen
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Cambia el valor para ajustar el tiempo (en milisegundos)
    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <section id="portfolio" className="py-16 px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
          Nuestro Portafolio
        </h2>

        <div className="relative">
          {/* Slide */}
          <div className="flex flex-col items-center space-y-6">
            <img
              src={portfolioItems[currentIndex].image}
              alt={portfolioItems[currentIndex].title}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <h3 className="text-xl font-semibold">
              {portfolioItems[currentIndex].title}
            </h3>
            <p className="text-gray-600">
              {portfolioItems[currentIndex].description}
            </p>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.25 19.25L8.75 12.75L15.25 6.25"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.75 19.25L15.25 12.75L8.75 6.25"
              />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-6">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index
                  ? "bg-primary"
                  : "bg-gray-400 hover:bg-primary"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;

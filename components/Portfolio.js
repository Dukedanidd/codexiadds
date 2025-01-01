// Este componente es un carrusel interactivo que muestra proyectos en un portafolio.
// Incluye navegación automática, botones para avanzar y retroceder, y animaciones.

'use client'; // Indica que este componente se ejecuta en el cliente.

import React, { useState, useEffect } from 'react'; // Importa React y hooks para manejar estado y efectos.
import { motion, AnimatePresence } from 'framer-motion'; // Importa librerías para animaciones.
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'; // Íconos SVG para botones y enlaces.
import Link from 'next/link'; // Componente para navegación entre páginas.

// Arreglo de proyectos con detalles como título, descripción, imagen, tecnologías y URL.
const projects = [
  {
    id: 1,
    title: "Proyecto 1: E-commerce",
    description: "Desarrollo de una tienda en línea con carrito de compras y pasarela de pagos integrada para una experiencia de compra fluida.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      { name: "React", icon: "📚" },
      { name: "Node.js", icon: "🚀" },
      { name: "MongoDB", icon: "🍃" },
    ],
    url: "https://proyecto1.ejemplo.com",
  },
  {
    id: 2,
    title: "Proyecto 2: Blog Personal",
    description: "Diseño y desarrollo de un blog personalizado con sistema de administración de contenido y características avanzadas de SEO.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      { name: "Next.js", icon: "⚡" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Prisma", icon: "🔷" },
    ],
    url: "https://proyecto2.ejemplo.com",
  },
  {
    id: 3,
    title: "Proyecto 3: Dashboard",
    description: "Panel de control administrativo con análisis de datos y reportes en tiempo real, visualizaciones interactivas y métricas clave.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      { name: "Vue.js", icon: "💚" },
      { name: "D3.js", icon: "📊" },
      { name: "Firebase", icon: "🔥" },
    ],
    url: "https://proyecto3.ejemplo.com",
  },
];

// Componente principal del carrusel.
export default function PortfolioSlider() {
  const [currentIndex, setCurrentIndex] = useState(0); // Índice del proyecto actual.
  const [isAutoPlaying, setIsAutoPlaying] = useState(true); // Estado para reproducción automática.
  const [isHovered, setIsHovered] = useState(false); // Detecta si el mouse está sobre el carrusel.

  // Efecto para controlar la reproducción automática.
  useEffect(() => {
    let interval;

    if (isAutoPlaying && !isHovered) {
      // Cambia el slide cada 5 segundos si autoplay está activo y no está en hover.
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }

    return () => clearInterval(interval); // Limpia el intervalo al desmontar o cambiar condiciones.
  }, [isAutoPlaying, isHovered]);

  // Función para avanzar al siguiente slide.
  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para retroceder al slide anterior.
  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="portfolio" className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        {/* Título del portafolio con animación */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="text-purple-800">
            Nuestro Portafolio
          </span>
        </motion.h2>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Contenedor principal del carrusel */}
          <div 
            className="relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-b from-purple-900 to-purple-800"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              {/* Animación para el slide actual */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative aspect-[16/9] md:aspect-[21/9]"
              >
                {/* Imagen del slide */}
                <motion.img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Superposición de gradiente */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                />
                
                {/* Información del proyecto */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 p-8 md:p-10"
                >
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-white"
                  >
                    {projects[currentIndex].title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-base md:text-lg text-gray-200 max-w-2xl leading-relaxed mb-6"
                  >
                    {projects[currentIndex].description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap gap-3 mb-6"
                  >
                    {projects[currentIndex].technologies.map((tech, index) => (
                      <span key={index} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        {tech.icon} {tech.name}
                      </span>
                    ))}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <Link 
                      href={projects[currentIndex].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                    >
                      Ver Proyecto <ExternalLink size={18} />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Puntos de navegación */}
          <div className="flex justify-center gap-3 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className="group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-full"
              >
                <motion.div
                  animate={{
                    width: currentIndex === index ? 32 : 10,
                    backgroundColor: currentIndex === index 
                      ? "rgb(107, 33, 168)" // purple-800
                      : "rgb(233, 213, 255)" // purple-200
                  }}
                  className="h-2.5 rounded-full transition-all duration-300 group-hover:bg-purple-400"
                />
                <span className="sr-only">Go to slide {index + 1}</span>
              </button>
            ))}
          </div>

          {/* Botón de reproducción/pausa */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute bottom-4 right-4 bg-white/90 hover:bg-white transition-all duration-200 rounded-full p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            <motion.svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              initial={false}
              animate={isAutoPlaying ? { scale: [1, 0.9, 1] } : {}}
              transition={{ duration: 0.5, repeat: isAutoPlaying ? Infinity : 0 }}
            >
              {isAutoPlaying ? (
                <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
              ) : (
                <path d="M5 3l14 9-14 9V3z" />
              )}
            </motion.svg>
            <span className="sr-only">
              {isAutoPlaying ? 'Pause autoplay' : 'Start autoplay'}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

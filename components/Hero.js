"use client"

import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import { useLanguage } from "@/providers/LanguageContext"

const IsometricIllustration = () => {
  return (
    <div className="relative w-full h-[600px]">
      {/* Laptop Base */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[240px] bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 rounded-lg transform-gpu perspective-1000 rotate-x-12 rotate-z-2 shadow-2xl dark:shadow-purple-500/10"
      >
        {/* Screen */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[98%] w-[360px] h-[220px] bg-gradient-to-br from-purple-900 to-blue-900 dark:from-purple-950 dark:to-blue-950 rounded-lg p-4 transform-gpu rotate-x-[-8deg]">
          <div className="w-full h-full bg-black/30 dark:bg-black/50 rounded-md overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col gap-2 p-3"
            >
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-2 bg-gradient-to-r from-purple-500/30 to-blue-500/30 dark:from-purple-400/20 dark:to-blue-400/20 rounded-full"
                  style={{ width: `${Math.random() * 40 + 60}%` }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating People and Elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute top-1/3 left-1/4 w-16 h-16"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 dark:from-purple-500 dark:to-blue-500 rounded-full shadow-lg dark:shadow-purple-500/10" />
        <div className="w-6 h-12 bg-gradient-to-br from-purple-400 to-blue-400 dark:from-purple-500 dark:to-blue-500 rounded-full mt-[-4px] mx-auto" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="absolute top-1/2 right-1/4 w-16 h-16"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500 rounded-full shadow-lg dark:shadow-purple-500/10" />
        <div className="w-6 h-12 bg-gradient-to-br from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500 rounded-full mt-[-4px] mx-auto" />
      </motion.div>

      {/* Floating Elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
          className="absolute w-8 h-8 bg-gradient-to-br from-purple-500/20 to-blue-500/20 dark:from-purple-400/10 dark:to-blue-400/10 rounded-lg"
          style={{
            top: `${Math.random() * 60 + 20}%`,
            left: `${Math.random() * 60 + 20}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}

      {/* Glowing Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  )
}

const Hero = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Technological Solutions",
      subtitle: "for the Digital Future",
      description: "We transform ideas into innovative digital solutions. We develop custom software that drives your business growth.",
      contactButton: "Contact Us"
    },
    es: {
      title: "Soluciones Tecnológicas",
      subtitle: "para el Futuro Digital",
      description: "Transformamos ideas en soluciones digitales innovadoras. Desarrollamos software personalizado que impulsa el crecimiento de tu negocio.",
      contactButton: "Contáctanos"
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#12182a]">
      
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center lg:text-left z-10"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-gray-900 dark:text-white mb-2">
              {translations[language].title}
            </span>
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              {translations[language].subtitle}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
            {translations[language].description}
          </p>

          <button 
            onClick={() => {
              document.getElementById('contact-form').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
            className="group bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white dark:text-white/90 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 dark:hover:shadow-purple-500/10 flex items-center gap-2 mx-auto lg:mx-0"
          >
            {translations[language].contactButton}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <IsometricIllustration />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero;
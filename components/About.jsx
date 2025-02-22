"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Code2, Brain, Rocket, LineChart, Sparkles } from 'lucide-react'
import { useRef } from "react"
import { useLanguage } from "@/providers/LanguageContext"

// Definir las variantes de animación
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function AboutSection() {
  const { dictionary, language } = useLanguage();
  
  const translations = {
    en: {
      title: "About Us",
      subtitle: "Transforming ideas into innovative technological solutions"
    },
    es: {
      title: "Sobre Nosotros",
      subtitle: "Transformando ideas en soluciones tecnológicas innovadoras"
    }
  };

  const features = [
    {
      title: dictionary?.services.webdev.title,
      description: dictionary?.services.webdev.description,
      icon: Code2,
      stats: dictionary?.services.webdev.stats,
    },
    {
      title: dictionary?.services.ai.title,
      description: dictionary?.services.ai.description,
      icon: Brain,
      stats: dictionary?.services.ai.stats,
    },
    {
      title: dictionary?.services.mobile.title,
      description: dictionary?.services.mobile.description,
      icon: Rocket,
      stats: dictionary?.services.mobile.stats,
    },
    {
      title: dictionary?.services.consulting.title,
      description: dictionary?.services.consulting.description,
      icon: LineChart,
      stats: dictionary?.services.consulting.stats,
    },
  ]

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <section id='about' className="py-20 px-4 relative min-h-screen bg-white dark:bg-[#12182a]" ref={containerRef}>
      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          style={{ opacity, scale }}
          className="text-center mb-16 space-y-4"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            {translations[language].title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            {translations[language].subtitle}
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            <Sparkles className="w-8 h-8 mx-auto text-purple-500 animate-pulse" />
          </motion.div>
        </motion.div>

        {/* Línea central - ahora solo visible en pantallas grandes */}
        <div className="absolute left-1/2 top-[200px] bottom-20 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 lg:block hidden">
          <div className="absolute w-1 h-20 bg-white blur-sm animate-pulse" 
               style={{ 
                 top: "50%",
                 transform: "translateY(-50%)",
                 animation: "moveUpDown 8s infinite" 
               }} 
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={`flex items-center mb-24 
                  ${index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"}
                  justify-center`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl 
                  shadow-lg transition-all duration-500 group hover:shadow-2xl 
                  border border-gray-100 dark:border-gray-700
                  lg:w-[calc(50%-40px)] w-full max-w-xl
                  ${index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"}`}
                >
                  {/* Punto en la línea temporal - solo visible en pantallas grandes */}
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className={`absolute top-1/2 w-4 h-4 rounded-full bg-gradient-to-r 
                    from-purple-500 to-blue-500 z-10 hidden lg:block
                    ${index % 2 === 0 ? "-right-[42px]" : "-left-[42px]"}`}
                  >
                    <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-20" />
                  </motion.div>

                  {/* Línea conectora - solo visible en pantallas grandes */}
                  <div
                    className={`absolute top-1/2 h-0.5 w-8 bg-gradient-to-r from-purple-500 to-blue-500
                    hidden lg:block
                    ${index % 2 === 0 ? "-right-8" : "-left-8"}`}
                  />

                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 group-hover:from-purple-500/20 group-hover:to-blue-500/20 dark:group-hover:from-purple-500/30 dark:group-hover:to-blue-500/30 transition-colors duration-500">
                      <Icon className="w-8 h-8 text-purple-600 dark:text-purple-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                    {feature.description}
                  </p>

                  {/* Stats con animación */}
                  <div className="grid grid-cols-3 gap-4">
                    {feature.stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-center p-2 rounded-lg bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 group-hover:from-purple-100 group-hover:to-blue-100 dark:group-hover:from-purple-900/50 dark:group-hover:to-blue-900/50 transition-colors duration-500"
                      >
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {stat}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Estilos para la animación del brillo en la línea temporal */}
      <style jsx global>{`
        @keyframes moveUpDown {
          0%, 100% { transform: translateY(-100%); }
          50% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  )
}


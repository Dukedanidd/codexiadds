"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/providers/LanguageContext";
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = {
    en: [
      {
        question: "What services does CodexiaDDS offer?",
        answer: "We offer custom software development, web applications, mobile apps, enterprise systems, and e-commerce solutions. Our specialized team works with the latest technologies to create innovative and scalable solutions."
      },
      {
        question: "How are project costs calculated?",
        answer: "Costs are calculated based on project scope, technical complexity, development time, and required resources. We perform a detailed analysis of your requirements to provide a transparent and competitive budget."
      },
      {
        question: "What is the development process?",
        answer: "We follow an agile methodology that includes: 1) Analysis and planning, 2) Design and architecture, 3) Iterative development, 4) Continuous testing, 5) Implementation, and 6) Post-launch support. We maintain constant communication throughout the process."
      },
      {
        question: "Do you offer support and maintenance?",
        answer: "Yes, we provide ongoing technical support and maintenance services to ensure your software runs optimally. We offer different support plans tailored to your specific needs."
      }
    ],
    es: [
      {
        question: "¿Qué servicios ofrece CodexiaDDS?",
        answer: "Ofrecemos desarrollo de software personalizado, aplicaciones web, móviles, sistemas empresariales y soluciones de comercio electrónico. Nuestro equipo especializado trabaja con las últimas tecnologías para crear soluciones innovadoras y escalables."
      },
      {
        question: "¿Cómo se calculan los costos de los proyectos?",
        answer: "Los costos se calculan en base al alcance del proyecto, complejidad técnica, tiempo de desarrollo y recursos necesarios. Realizamos un análisis detallado de sus requerimientos para proporcionar un presupuesto transparente y competitivo."
      },
      {
        question: "¿Cómo es el proceso de desarrollo?",
        answer: "Seguimos una metodología ágil que incluye: 1) Análisis y planificación, 2) Diseño y arquitectura, 3) Desarrollo iterativo, 4) Pruebas continuas, 5) Implementación y 6) Soporte post-lanzamiento. Mantenemos una comunicación constante durante todo el proceso."
      },
      {
        question: "¿Ofrecen soporte y mantenimiento?",
        answer: "Sí, proporcionamos soporte técnico continuo y servicios de mantenimiento para garantizar que su software funcione de manera óptima. Ofrecemos diferentes planes de soporte adaptados a sus necesidades específicas."
      }
    ]
  };

  return (
    <section className="relative py-20 overflow-hidden bg-white dark:bg-[#12182a]">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          {language === 'en' ? 'Frequently Asked Questions' : 'Preguntas Frecuentes'}
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {faqs[language].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className={`flex justify-between items-center w-full p-6 text-left transition-all duration-200
                  ${activeIndex === index 
                    ? 'bg-indigo-500 text-white dark:bg-indigo-600' 
                    : 'bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
              >
                <span className={`font-medium ${
                  activeIndex === index 
                    ? 'text-white' 
                    : 'text-gray-900 dark:text-white'
                }`}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 ${
                    activeIndex === index 
                      ? 'text-white' 
                      : 'text-gray-500 dark:text-gray-400'
                  } transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
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
        answer: (
          <div className="space-y-2 leading-relaxed">
            <p>
              We offer software development tailored to your business needs. From
              basic websites to advanced platforms, we work with you to create the
              best solution.
            </p>
          </div>
        ),
      },
      {
        question: "How are project costs calculated?",
        answer: (
          <div className="space-y-2 leading-relaxed">
            <p>
              Costs depend on the project&apos;s complexity, required features, and
              estimated time. We provide personalized quotes after an initial
              consultation.
            </p>
          </div>
        ),
      },
      {
        question: "What is the development process?",
        answer: (
          <div className="space-y-2 leading-relaxed">
            <p>Our process includes:</p>
            <ul className="list-disc pl-5">
              <li>Initial consultation to understand your needs.</li>
              <li>Design and planning.</li>
              <li>Development and testing.</li>
              <li>Final delivery and post-launch support.</li>
            </ul>
          </div>
        ),
      },
      {
        question: "Do you offer support and maintenance?",
        answer: (
          <div className="space-y-2 leading-relaxed">
            <p>
              We provide technical support and maintenance options to ensure your
              website works perfectly after launch. Additionally, we can assist
              with any updates or improvements you need, such as adding new
              features or redesigning elements.
            </p>
          </div>
        ),
      },
    ],
    es: [
      {
        question: "¿Qué servicios ofrece CodexiaDDS?",
        answer: (
          <div className="space-y-2 leading-relaxed">
            <p>
              Ofrecemos desarrollo de software adaptado a las necesidades de tu
              negocio. Desde sitios básicos hasta plataformas avanzadas,
              trabajamos contigo para crear la mejor solución.
            </p>
          </div>
        ),
      },
      {
        question: "¿Cómo se calculan los costos de los proyectos?",
        answer: (
          <div className="space-y-2 leading-relaxed">
            <p>
              El costo depende de la complejidad del proyecto, las funciones
              necesarias y el tiempo estimado. Ofrecemos presupuestos
              personalizados después de una consulta inicial.
            </p>
          </div>
        ),
      },
      {
        question: "¿Cómo es el proceso de desarrollo?",
        answer: (
          <div className="space-y-2 leading-relaxed">
            <p>Nuestro proceso incluye:</p>
            <ul className="list-disc pl-5">
              <li>Consulta inicial para entender tus necesidades.</li>
              <li>Diseño y planificación.</li>
              <li>Desarrollo y pruebas.</li>
              <li>Entrega final y soporte post-lanzamiento.</li>
            </ul>
          </div>
        ),
      },
      {
        question: "¿Ofrecen soporte y mantenimiento?",
        answer: (
          <div className="space-y-2 leading-relaxed">
            <p>
              Brindamos soporte técnico y opciones de mantenimiento para
              asegurarnos de que tu sitio funcione perfectamente después del
              lanzamiento. Además, podemos ayudarte con cualquier actualización o
              mejora que necesites, ya sea agregar nuevas funciones o rediseñar
              elementos.
            </p>
          </div>
        ),
      },
    ],
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/25 to-transparent dark:via-purple-900/10" />
      
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-6"
        >
          {faqs[language].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white dark:bg-gray-800/50 shadow-xl dark:shadow-gray-900/10 overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="flex justify-between items-center w-full p-6 text-left"
              >
                <span className="font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${
                    activeIndex === index ? "transform rotate-180" : ""
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
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
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
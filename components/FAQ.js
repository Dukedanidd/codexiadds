"use client";

import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "¿Qué servicios ofrece CodexiaDDS?",
    answer: <div className="space-y-2 leading-relaxed">
      <p>Ofrecemos desarrollo de software adaptado a las necesidades de tu negocio. Desde sitios básicos hasta plataformas avanzadas, trabajamos contigo para crear la mejor solución.</p>
    </div>,
  },
  {
    question: "¿Cómo se calculan los costos de los proyectos?",
    answer: (
      <p>
        El costo depende de la complejidad del proyecto, las funciones necesarias y el tiempo estimado. Ofrecemos presupuestos personalizados después de una consulta inicial.
      </p>
    ),
  },
  {
    question: "¿Cómo es el proceso de desarrollo?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>Nuestro proceso incluye:</p>
        <ol>
          <li>Consulta inicial para entender tus necesidades.</li>
          <li>Diseño y planificación.</li>
          <li>Desarrollo y pruebas.</li>
          <li>Entrega final y soporte post-lanzamiento</li>
        </ol>
      </div>
    ),
  },
  {
    question: "¿Ofrecen soporte y mantenimiento?",
    answer: (
      <div>

        <p>Brindamos soporte técnico y opciones de mantenimiento para asegurarnos de que tu sitio funcione perfectamente después del lanzamiento, ademas podemos ayudarte con cualquier actualización o mejora que necesites, ya sea agregar nuevas funciones o rediseñar elementos.

</p>

      </div>
    ),
    
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;

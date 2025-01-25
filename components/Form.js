"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/providers/LanguageContext";
import { ArrowRight } from 'lucide-react';

const Form = () => {
  const { language } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    message: "",
    service: ""
  });

  const translations = {
    en: {
      title: "Contact Us",
      subtitle: "We're here to help. Send us a message!",
      firstName: "First Name",
      lastName: "Last Name",
      phone: "Phone Number",
      serviceLabel: "How can we help you?",
      messageLabel: "Message",
      messagePlaceholder: "How can we help you?",
      send: "Send Message",
      sending: "Sending...",
      success: "Form submitted successfully! 🎉",
      selectOption: "Select an option",
      services: {
        web: "Professional Web Development",
        ai: "Artificial Intelligence & ML",
        apps: "App Development",
        consulting: "Technology Consulting"
      }
    },
    es: {
      title: "Contáctanos",
      subtitle: "Estamos aquí para ayudarte. ¡Envíanos un mensaje!",
      firstName: "Nombre(s)",
      lastName: "Apellidos",
      phone: "Número de teléfono",
      serviceLabel: "¿En qué ámbito podemos ayudarte?",
      messageLabel: "Mensaje",
      messagePlaceholder: "¿En qué podemos ayudarte?",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Formulario enviado exitosamente! 🎉",
      selectOption: "Selecciona una opción",
      services: {
        web: "Desarrollo web profesional",
        ai: "Inteligencia artificial y ML",
        apps: "Desarrollo de aplicaciones",
        consulting: "Consulta tecnológica"
      }
    }
  };

  const serviceValues = {
    en: {
      web: "Professional Web Development",
      ai: "Artificial Intelligence & ML",
      apps: "App Development",
      consulting: "Technology Consulting"
    },
    es: {
      web: "Desarrollo web profesional",
      ai: "Inteligencia artificial y ML",
      apps: "Desarrollo de aplicaciones",
      consulting: "Consulta tecnológica"
    }
  };

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification({ show: false, type: '', message: '' });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el formulario');
      }

      showNotification('success', translations[language].success);
      
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        message: "",
        service: ""
      });
      
    } catch (err) {
      showNotification('error', `Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceChange = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const serviceKeys = Object.keys(serviceValues[language]);
    const selectedKey = serviceKeys[selectedIndex - 1];
    
    setFormData({
      ...formData,
      service: selectedKey ? serviceValues[language][selectedKey] : ""
    });
  };

  return (
    <section id="contact-form" className="relative bg-white dark:bg-[#12182a]">
      {notification.show && (
        <div
          className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg transition-all duration-500 transform ${
            notification.type === 'success' 
              ? 'bg-green-500 text-white dark:bg-green-600' 
              : 'bg-red-500 text-white dark:bg-red-600'
          }`}
          style={{
            zIndex: 1000,
            animation: 'slideIn 0.5s ease-out'
          }}
        >
          {notification.message}
        </div>
      )}

      <div className="relative max-w-4xl mx-auto px-8 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-purple-500/10 shadow-xl shadow-purple-500/5"
        >
                    <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
          >
            {translations[language].title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-gray-600 dark:text-gray-300 mb-8"
          >
            {translations[language].subtitle}
          </motion.p>

          <motion.form 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
          <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {translations[language].firstName}
                </label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-purple-500/20 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none dark:text-white"
                  onChange={handleChange}
                  value={formData.nombre}
                  placeholder={translations[language].firstName}
                />
              </div>

              <div>
                <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {translations[language].lastName}
                </label>
                <input
                  type="text"
                  name="apellido"
                  id="apellido"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-purple-500/20 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none dark:text-white"
                  onChange={handleChange}
                  value={formData.apellido}
                  placeholder={translations[language].lastName}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-purple-500/20 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none dark:text-white"
                  onChange={handleChange}
                  value={formData.email}
                  placeholder="@email.com"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {translations[language].phone}
                </label>
                <input
                  type="text"
                  name="telefono"
                  id="telefono"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-purple-500/20 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none dark:text-white"
                  onChange={handleChange}
                  value={formData.telefono}
                  placeholder="+52 1234567890"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {translations[language].serviceLabel}
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleServiceChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-purple-500/20 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none dark:text-white"
              >
                <option value="" className="dark:bg-gray-800">{translations[language].selectOption}</option>
                {Object.values(serviceValues[language]).map((service) => (
                  <option key={service} value={service} className="dark:bg-gray-800">
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {translations[language].messageLabel}
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-purple-500/20 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none resize-none dark:text-white"
                onChange={handleChange}
                value={formData.message}
                placeholder={translations[language].messagePlaceholder}
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className={`group bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white dark:text-white/90 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 dark:hover:shadow-purple-500/10 flex items-center gap-2 mx-auto ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? translations[language].sending : translations[language].send}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Form;
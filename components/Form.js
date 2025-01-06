import { useState } from "react";
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import { useLanguage } from "@/providers/LanguageContext";

const Form = () => {
  const { language } = useLanguage();
    
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    message: "",
    service: ""
  });

  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });

  // Objeto de traducciones
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

  // Definir los valores de los servicios según el idioma
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

  // Función para mostrar notificación
  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    // Ocultar la notificación después de 5 segundos
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

      // Mostrar notificación de éxito
      showNotification('success', '¡Formulario enviado exitosamente! 🎉');
      
      // Limpiar el formulario
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        message: "",
        service: ""
      });
      
    } catch (err) {
      // Mostrar notificación de error
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

  // Actualizar el select para usar los valores según el idioma
  const handleServiceChange = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const serviceKeys = Object.keys(serviceValues[language]);
    const selectedKey = serviceKeys[selectedIndex - 1]; // -1 porque el primer option es el placeholder
    
    setFormData({
      ...formData,
      service: selectedKey ? serviceValues[language][selectedKey] : ""
    });
  };

  return (
    <section id="contact-form" className="relative bg-transparent">
      {/* Notificación */}
      {notification.show && (
        <div
          className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg transition-all duration-500 transform ${
            notification.type === 'success' 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}
          style={{
            zIndex: 1000,
            animation: 'slideIn 0.5s ease-out'
          }}
        >
          {notification.message}
        </div>
      )}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,56,202,0.03),rgba(255,255,255,0))]" />
      <div className="relative max-w-4xl mx-auto px-8 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-500/10 shadow-xl shadow-purple-500/5"
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
            className="text-center text-gray-600 mb-8"
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
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  {translations[language].firstName}
                </label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-purple-500/20 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                  onChange={handleChange}
                  value={formData.nombre}
                  placeholder={translations[language].firstName}
                />
              </div>

              <div>
                <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-2">
                  {translations[language].lastName}
                </label>
                <input
                  type="text"
                  name="apellido"
                  id="apellido"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-purple-500/20 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                  onChange={handleChange}
                  value={formData.apellido}
                  placeholder={translations[language].lastName}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-purple-500/20 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                  onChange={handleChange}
                  value={formData.email}
                  placeholder="@email.com"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                  {translations[language].phone}
                </label>
                <input
                  type="text"
                  name="telefono"
                  id="telefono"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-purple-500/20 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                  onChange={handleChange}
                  value={formData.telefono}
                  placeholder="+52 1234567890"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                {translations[language].serviceLabel}
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleServiceChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-purple-500/20 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
              >
                <option value="">{translations[language].selectOption}</option>
                {Object.values(serviceValues[language]).map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                {translations[language].messageLabel}
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-purple-500/20 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none resize-none"
                onChange={handleChange}
                value={formData.message}
                placeholder={translations[language].messagePlaceholder}
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className={`group bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2 mx-auto ${
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


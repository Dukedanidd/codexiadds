import { useState } from "react";
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";

const Form = () => {
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
            Contáctanos
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-gray-600 mb-8"
          >
            Estamos aquí para ayudarte. ¡Envíanos un mensaje!
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
                  Nombre(s)
                </label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-purple-500/20 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                  onChange={handleChange}
                  value={formData.nombre}
                  placeholder="Nombre(s)"
                />
              </div>

              <div>
                <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-2">
                  Apellidos
                </label>
                <input
                  type="text"
                  name="apellido"
                  id="apellido"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-purple-500/20 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                  onChange={handleChange}
                  value={formData.apellido}
                  placeholder="Apellidos"
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
                  Numero de telefono
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
                ¿En qué ámbito podemos ayudarte?
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-purple-500/20 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
              >
                <option value="">Selecciona una opción</option>
                <option value="Desarrollo web profesional">Desarrollo web profesional</option>
                <option value="Inteligencia artificial y ML">Inteligencia artificial y ML</option>
                <option value="Desarrollo de aplicaciones">Desarrollo de aplicaciones</option>
                <option value="Consulta tecnológica">Consulta tecnológica</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-purple-500/20 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none resize-none"
                onChange={handleChange}
                value={formData.message}
                placeholder="¿En qué podemos ayudarte?"
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
                {loading ? 'Enviando...' : 'Enviar Mensaje'}
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


import { useState } from "react";
import { ArrowRight } from 'lucide-react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [selectedService, setSelectedService] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Form submitted:", formData, "Service selected:", selectedService);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact-form" className="relative bg-gradient-to-br from-purple-50/50 to-blue-50/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,56,202,0.05),rgba(255,255,255,0))]" />
      <div className="relative max-w-4xl mx-auto px-8 py-24">
        <div className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-500/10 shadow-xl shadow-purple-500/5">
          <h2 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Contáctanos
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Estamos aquí para ayudarte. ¡Envíanos un mensaje!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                  Numero de telefono
                </label>
                <input
                  type="number"
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
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
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
                className="group bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2 mx-auto"
              >
                Enviar Mensaje
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;


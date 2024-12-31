"use client";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

const SplashScreen = ({ onComplete }) => {
  const company = {
    name: 'Codexiandds',
    mission: 'Transformar Ideas en Software Innovador'
  };

  return (
    <motion.div
      initial={{ backgroundColor: "#1a1b26" }}
      className="fixed inset-0 flex flex-col items-center justify-center"
      data-theme="dark"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#1e1f2a] p-4 sm:p-12 rounded-lg border border-gray-700 shadow-xl max-w-4xl w-full mx-4 relative"
      >
        <motion.div
          className="flex space-x-2 mb-6"
        >
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-mono"
        >
          <div className="text-2xl space-y-6">
            <Typewriter
              options={{
                delay: 30,
                cursor: "",
                skipAddStyles: true
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('<span class="text-blue-400">const</span> ')
                  .typeString('<span class="text-blue-400">company</span> = {')
                  .typeString('<br/>')
                  .typeString('<span class="ml-8 text-green-400">name: </span>')
                  .typeString(`'${company.name}',`)
                  .typeString('<br/>')
                  .typeString('<span class="ml-8 text-green-400">mission: </span>')
                  .typeString(`'${company.mission}'`)
                  .typeString('<br/>}')
                  .typeString('<span class="text-blue-400">;</span>')
                  .typeString('<br/><br/>')
                  .typeString('<span class="text-gray-500">{/* Desarrollamos soluciones tecnológicas que impulsan el crecimiento de tu negocio */}</span>')
                  .typeString('<br/><br/>')
                  .callFunction(() => {
                    document.querySelectorAll('.feature-item').forEach((el, i) => {
                      setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                      }, i * 200);
                    });
                  })
                  .start();
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12">
            <motion.div
              className="feature-item p-4 sm:p-6 bg-gray-800 rounded opacity-0 text-green-400 text-sm sm:text-base"
              style={{ transform: 'translateY(20px)', transition: 'all 0.3s ease' }}
            >
              ✓ Soluciones Personalizadas
            </motion.div>
            <motion.div
              className="feature-item p-4 sm:p-6 bg-gray-800 rounded opacity-0 text-green-400 text-sm sm:text-base"
              style={{ transform: 'translateY(20px)', transition: 'all 0.3s ease' }}
            >
              ✓ Tecnología de Vanguardia
            </motion.div>
            <motion.div
              className="feature-item p-4 sm:p-6 bg-gray-800 rounded opacity-0 text-green-400 text-sm sm:text-base"
              style={{ transform: 'translateY(20px)', transition: 'all 0.3s ease' }}
            >
              ✓ Equipo Experto
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="mt-16 text-center relative"
        >
          <p className="text-gray-500 font-mono text-sm mb-4">{/* Click para continuar */}</p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onComplete}
            className="cursor-pointer"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              className="mx-auto text-blue-400"
              style={{ filter: 'drop-shadow(0 0 2px rgba(96, 165, 250, 0.3))' }}
            >
              <path
                d="M20 5 C20 20 20 25 20 30 M15 25 C15 25 20 30 20 30 C20 30 25 25 25 25"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M15 35 C15 35 20 35 25 35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen; 
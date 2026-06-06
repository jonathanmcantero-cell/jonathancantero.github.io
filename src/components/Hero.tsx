import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -z-10 opacity-50"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] -z-10 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-sm text-gray-300 font-medium">Disponible para nuevos proyectos</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Transformo ideas en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">experiencias digitales</span> que generan resultados.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Desarrollo páginas web, campañas publicitarias y contenido audiovisual para ayudar a negocios y emprendedores a crecer.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all flex items-center justify-center space-x-2 group"
            >
              <span>Solicitar presupuesto</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://wa.me/543516371747?text=Hola%20Jonathan%2C%20estaba%20viendo%20tu%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5 text-green-500" />
              <span>Contactar por WhatsApp</span>
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex items-center justify-center"
          >
            <div className="bg-blue-900/30 border border-blue-500/30 rounded-full px-5 py-2 flex items-center space-x-2">
              <span className="text-xl">🎁</span>
              <span className="text-blue-200 text-sm md:text-base font-medium">¡Solicitá el diseño de tu página de muestra <strong className="text-white">totalmente gratis</strong>!</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 pt-10 border-t border-white/10 flex flex-col items-center"
          >
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest">Creemos algo increíble juntos</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

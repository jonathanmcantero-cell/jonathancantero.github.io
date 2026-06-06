import { motion } from 'motion/react';
import { Code, Lightbulb, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Sobre mí</h2>
            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Soy <strong className="text-white font-medium">Jonathan Cantero</strong>, un profesional apasionado por el mundo digital con sede en Córdoba, Argentina. Mi misión es crear soluciones integrales que no solo se vean bien, sino que cumplan objetivos de negocio concretos.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Con un enfoque multidisciplinario, combino habilidades de desarrollo web, estrategias de publicidad digital y edición de video. Esto me permite ofrecer experiencias coherentes y efectivas para llevar tu marca al siguiente nivel.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Code className="text-blue-500 w-5 h-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">Técnica & Creatividad</h4>
                  <p className="text-gray-500 text-sm mt-1">Código limpio respaldado por una visión estética moderna.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Lightbulb className="text-blue-500 w-5 h-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">Enfoque Estratégico</h4>
                  <p className="text-gray-500 text-sm mt-1">Cada decisión de diseño o campaña está pensada para la conversión.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Rocket className="text-blue-500 w-5 h-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">Orientado a Resultados</h4>
                  <p className="text-gray-500 text-sm mt-1">Métricas claras y optimización constante para maximizar el ROI.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-950 relative border border-white/5">
              <img 
                src="./Jonathan.jpg" 
                alt="Jonathan Cantero"
                className="w-full h-full object-cover relative z-10"
              />
              
              {/* Abstract decorative elements representing code, ads, and video */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px] z-0"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-[60px] z-0"></div>
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="text-4xl font-display font-bold mb-1">+50</div>
              <div className="text-sm font-medium text-blue-100">Proyectos<br/>Completados</div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

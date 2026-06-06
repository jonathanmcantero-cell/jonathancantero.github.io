import { motion } from 'motion/react';
import { UserCheck, PenTool, Zap, Smartphone, HeadphonesIcon, TrendingUp } from 'lucide-react';

const benefits = [
  { icon: UserCheck, title: "Atención personalizada", desc: "Comunicación directa y constante durante todo el proyecto." },
  { icon: PenTool, title: "Diseño profesional", desc: "Estéticas modernas que reflejan la identidad de tu marca." },
  { icon: Zap, title: "Entrega rápida", desc: "Cumplimiento estricto de plazos sin sacrificar calidad." },
  { icon: Smartphone, title: "Optimización móvil", desc: "Experiencias perfectas en teléfonos, tablets y escritorios." },
  { icon: HeadphonesIcon, title: "Soporte continuo", desc: "Asistencia técnica incluso después del lanzamiento." },
  { icon: TrendingUp, title: "Enfoque en resultados", desc: "Estrategias diseñadas para captar clientes y aumentar ventas." }
];

export default function Benefits() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
          >
            ¿Por qué <span className="text-blue-500">trabajar conmigo?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Me involucro en cada proyecto como si fuera propio, garantizando profesionalismo, calidad y compromiso absoluto.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500">
                  <benefit.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="ml-5">
                <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mt-20 p-10 bg-gradient-to-r from-blue-900/40 to-blue-600/10 border border-blue-500/20 rounded-3xl text-center backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <span className="text-8xl">🎁</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">¿Dudando si es para vos? <span className="text-blue-400">Solicitá una página de muestra gratis</span></h3>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto text-lg">Estoy listo para escuchar tus ideas y transformarlas en realidades digitales potentes. Sin compromiso, diseñaré una muestra gratuita para tu negocio.</p>
          <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-full transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            Solicitar Muestra Gratis
          </a>
        </motion.div>
      </div>
    </section>
  );
}

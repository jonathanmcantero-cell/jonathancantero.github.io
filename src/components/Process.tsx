import { motion } from 'motion/react';

const steps = [
  {
    num: "01",
    title: "Reunión Inicial",
    desc: "Charlamos sobre tus ideas, objetivos y necesidades para entender a fondo tu negocio."
  },
  {
    num: "02",
    title: "Planificación",
    desc: "Diseño una estrategia a medida, definiendo estructura, diseño y plazos de entrega."
  },
  {
    num: "03",
    title: "Desarrollo",
    desc: "Pongo manos a la obra, creando tu proyecto con las mejores prácticas y tecnologías."
  },
  {
    num: "04",
    title: "Entrega y Seguimiento",
    desc: "Lanzamos el proyecto y monitoreamos los resultados para asegurar el éxito."
  }
];

export default function Process() {
  return (
    <section className="py-20 lg:py-32 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-blue-500 font-semibold tracking-widest uppercase mb-2"
          >
            Metodología
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Cómo trabajo
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-[4.5rem] left-0 w-full h-px bg-white/10 -z-10"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              <div className="text-6xl font-display font-bold text-white/5 mb-4">{step.num}</div>
              <div className="w-16 h-16 rounded-full bg-blue-600/20 border-2 border-blue-500 flex items-center justify-center text-blue-400 font-bold text-xl mb-6 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                {index + 1}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

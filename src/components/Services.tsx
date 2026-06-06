import { motion } from 'motion/react';
import { MonitorSmartphone, Megaphone, MonitorPlay } from 'lucide-react';

const services = [
  {
    title: "Desarrollo Web",
    description: "Sitios rápidos, seguros y diseñados para convertir visitantes en clientes.",
    icon: MonitorSmartphone,
    features: ["Páginas de muestra gratis", "Landing pages", "Sitios corporativos", "Portafolios", "Optimización móvil"],
    color: "from-blue-600 to-blue-400"
  },
  {
    title: "Publicidad Digital",
    description: "Campañas estratégicas para llegar a tu audiencia ideal y aumentar las ventas.",
    icon: Megaphone,
    features: ["Meta Ads", "Campañas publicitarias", "Captación de clientes", "Estrategias digitales"],
    color: "from-purple-600 to-indigo-400"
  },
  {
    title: "Edición de Video",
    description: "Contenido audiovisual dinámico que capta la atención en los primeros segundos.",
    icon: MonitorPlay,
    features: ["Reels", "Shorts", "Videos promocionales", "Contenido para redes sociales"],
    color: "from-pink-600 to-orange-400"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-blue-500 font-semibold tracking-widest uppercase mb-2"
          >
            Mis Especialidades
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Soluciones Integrales para tu Negocio
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Ofrezco un abanico de servicios diseñados para potenciar tu presencia online y lograr un crecimiento medible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full -z-10 group-hover:opacity-20 transition-opacity`}></div>
              
              <div className="w-14 h-14 bg-black/50 border border-white/10 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

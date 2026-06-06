import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formState === 'submitting') return;
    setFormState('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      message: formData.get('message'),
      _subject: 'Nuevo mensaje de contacto desde tu sitio web!'
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/jonathanmcantero@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setFormState('success');
        e.currentTarget.reset();
      } else {
        // Fallback to mailto just in case 
        window.location.href = `mailto:jonathanmcantero@gmail.com?subject=Contacto web&body=${data.message}`;
        setFormState('success');
      }
    } catch (error) {
      window.location.href = `mailto:jonathanmcantero@gmail.com?subject=Contacto web&body=${data.message}`;
      setFormState('success');
    }
    
    setTimeout(() => setFormState('idle'), 3000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Empecemos algo grande</h2>
              <p className="text-gray-400 text-lg mb-10">
                Contactame hoy mismo. Convertí visitantes en clientes con mi ayuda estratégica y técnica.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-blue-500 mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500">WhatsApp</span>
                    <a href="https://wa.me/543516371747?text=Hola%20Jonathan%2C%20estaba%20viendo%20tu%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto." target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                      +54 9 351 637-1747
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-blue-500 mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500">Email</span>
                    <a href="mailto:jonathanmcantero@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                      jonathanmcantero@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-blue-500 mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500">Ubicación</span>
                    <span className="text-white">Córdoba, Argentina</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#0a0a0a] p-8 md:p-10 rounded-3xl border border-white/10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nombre completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Teléfono</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="+54 9 351..."
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Correo electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="hola@ejemplo.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Contame sobre tu proyecto..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={formState !== 'idle'}
                  className={`w-full py-4 rounded-xl font-medium transition-all flex items-center justify-center ${
                    formState === 'success' 
                      ? 'bg-green-600 text-white' 
                      : formState === 'submitting'
                        ? 'bg-blue-600/70 text-white cursor-wait'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_20px_rgba(37,99,235,0.2)]'
                  }`}
                >
                  {formState === 'success' ? 'Mensaje enviado' : formState === 'submitting' ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

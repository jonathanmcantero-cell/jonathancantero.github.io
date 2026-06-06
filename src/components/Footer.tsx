import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <a href="#home" className="text-2xl font-display font-bold text-white tracking-tighter">
            jcantero<span className="text-blue-500">.</span>
          </a>
          <p className="text-gray-500 text-sm mt-2 max-w-xs">
            Desarrollo web, publicidad digital y edición de video en Córdoba, Argentina.
          </p>
        </div>
        
        <div className="flex space-x-6 mb-8 md:mb-0">
          <a href="https://wa.me/543516371747?text=Hola%20Jonathan%2C%20estaba%20viendo%20tu%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto." target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">WhatsApp</span>
            <Phone className="w-6 h-6" />
          </a>
          <a href="mailto:jonathanmcantero@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">Email</span>
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/jonathan.cantero20" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">Instagram</span>
            <Instagram className="w-6 h-6" />
          </a>
        </div>
        
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 text-sm">
          &copy; {currentYear} Jonathan Cantero. Todos los derechos reservados.
        </p>
        <p className="text-gray-600 text-sm mt-2 md:mt-0">
          Diseñado y desarrollado con pasión.
        </p>
      </div>
    </footer>
  );
}

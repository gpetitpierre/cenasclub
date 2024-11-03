import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 style={{ color: '#9e0043' }} className="text-xl font-bold mb-4">CenasClub</h3>
            <p className="text-gray-400">
              Conectando personas a través de experiencias gastronómicas únicas.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <FooterLink text="Sobre Nosotros" />
              <FooterLink text="Cómo Funciona" />
              <FooterLink text="Preguntas Frecuentes" />
              <FooterLink text="Contacto" />
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <FooterLink text="Términos de Servicio" />
              <FooterLink text="Política de Privacidad" />
              <FooterLink text="Política de Cookies" />
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook className="w-5 h-5" />} />
              <SocialIcon icon={<Instagram className="w-5 h-5" />} />
              <SocialIcon icon={<Twitter className="w-5 h-5" />} />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CenasClub. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ text }: { text: string }) {
  return (
    <li>
      <a
        href="#"
        style={{ '--hover-color': '#9e0043' } as React.CSSProperties}
        className="text-gray-400 hover:text-[var(--hover-color)] transition-colors"
      >
        {text}
      </a>
    </li>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a
      href="#"
      style={{ '--hover-color': '#9e0043' } as React.CSSProperties}
      className="p-2 bg-gray-800 hover:bg-[var(--hover-color)] transition-colors"
    >
      {icon}
    </a>
  );
}
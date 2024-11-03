import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span style={{ color: '#9e0043' }} className="text-2xl font-bold">CenasClub</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#" text="Cómo Funciona" />
            <NavLink href="#" text="Encontrar Cenas" />
            <NavLink href="#" text="Organizar una Cena" />
            <NavLink href="#" text="Sobre Nosotros" />
            <button style={{ backgroundColor: '#9e0043' }} className="text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
              Registrarse
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#" text="Cómo Funciona" />
            <MobileNavLink href="#" text="Encontrar Cenas" />
            <MobileNavLink href="#" text="Organizar una Cena" />
            <MobileNavLink href="#" text="Sobre Nosotros" />
            <button style={{ backgroundColor: '#9e0043' }} className="w-full text-center text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
              Registrarse
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      style={{ '--hover-color': '#9e0043' } as React.CSSProperties}
      className="text-gray-600 hover:text-[var(--hover-color)] transition-colors"
    >
      {text}
    </a>
  );
}

function MobileNavLink({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      style={{ '--hover-color': '#9e0043' } as React.CSSProperties}
      className="block px-3 py-2 text-gray-600 hover:text-[var(--hover-color)] transition-colors"
    >
      {text}
    </a>
  );
}
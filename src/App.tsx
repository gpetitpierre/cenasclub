import React from 'react';
import { Users, UtensilsCrossed, ChefHat, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EventCard from './components/EventCard';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[90vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80"
            alt="Mesa de cena"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Conecta a Través de Experiencias Culinarias</h1>
            <p className="text-xl mb-8">Únete a cenas exclusivas, conoce gente increíble y comparte momentos inolvidables alrededor de la mesa.</p>
            <button style={{ backgroundColor: '#9e0043' }} className="hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all">
              Unirse a la Próxima Cena <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Cómo Funciona CenasClub</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<ChefHat className="w-8 h-8" style={{ color: '#9e0043' }} />}
              title="Experiencias Seleccionadas"
              description="Anfitriones y lugares cuidadosamente elegidos para garantizar experiencias gastronómicas excepcionales"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" style={{ color: '#9e0043' }} />}
              title="Conoce Gente Nueva"
              description="Conecta con entusiastas de la gastronomía en tu ciudad"
            />
            <FeatureCard
              icon={<UtensilsCrossed className="w-8 h-8" style={{ color: '#9e0043' }} />}
              title="Comida Increíble"
              description="Disfruta de menús únicos creados por anfitriones y chefs apasionados"
            />
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Próximas Cenas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <EventCard
              image="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=280,height=280/event-covers/mx/9536b09c-fe11-40f8-bb08-03e5a766313b"
              title="Cena Francesa en Relais"
              date="15 de Marzo, 2024"
              location="Centro de Madrid"
              price="45€"
              bookingUrl="https://lu.ma/l1om9fnx"
            />
            <EventCard
              image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
              title="Experiencia Fusión"
              date="22 de Marzo, 2024"
              location="Salamanca"
              price="55€"
            />
            <EventCard
              image="https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&q=80"
              title="Tapas Españolas"
              date="29 de Marzo, 2024"
              location="La Latina"
              price="40€"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="text-center p-6">
      <div style={{ backgroundColor: 'rgba(158, 0, 67, 0.1)' }} className="inline-block p-4 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;
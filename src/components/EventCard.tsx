import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  location: string;
  price: string;
  bookingUrl?: string;
}

export default function EventCard({ 
  image, 
  title, 
  date, 
  location, 
  price,
  bookingUrl 
}: EventCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        <div className="flex justify-between items-center">
          <span style={{ color: '#9e0043' }} className="text-xl font-bold">{price}</span>
          {bookingUrl ? (
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#9e0043' }}
              className="hover:opacity-90 text-white px-4 py-2 rounded-full text-sm font-semibold transition-opacity"
            >
              Reservar
            </a>
          ) : (
            <button
              style={{ backgroundColor: '#9e0043' }}
              className="hover:opacity-90 text-white px-4 py-2 rounded-full text-sm font-semibold transition-opacity"
            >
              Reservar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
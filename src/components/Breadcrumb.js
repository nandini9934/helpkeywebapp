import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useImageGallery } from '../hooks/useImageGallery';
import { hotelImages } from '../data/images';
import { Wifi, Star, Utensils, Sparkles } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Breadcrumb = () => {
  const { currentImageIndex, nextImage, prevImage } = useImageGallery(hotelImages.length);
  const [searchParams] = useSearchParams();
  const propertyid = searchParams.get('propertyid');
  const [selectedHotel, setSelectedHotel] = useState(null);

  const hotels = [
    {
      id: 1,
      name: "Helpkey Prime The King's Court",
      city: 'Goa',
      rating: 4.5,
      reviews: 2104,
      amenities: ['Free Wifi', 'LCD TV', '24x7 Security'],
      cancellationPolicy: 'Free Cancellation',
      price: 3740,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200',
    },
    {
      id: 2,
      name: 'Helpkey Prime Sarala Crown',
      city: 'Goa',
      rating: 4.7,
      reviews: 1736,
      amenities: ['Free Wifi', 'Couple Friendly'],
      cancellationPolicy: 'Free Cancellation, Couple Friendly',
      price: 5400,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200',
    },
    {
      id: 3,
      name: 'Helpkey kanpur Sarala Crown',
      city: 'Kanpur',
      rating: 4.7,
      reviews: 1736,
      amenities: ['Free Wifi', 'Couple Friendly'],
      cancellationPolicy: 'Free Cancellation, Couple Friendly',
      price: 5400,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200',
    },
    {
      id: 4,
      name: 'Helpkey kanpur Sarala Crown',
      city: 'Kanpur',
      rating: 4.7,
      reviews: 1736,
      amenities: ['Free Wifi', 'Couple Friendly'],
      cancellationPolicy: 'Free Cancellation, Couple Friendly',
      price: 5400,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200',
    },
    {
      id: 6,
      name: 'Helpkey lucknow Sarala Crown',
      city: 'Lucknow',
      rating: 4.7,
      reviews: 1736,
      amenities: ['Free Wifi', 'Couple Friendly'],
      cancellationPolicy: 'Free Cancellation, Couple Friendly',
      price: 5400,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200',
    },
    {
      id: 7,
      name: 'Helpkey jaipur Sarala Crown',
      city: 'jaipur',
      rating: 4.7,
      reviews: 1736,
      amenities: ['Free Wifi', 'Couple Friendly'],
      cancellationPolicy: 'Free Cancellation, Couple Friendly',
      price: 5400,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200',
    },
    {
      id: 9,
      name: 'Helpkey jaipur Sarala Crown',
      city: 'jaipur',
      rating: 4.7,
      reviews: 1736,
      amenities: ['Free Wifi', 'Couple Friendly'],
      cancellationPolicy: 'Free Cancellation, Couple Friendly',
      price: 5400,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200',
    }
  ]

  useEffect(() => {
    if (propertyid) {
      const hotel = hotels.find((h) => String(h.id) === propertyid); // Step 2: Filter
      setSelectedHotel(hotel);
    }
  }, [propertyid]);

  if (!selectedHotel) {
    return <p>Loading hotel details...</p>;
  }
  return (
    <>
      <div className='container mx-auto'>
        <div className="p-4 text-sm text-gray-600">
          All Hotels &gt; Hotels in {selectedHotel.city} &gt; {selectedHotel.name}
        </div>
        <div className="px-4 py-2 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold">{selectedHotel.name}</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-gray-600">{selectedHotel.city}</span>
              <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">Couple Friendly</span>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-blue-900 text-white px-3 py-1 rounded-lg text-xl">{selectedHotel.rating}</div>
            <div className="text-blue-600 mt-1">2104 Reviews</div>
          </div>
        </div>
        <div className="relative mt-4">
          <div className="relative h-[400px] overflow-hidden">
            <img
              src={selectedHotel.image}
              alt="Hotel"
              className="w-full h-full object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded">
              {currentImageIndex + 1}/{hotelImages.length}
            </div>
          </div>
        </div>
        {/* Amenities */}
        <div className="grid md:grid-cols-3 gap-8 p-6">
          <div className="md:col-span-2">
            <div className="flex gap-4 mb-6">
              <div className="bg-green-50 px-4 py-2 rounded-lg flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Pay @ Hotel</span>
              </div>
              <div className="bg-green-50 px-4 py-2 rounded-lg flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Free WiFi</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-8">
              <AmenityItem icon={<Wifi className="w-6 h-6" />} label="High Speed Wifi" />
              <AmenityItem icon={<Star className="w-6 h-6" />} label="Well-equipped Rooms" />
              <AmenityItem icon={<Utensils className="w-6 h-6" />} label="Healthy Food" />
              <AmenityItem icon={<Sparkles className="w-6 h-6" />} label="100% Hygiene" />
            </div>
          </div>
          {/* BookingCard */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Fabulous</h3>
              <div className="text-green-600 text-sm">
                <div>92% guests rated 4+</div>
                <div>99% guests recommend</div>
              </div>
            </div>

            <div className="flex gap-4 mb-4">
              <DateDisplay date="03 Jan 2025" day="Friday" />
              <DateDisplay date="04 Jan 2025" day="Saturday" />
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <div>1 × Deluxe Room for 1 Guest</div>
                <div className="text-xl font-semibold">₹{selectedHotel.price}</div>
              </div>
              <button className="w-full bg-yellow-400 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Breadcrumb;

function AmenityItem({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-gray-700">{icon}</div>
      <span className="text-sm text-center">{label}</span>
    </div>
  );
}

function DateDisplay({ date, day }) {
  return (
    <div className="flex-1">
      <div className="flex items-center gap-2">
        <Calendar className="w-4 h-4" />
        <span>{date}</span>
      </div>
      <div className="text-sm text-gray-500">{day}</div>
    </div>
  );
}
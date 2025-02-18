import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Wifi, Star, Utensils, Sparkles } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { useImageGallery } from '../hooks/useImageGallery'; // assuming this hook is working

const Breadcrumb = () => {
  const [searchParams] = useSearchParams();
  const propertyid = searchParams.get('propertyid');

  const { currentImageIndex, nextImage, prevImage } = useImageGallery(1);  // We'll update this dynamically later

  const [selectedHotel, setSelectedHotel] = useState(null);
  const [loading, setLoading] = useState(true);  // To track loading state
  const [error, setError] = useState(null);  // To handle any errors during data fetching

  // Fetch hotel data based on propertyid
  useEffect(() => {
    if (propertyid) {
      setLoading(true);
      setError(null);

      // Fetch the hotel details (replace the URL with your API endpoint)
      fetch(`https://helpkeyapi.onrender.com/api/nearby-vendors?propertyid=${propertyid}`)
        .then((response) => response.json())
        .then((data) => {
          setSelectedHotel(data);
          setLoading(false);  // Set loading to false when data is fetched
        })
        .catch((error) => {
          setError('Failed to load hotel details.');
          setLoading(false);
        });
    }
  }, [propertyid]);

  if (loading) {
    return <p>Loading hotel details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!selectedHotel) {
    return <p>No hotel found for this ID.</p>;
  }

  return (
    <>
      <div className='container mx-auto'>
        <div className="p-4 text-sm text-gray-600">
          All Hotels &gt; Hotels in {selectedHotel.city} &gt; {selectedHotel.name}
        </div>

        {/* Hotel Name, City, Rating, Reviews */}
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
            <div className="text-blue-600 mt-1">{selectedHotel.reviews} Reviews</div>
          </div>
        </div>

        {/* Hotel Image Gallery */}
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
            {selectedHotel.images && Array.isArray(selectedHotel.images) && selectedHotel.images.length > 0 && (
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded">
                {currentImageIndex + 1}/{selectedHotel.images.length}
              </div>
            )}
          </div>
        </div>

        {/* Hotel Amenities */}
        <div className="grid md:grid-cols-3 gap-8 p-6">
          <div className="md:col-span-2">
            {/* Render amenities only if available */}
            {selectedHotel.amenities && Array.isArray(selectedHotel.amenities) && selectedHotel.amenities.length > 0 && (
              <div className="flex gap-4 mb-6">
                {selectedHotel.amenities.map((amenity, index) => (
                  <div key={index} className="bg-green-50 px-4 py-2 rounded-lg flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="grid grid-cols-4 gap-4 mt-8">
              <AmenityItem icon={<Wifi className="w-6 h-6" />} label="High Speed Wifi" />
              <AmenityItem icon={<Star className="w-6 h-6" />} label="Well-equipped Rooms" />
              <AmenityItem icon={<Utensils className="w-6 h-6" />} label="Healthy Food" />
              <AmenityItem icon={<Sparkles className="w-6 h-6" />} label="100% Hygiene" />
            </div>
          </div>

          {/* Booking Card */}
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
};

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

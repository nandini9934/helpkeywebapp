import React from 'react';
import { useNavigate } from 'react-router-dom';

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  const navigateToHotel = (id) => {
    navigate('/breadcrumb?propertyid=' + id);
  };

  return (
    <div
      className="container mx-auto flex items-start p-4 cursor-pointer border-b border-gray-200"
      onClick={() => navigateToHotel(hotel.id)}
    >
      {/* Replace image with vendor's image, if available */}
      <img
        src={hotel.image || 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200'}  // You can add a default image path here
        alt={hotel.servicename}
        className="w-32 h-24 object-cover rounded-md"
      />
      <div className="ml-4 flex-grow">
        <h2 className="font-bold text-lg">{hotel.servicename}</h2>
        <p className="text-gray-500">{hotel.address}</p>
        <div className="flex items-center text-yellow-500">
          <span className="font-bold">{hotel.rating || 'N/A'}/5</span>
          <span className="ml-2 text-gray-500">({hotel.reviews || '5'} Reviews)</span>
        </div>
        <p className="text-sm text-gray-600">{hotel.email || 'N/A'}</p>
        <p className="mt-2 text-green-600">{hotel.cancellationPolicy || 'N/A'}</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold text-red-500">₹{hotel.price || 'N/A'}</p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
          Select Rooms
        </button>
      </div>
    </div>
  );
};

export default HotelCard;


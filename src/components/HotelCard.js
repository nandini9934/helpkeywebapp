import React from 'react';
import {useNavigate} from  'react-router-dom'

const HotelCard = ({ hotel }) => {

const navigate = useNavigate();

const navigateToHotel =(id)=>
{
  navigate('/breadcrumb?propertyid=' + id)
}

  return (
    <div className="container mx-auto flex items-start p-4 cursor-pointer border-b border-gray-200" onClick={()=>navigateToHotel(hotel.id)}>
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-32 h-24 object-cover rounded-md"
      />
      <div className="ml-4 flex-grow">
        <h2 className="font-bold text-lg">{hotel.name}</h2>
        <p className="text-gray-500">{hotel.location}</p>
        <div className="flex items-center text-yellow-500">
          <span className="font-bold">{hotel.rating}/5</span>
          <span className="ml-2 text-gray-500">({hotel.reviews} Reviews)</span>
        </div>
        <p className="text-sm text-gray-600">{hotel.amenities.join(', ')}</p>
        <p className="mt-2 text-green-600">{hotel.cancellationPolicy}</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold text-red-500">₹{hotel.price}</p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
          Select Rooms
        </button>
      </div>
    </div>
  );
};

export default HotelCard;

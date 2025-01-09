import React from 'react';
import HotelCard from './HotelCard';

const HotelList = ({ hotels }) => {
  return (
    <div className="container mx-auto p-4 bg-white">
      <h2 className="font-bold text-lg mb-4">
        Showing {hotels.length} Helpkeys
      </h2>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;

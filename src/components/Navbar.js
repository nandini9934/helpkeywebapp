import React, { useState } from 'react';

const Navbar = ({setCity}) => {
    const [location, setLocation] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [guests, setGuests] = useState(1);
   
    const handleSearch = () => {
       setCity(location);
    };

    return (
        <div className="w-full bg-custom-gradient py-4">
            <div className="flex justify-center items-center">
                <div className="flex space-x-2">
                    {/* Location Input */}
                    <div className="flex flex-col items-start px-4 py-2 bg-custompurple rounded-md">
                        <label className="text-s font-medium text-white">LOCATION</label>
                        <input
                            type="text"
                            placeholder="Enter location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="bg-transparent text-white placeholder-white focus:outline-none mt-1"
                        />
                    </div>

                    {/* Check-In Input */}
                    <div className="flex flex-col items-start px-4 py-2 bg-custompurple rounded-md">
                        <label className="text-s font-medium text-white">CHECK IN</label>
                        <input
                            type="date"
                            value={checkInDate}
                            onChange={(e) => setCheckInDate(e.target.value)}
                            className="bg-transparent text-white focus:outline-none mt-1"
                        />
                    </div>

                    {/* Check-Out Input */}
                    <div className="flex flex-col items-start px-4 py-2 bg-custompurple rounded-md">
                        <label className="text-s font-medium text-white">CHECK OUT</label>
                        <input
                            type="date"
                            value={checkOutDate}
                            onChange={(e) => setCheckOutDate(e.target.value)}
                            className="bg-transparent text-white focus:outline-none mt-1"
                        />
                    </div>

                    {/* Guests Dropdown */}
                    <div className="flex flex-col items-start px-4 py-2 bg-custompurple rounded-md">
                        <label className="text-s font-medium text-white">GUESTS</label>
                        <select
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="bg-transparent text-white focus:outline-none mt-1"
                        >
                            {[...Array(10).keys()].map((guest) => (
                                <option key={guest + 1} value={guest + 1} className="text-black">
                                    {guest + 1} Guest{guest > 0 ? 's' : ''}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Search Button */}
                    <button
                        onClick={handleSearch}
                        className="px-6 py-2 bg-custompurple border border-white text-s font-medium text-white rounded-md hover:bg-[#39446C]"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

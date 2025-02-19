import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNearbyVendors, fetchVendorsByCity } from '../redux/slices/vendorsSlice';
import HotelCard from './HotelCard';
import { useLocation } from 'react-router-dom';

const HotelList = () => {
    const dispatch = useDispatch();
    const { vendors, isLoading, error } = useSelector((state) => state.vendorsAuto);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const city = searchParams.get("city"); // Extract 'city' from URL

    useEffect(() => {
        if (city) {
            // If city is provided, fetch hotels based on city
            dispatch(fetchVendorsByCity(city));
        } else if (navigator.geolocation) {
            // Else, fetch nearby hotels based on geolocation
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    dispatch(fetchNearbyVendors({ latitude, longitude }));
                },
                (error) => {
                    console.error('Error fetching location:', error);
                    alert('Please enable location access to find nearby vendors.');
                }
            );
        }
    }, [dispatch, city]);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">
                {city ? `Hotels in ${city}` : 'Nearby Hotels'}
            </h2>

            {isLoading && <p className="text-lg text-gray-500">Loading...</p>}
            {error && <p className="text-lg text-red-500">Error: {error}</p>}

            {vendors && vendors.length > 0 ? (
                vendors.map((vendor) => (
                    <HotelCard key={vendor.id} hotel={vendor} />
                ))
            ) : (
                !isLoading && !error && (
                    <p className="text-lg text-gray-500">No vendors found.</p>
                )
            )}
        </div>
    );
};

export default HotelList;

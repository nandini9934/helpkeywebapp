import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch hotels by user location
export const fetchNearbyVendors = createAsyncThunk(
    'vendors/fetchNearbyVendors',
    async ({ latitude, longitude }) => {
        const response = await fetch(
            `https://helpkeyapi.onrender.com/api/nearby-vendors?latitude=${latitude}&longitude=${longitude}`
        );
        const data = await response.json();
        return data; // Ensure response is JSON
    }
);

// Fetch hotels by city name
export const fetchVendorsByCity = createAsyncThunk(
    'vendors/fetchVendorsByCity',
    async (city) => {
        const response = await fetch(
            `http://localhost:3000/api/vendors-by-city?city=${city}`
        );
        const data = await response.json();
        return data; // Ensure response is JSON
    }
);

const vendorsSlice = createSlice({
    name: 'vendors',
    initialState: {
        vendors: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNearbyVendors.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchNearbyVendors.fulfilled, (state, action) => {
                state.isLoading = false;
                state.vendors = Array.isArray(action.payload.vendors)
                    ? action.payload.vendors
                    : [];
            })
            .addCase(fetchNearbyVendors.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(fetchVendorsByCity.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchVendorsByCity.fulfilled, (state, action) => {
                state.isLoading = false;
                state.vendors = action.payload;
            })
            .addCase(fetchVendorsByCity.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default vendorsSlice.reducer;

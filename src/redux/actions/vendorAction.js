import axios from "axios";

const isLoading = () => {
    return { type: 'NEAR_BY_VENDOR' }
}
const nearByVendorsSuccess = (vendor) => {
    return { type: 'NEAR_BY_VENDORS_SUCCESS', data: vendor }
}

const failure = (message) => {
    
    return { type: "FAILURE_VENDOR", error: message }
} 


export const nearByVendors = (locationDetails) => async (dispatch) => {
    dispatch(isLoading());
    console.log(locationDetails)
    try {
        const response = await axios.post("https://helpkeyapi.onrender.com/api/nearby-vendors", locationDetails);
        //console.log(response.data);
        const { vendors } = response.data; // Assuming API returns token & user info

        dispatch(nearByVendorsSuccess(vendors));

    } catch (error) {
        console.log(error)
            ; dispatch(failure(error?.message || "Something went wrong"));
    }
};

const selectHotel =(hotel)=>
{
   return {type:"SELECT_HOTEL",data:hotel}
}




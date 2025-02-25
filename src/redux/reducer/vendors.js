const initialState = {
  vendors: [],
  error: '',
  msg: '',
  isHotelLoading: false,
  hotels: [],
  selectedHotel:{}
};

const vendorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEAR_BY_VENDORS_SUCCESS':
      return {
        ...state,
        vendors: action.data,
        isHotelLoading: false,
        error: ''
      };

    case "NEAR_BY_VENDOR":
      return {
        ...state,
        isHotelLoading: true
      }

    case "FAILURE_VENDOR":
      return {
        ...state,
        error: action.error,
        isHotelLoading: false
      }

    case "SELECT_HOTEL":
      return{
        ...state,
        selectedHotel:action.data
      }  

    default:
      return state;
  }
};

export default vendorsReducer;

const initialState = {
  vendors: [],
  error: '',
  msg: '',
  isHotelLoading: false,
  hotels: []
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

    default:
      return state;
  }
};

export default vendorsReducer;

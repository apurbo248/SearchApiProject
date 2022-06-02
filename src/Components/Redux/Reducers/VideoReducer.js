export const getVideoReducer = (state = { videos: [] }, action) => {
  switch (action.type) {
    case "ALL_VIDEO_REQUEST":
      return {
        loading: true,
        videos: [],
      };
    case "ALL_VIDEO_SUCCESS":
      return {
        loading: false,
        videos: action.payload,
      };

    case "ALL_VIDEO_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    case "CLEAR_ERROR":
      return { ...state, error: null };

    default:
      return state;
  }
};

// export const getVIDEODetailsReducer = (state = { VIDEO: {} }, action) => {
//   switch (action.type) {
//     case "PRODUCT_DETAILS_REQUEST":
//       return {
//         loading: true,
//         ...state,
//       };
//     case "PRODUCT_DETAILS_SUCCESS":
//       return {
//         loading: false,
//         product: action.payload,
//       };
//     case "PRODUCT_DETAILS_FAIL":
//       return {
//         loading: false,
//         error: action.payload,
//       };

//     case "CLEAR_ERROR":
//       return { ...state, error: null };

//     default:
//       return state;
//   }
//};

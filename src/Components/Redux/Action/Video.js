export const getVideos =
  (keyword) =>
  async (dispatch) => {
    console.log(keyword);
    try {
      dispatch({ type: "ALL_VIDEO_REQUEST" });

      await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${keyword}&key=AIzaSyAF-ByPKNvBqma0OD-IB-viyqvF9SGU_BM`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data.items);
          dispatch({
            type: "ALL_VIDEO_SUCCESS",
            payload: data.items,
          });
        });
    } catch (error) {
      dispatch({
        type: "ALL_VIDEO_FAIL",
        payload: error.response,
      });
    }
  };

//ClearingError
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: "CLEAR_ERROR" });
};

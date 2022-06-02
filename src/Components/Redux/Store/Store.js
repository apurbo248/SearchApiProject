import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getVideoReducer } from "../Reducers/VideoReducer";

const rootReducer = combineReducers({
  VideoData: getVideoReducer,
  // VideoDetails: getProductDetailsReducer,
});

let initialState = {};
const middleware = [thunk];

const Store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;

import { combineReducers } from "redux";

import authReducer from "./authReducer.js";
// import postReducer from "./PostReducer";
// import chatReducer from "./ChatUserReducer";

export const reducers = combineReducers({authReducer})
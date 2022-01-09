import { combineReducers } from "redux";

import posts from './posts';
import authReducer from "./auth";
import profs from './profs';
import conversations from "./conversations";

export default combineReducers({ profs,posts,authReducer,conversations });
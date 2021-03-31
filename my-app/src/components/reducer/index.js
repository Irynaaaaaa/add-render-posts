import {combineReducers} from "redux";
import postReducer from "./tweetReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
        post: postReducer,
    user: userReducer
    }
);

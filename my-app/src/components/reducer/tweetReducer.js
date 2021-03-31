import {GET_POSTS_SUCCESS,GET_POSTS_REQUEST,POST_POST_SUCCESS,POST_POST_REQUEST} from "../actions/index";

const initialState = {
    data: []
};

const postReducer = (state = initialState, action)=>{
    switch (action.type) {
        
        case GET_POSTS_REQUEST:
            return state;
        case GET_POSTS_SUCCESS:
            return {...state, data:action.payload};
        case POST_POST_REQUEST:
            return state;
        case POST_POST_SUCCESS:
            return {...state, data:action.payload};
        default:
            return state
    }


};
export default postReducer;
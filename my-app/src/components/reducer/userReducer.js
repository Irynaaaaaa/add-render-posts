import {START_GET_USERS_REQUEST,GET_USERS_SUCCESS,START_POST_USER_REQUEST,POST_USER_SUCCESS} from "../actions/index";

const initialState = {
    data : []
};

const userReducer  = (state = initialState,action)=>{
    switch (action.type) {
        case START_GET_USERS_REQUEST:
            return {...state};
        case GET_USERS_SUCCESS:
            return {...state, data: action.payload.data};
        case START_POST_USER_REQUEST:
            return {...state};
        case POST_USER_SUCCESS:
            console.log('posted user');
            return {...state};
        default:
            return state;
    }
};
export default userReducer;
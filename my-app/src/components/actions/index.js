
import axios from "axios"

export const START_GET_USERS_REQUEST = 'START_GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const START_POST_USER_REQUEST = 'START_POST_USER_REQUEST';
export const POST_USER_SUCCESS = 'POST_USER_SUCCESS';
export const SET_LIKE = 'SET_LIKE';
export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const POST_POST_REQUEST = 'POST_POST_REQUEST';
export const POST_POST_SUCCESS = 'POST_POST_SUCCESS';


export const getUsers = () => {
    return dispatch => {
        dispatch(getUsersRequest());
        axios
        .get('http://domer.tech:9999/users')
        .then(result => {
                    dispatch(getUserSuccess(result.data))
                }
            )
    }
}

export   function addUser  ({name, username, avatar})  {
    const url = 'http://domer.tech:9999/users';
    const data = {
        name,
        username,
        avatar
    };

    return async dispatch => {
        dispatch(postUserRequest());

        try {
            const response = await fetch(url, {
              method: 'POST', 
              body: JSON.stringify(data), 
              headers: {
                'Content-Type': 'application/json'
              }
            });
            const json = await response.json();
            console.log('Success:', JSON.stringify(json));
            postUserSuccess(json)
          } catch (error) {
            console.error('Error:', error);
          }
        }
}

export function getPosts() {
    return dispatch => {
        dispatch(getPostsRequest());
        fetch('http://domer.tech:9999/tweets/').then(res => dispatch(getPostsSuccess(res.data.data)))
    }
}
export const postPost=({userId,content,image})=>{
    const url = 'http://domer.tech:9999/tweets';
    const data = {
        userId,
        content,
        image
    };
    return async dispatch =>{
       dispatch(postPostRequest());

       try {
        const response = await fetch(url, {
          method: 'POST', 
          body: JSON.stringify(data), 
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const json = await response.json();
        console.log('Success:', JSON.stringify(json));
        postPostSuccess(json)
      } catch (error) {
        console.error('Error:', error);
      }
    }
};




const getUsersRequest = ()=> {
    return{
        type: START_GET_USERS_REQUEST,
    }
};
const getUserSuccess = (data)=>{
    return{
        type: GET_USERS_SUCCESS,
        payload: data
    }
};
const postUserRequest = () => {
    return {
        type: START_POST_USER_REQUEST
    }
};
const postUserSuccess = (data) => {
    return {
        type: POST_USER_SUCCESS,
        payload : {...data}
    }
};





const getPostsRequest = () => {
    return {
        type: GET_POSTS_REQUEST
    }
};

const getPostsSuccess = (data) => {
    return {
        type: GET_POSTS_SUCCESS,
        payload : data
    }
};
const postPostRequest = ()=>{
    return{
        type: POST_POST_REQUEST
    }
};
const postPostSuccess = (obj)=>{
    return{
        type: POST_POST_SUCCESS,
        payload: obj
    }
};
import { profileAPI, userAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you', likeCount: 2 },
        { id: 2, message: 'Its my first post!', likeCount: 3 },
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST,newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => async (dispach) => {
       let response = await userAPI.getProfile(userId)
                dispach(setUserProfile(response.data));        
 }


export const getStatus = (userId) => async (dispach) => {
       let response = await profileAPI.getStatus(userId)
         
                dispach(setStatus(response.data));
         
    }

export const updateStatus = (status) => async (dispach) => {
      let response = await profileAPI.updateStatus(status)
            
                if(response.data === 0) {
                    dispach(setStatus(status));
                }     
         
    }



export default profileReducer;

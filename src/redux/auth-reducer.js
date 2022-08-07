import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, 
                ...action.payload
                
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, 
    payload: {userId, email, login, isAuth} })

export const getAuthUserData = ()=> async (dispach)=>{
  let response = await authAPI.my()
  
          if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispach(setAuthUserData(id, email, login, true));
          }
      
    }


export const login = (email, password, rememberMe)=> async (dispach)=>{
       let response = await authAPI.login(email, password, rememberMe)
       
          if (response.data.resultCode === 0) {
            dispach(getAuthUserData());
          } else
          {
            let message = response.data.messages.lenght > 0 ? response.data.messages[0] : "Some error"
            dispach(stopSubmit("login", {_error: message}));
          }
   
    }

    export const logout = ()=> (dispach)=>{
        authAPI.logout()
        .then(response => {
          if (response.data.resultCode === 0) {
            dispach(setAuthUserData(null, null, null, false));
          }
        });
    }


export default authReducer;
import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHAURL_SUCCESS = ' samurai-network/auth/GET_CAPTCHAURL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
          case GET_CAPTCHAURL_SUCCESS:
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

    export const getCaptchaUrlSuccess = (captchaUrl) => 
    ({ type: GET_CAPTCHAURL_SUCCESS,payload: {captchaUrl} }) 

export const getAuthUserData = ()=> async (dispach)=>{
  let response = await authAPI.my()
  
          if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispach(setAuthUserData(id, email, login, true));
          }
      
    }


export const login = (email, password, rememberMe, captcha)=> async (dispach)=>{
       let response = await authAPI.login(email, password, rememberMe, captcha)
       
          if (response.data.resultCode === 0) {
            // jezeli wszystko ok to my otrymujemo danni
            dispach(getAuthUserData());
          } else
          if (response.data.resultCode===10){
            dispach(getCaptchaURL());
          }
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

    export const getCaptchaURL = ()=> async (dispach)=>{
      const response = await securityAPI.getCaptchaURL();
      const captchaUrl = response.data.url;
      dispach(getCaptchaUrlSuccess(captchaUrl));
  }


export default authReducer;
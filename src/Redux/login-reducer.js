import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false


}


const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
}

export const setUserData = (email, id, login, isAuth) => ({type: SET_USER_DATA, payload: {email, id, login, isAuth}})

export const getAuth = () => async (dispatch) => {
       let response = await authAPI.authMe()
            if (response.data.resultCode === 0){
                let {email, id, login} = response.data.data
                dispatch(setUserData(email, id, login, true))
            }
    }

export const login = (email, password, rememberMe) =>
    async (dispatch) =>{
        let response = await authAPI.login(email, password, rememberMe)
            if (response.data.resultCode === 0){
                dispatch(getAuth())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit('login', {_error: message}))
            }
    }



export const logout = () =>
    async (dispatch) =>{
        let response = await authAPI.logout()
            if (response.data.resultCode === 0){
                dispatch(setUserData(null, null, null, false))
            }
    }


export default loginReducer;

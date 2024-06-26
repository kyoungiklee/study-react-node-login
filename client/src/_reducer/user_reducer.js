/* eslint-disable import/no-anonymous-default-export */
import { 
    LOGIN_USER
    , REGISTER_USER
    , AUTH_USER
} from "../_actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload}
        case REGISTER_USER:
            return {...state, register: action.payload}
        case AUTH_USER:
            return { ...state, userData: action.payload } // action.payload에는 사용자정보가 있음
        default:
            return state;
    }
}
import { LOGIN_USER , REGISTER_USER } from '../actions/type';

export default function(state= {}, action) {
    switch(action.type) {
        case REGISTER_USER : 
           return { ...state, register: action.payload}
        case LOGIN_USER :
             console.log(action.payload)
            return { ...state, loginSuccess: action.payload}
        default: 
            return state;
        
    }
}
import { LOGIN_USER } from '../actions/type';

export default function(state= {}, action) {
    switch(action.type) {
        case LOGIN_USER :
             console.log(action.payload)
            return { ...state, loginSuccess: action.payload}
        default: 
            return state;
        
    }
}
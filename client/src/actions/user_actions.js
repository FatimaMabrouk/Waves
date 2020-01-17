import axios from 'axios';

import { USER_SERVER } from '../component/uitls/misc'
import Login from '../component/Register_Login/login';
import { LOGIN_USER , REGISTER_USER} from './type';


export function loginUser(dataToSubmit) {
    const request = axios.post('http://localhost:3002/api/users/login',dataToSubmit)
                    .then(response =>  response.data )
    
    return {
        type: LOGIN_USER,
        payload:request
    }

}

export function registerUser(dataToSubmit) {
    const request = axios.post('http://localhost:3002/api/users/register', dataToSubmit)
                    .then( response => response.data);
              
    return {
        type: REGISTER_USER,
        payload: request
    }                 
}
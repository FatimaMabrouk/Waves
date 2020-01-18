import axios from 'axios';

// import Login from '../component/Register_Login/login';
import { LOGIN_USER , REGISTER_USER, AUTH_USER, LOGOUT_USER } from './type';


export function loginUser(dataToSubmit) {
    const request = axios.post('http://localhost:3002/api/users/login',dataToSubmit)
                    .then(response =>  response.data)
         
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

export function auth(dataToSubmit){
    const request = axios.get('http://localhost:3002/api/users/auth', dataToSubmit)
                    .then( response => response.data);
               console.log(request);
    return {
        type: AUTH_USER,
        payload: request
    }     

}



export function logoutUser(){

    const request = axios.get('http://localhost:3002/api/user/logout')
    .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }

}
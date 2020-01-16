import React from 'react';
import MyButton from '../uitls/buttun'
import Login from './login'
const RegisterLogin = () => {
    return (
        <div className="page_wrapper">
            <div className="container">
                <div className="register_login_container">
                    <div className="left">
                        <h1>New Customers</h1>
                        <p>Energy login. Email, username, or account no. * ... Whether you're moving out of your home or moving into a new one, it's simple with us. ... 2010 - 2019 Shell Energy Retail LimitedThe Registered Office of Shell Energy Retail Limited is Shell ...</p>
                        <MyButton 
                         type="default"
                         title="Create an Account"
                         linkTo="/register" 
                         addStyles={{
                             margin:'10px 0 0 0'
                         }}
                        />
                    </div>
                    <div className="right">
                        <h2> Registered Login </h2>
                        <p> if you have an account please  login </p>
                        <Login />
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default RegisterLogin;
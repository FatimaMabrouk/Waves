import React, { Component } from 'react'
import FormField from '../uitls/Form/FormField';
import { connect } from 'react-redux';

 class Login extends Component {

    state = {
        formError: false,
        formSuccess:'',
        formData: {
            email: {
                element:'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMassege:''
            }
        },

        password: {
            element:'input',
            value: '',
            config: {
                name: 'password_input',
                type: 'password',
                placeholder: 'Enter your password'
            },
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
            validationMassege:''
        }
    }
  
    updateForm = (element) => {
       const newFormData = update(element, this.state.formdata,'login');
    }     
    onSubmitForm= () => {}  

    render() {
        return (
            
                <div className="siging_wrapper">
                    <form onSubmit={(event)=> this.onSubmitForm(event)}>
                    <FormField 
                    id={'email'}
                    formData={this.state.formData.email}
                    change={(element)=> this.updateForm(element)}
                    
                    />
                      <FormField 
                    id={'password'}
                    formData={this.state.formData.password}
                    change={(element)=> this.updateForm(element)}
                    
                    />
                    </form>
                </div>
           
        )
    }
}

export default  connect()(Login);
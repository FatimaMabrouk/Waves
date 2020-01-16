import React, { Component } from 'react'
import FormField from '../uitls/Form/FormField';
import { connect } from 'react-redux';
import { update , generateData , isFormValid}  from '../uitls/Form/formActions'

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
    }
  
    updateForm = (element) => {
       const newFormData = update(element,this.state.formData,'login');
       this.setState({
           formError: false,
           formData: newFormData
       })
    }    

    onSubmitForm = (event) => {
        event.preventDefault();
        let dataToSubmit = generateData(this.state.formData,'login');
        let formIsValid = isFormValid(this.state.formData, 'login');

        if(formIsValid) {
            console.log(dataToSubmit);
        } else {
            this.setState({
               formError: true 
            })
        }
    }  

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
                    {this.state.formError ? 
                    <div className="error_label">
                      Please check your email;
                    </div>
                     : null }
                     <button onClick={(event)=> this.onSubmitForm(event)}> Log in </button>
                    </form>
                </div>
           
        )
    }
}

export default  connect()(Login);
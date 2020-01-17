import React, { Component } from 'react'
import { connect } from 'react-redux';
import FormField from '../uitls/Form/FormField';
import { loginUser } from '../../actions/user_actions';
import { update , generateData , isFormValid}  from '../uitls/Form/formActions'
import { registerUser } from '../../actions/user_actions';


 class Register extends Component {
    state = {
        formError: false,
        formSuccess:'',
        formData: {
            name: {
                element:'input',
                value: '',
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your name'
                },
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                validationMassege:''
            },
            lastname: {
                element:'input',
                value: '',
                config: {
                    nalastnameme: 'lastname_input',
                    type: 'text',
                    placeholder: 'Enter your lastname'
                },
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                validationMassege:''
            },
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
            },
            confirmPassword: {
                element:'input',
                value: '',
                config: {
                    name: 'ConfirmPassword_input',
                    type: 'password',
                    placeholder: 'confirmPassword your password'
                },
                validation: {
                    required: true,
                    confirm:'password'
                },
                valid: false,
                touched: false,
                validationMassege:''
            }    
           }
        }

        updateForm = (element) => {
            const newFormData = update(element,this.state.formData,'register');
            this.setState({
                formError: false,
                formData: newFormData
            })
         } 


         onSubmitForm = (event) => {
            event.preventDefault();
            let dataToSubmit = generateData(this.state.formData,'register');
            let formIsValid = isFormValid(this.state.formData, 'register');
             
    
            if(formIsValid) {
                console.log(dataToSubmit)
                // this.props.dispatch(loginUser(dataToSubmit)).then( response => {
                //     if(response.payload.loginSuccess) {
                //      console.log(response.payload);
                //     //  this.props.history.push('/user/dashboard')
                //     }else {
                //         this.setState({
                //             formError: true
                //         })
                //     }
                // });
    
            } else {
                this.setState({
                   formError: true 
                })
            }
        }  
        
    render() {
        return (
            <div className="page_wrapper">
                <div className="container">
                    <div className="register_login_container">
                        <div className="left">
                            <form onSubmit={(event)=> this.onSubmitForm(event)}>
                                <h2>Personal Information</h2>
                                  <div className="form_block_two">
                                       <div className="block">
                                         <FormField 
                                            id={'name'}
                                            formData={this.state.formData.name}
                                            change={(element)=> this.updateForm(element)}
                                            
                                            />
                                        </div>

                                  <div className="block">
                                        <FormField 
                                            id={'lastname'}
                                            formData={this.state.formData.lastname}
                                            change={(element)=> this.updateForm(element)}
                                            
                                            />
                                       </div>
                                   </div>

                                       <div>
                                           <FormField 
                                                id={'email'}
                                                formData={this.state.formData.email}
                                                change={(element)=> this.updateForm(element)}
                    
                                            />
                                       </div>
                               <h2> Veify Password </h2>
                               <div className="form_block_two"> 
                               <div className="block">
                                         <FormField 
                                            id={'password'}
                                            formData={this.state.formData.password}
                                            change={(element)=> this.updateForm(element)}
                                            
                                            />
                                        </div>

                                  <div className="block">
                                        <FormField 
                                            id={'confirmPassword'}
                                            formData={this.state.formData.confirmPassword}
                                            change={(element)=> this.updateForm(element)}
                                            
                                            />

                                  {this.state.formError ? 
                                        <div className="error_label">
                                        Please check your email;
                                        </div>
                                        : null }
                                        <button onClick={(event)=> this.onSubmitForm(event)}> Create an Account </button>
                                       </div>
                               </div>
                                
                            </form>

                        </div>

                    </div>

                </div>
                
            </div>
        )
    }
}
export default connect()(Register);

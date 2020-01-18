import React, {Component} from 'react';
import { connect } from 'react-redux';
import { auth } from '../actions/user_actions';
import { CircularProgress } from '@material-ui/core';

export default function(ComposedClass,reload,adminRoute = null){
    class AuthenticationCheck extends Component {

        state = {
            loading: true
        }
           
        componentDidMount(){
          this.props.dispatch(auth()).then( response => {
              let user = this.props.user.userData ;
                console.log(user);
            //   worging wronk jsudt to keep going on .
            //  if(!user.isAuth) {
            //     if(reload) {
            //         this.props.history.push('/Register_Login')
            //     }
            // } else{
            //     if(adminRoute && !user.IsAdmin){
            //         this.props.history.push('/user/dashboard')
            //     } else {
            //         if(reload === false) {
            //             this.props.history.push('/user/dashboard')
            //      } 
            // }
        // }


              this.setState({ loading: false})
          });
        }

        render() {
            if(this.state.loading){
                return (
                    <div className="main_loader">
                        <CircularProgress style={{color:'#2196F3'}} thickness={7}/> 
                    </div>
                )
            }
            return (
                // includes all props from the Router ... get from the server user info 
                <ComposedClass {...this.props} user={this.props.user}/>
           
                
            )
        }
    }

    function mapStateToProps(state){
        return {
            user: state.user
            
        }
    }

    return connect(mapStateToProps)(AuthenticationCheck)
}







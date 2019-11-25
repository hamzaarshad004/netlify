
import React, { Component } from "react";
import { connect } from "react-redux";

import LoginForm from './SignIn';

import LoginSuccess from './LoginSucess';
import { login } from '../../../../Server/LoginServer';
import   {SignIn_Action} from '../../../../Constants/loginactions';

import { SignIn_Status} from '../../../../Constants/loginactions';


const mapStateToProps = (state) => {
  console.log("****************************state:", state);
  return {
    
    signIn_Status: state.Loginreducer.signIn_status
     
  };
};

const mapDispatchToProps = (dispatch) => {

  return {


    handleSignIn: (username,password) => { dispatch(login(username,password)) },
   handleBackClick : () =>{ dispatch({ type:SignIn_Action.NEW }) }
  };
};



class LoginView extends Component {

  getScreen(status) {
    console.log("I am from login Component getScreen: " + status);
    switch (status) {
      case SignIn_Status.NEW:
        return (
          <LoginForm handleSignIn={this.props.handleSignIn} />
         
        );
        break;
      case SignIn_Status.SUCCESS:
   
      
          
        return (
         <LoginSuccess />
        );
        break;
        case SignIn_Status.FAILED:
            console.log('failed')
                return (<LoginForm handleSignIn={this.props.handleSignIn} serverResponse='NotExist'/>)
            default:
                break;
      
    }
  }

  render() {
    return (
      <div>
          {this.getScreen(this.props.signIn_Status)}
          </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);


// style={{width: '800px', margin: '0 auto', overflow: 'auto', height: '700px'}}

import React, { Component } from "react";
import RegisterView from "./Register.view";
import Proptypes from 'prop-types';
import { connect } from "react-redux";
import {createPosts } from '../../../../Server/RegisterActions';



class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      storeName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };

    this.onhandleChange = this.onhandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  onhandleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);

    const User = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      storeName: this.state.storeName,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };

    // fetch("http://localhost:56813/api/User", {
    //   method: "POST",
    //   body: JSON.stringify(User),
    //   headers: { "Content-Type": "application/json" },
    //   mode: "cors"
    // })
    //   .then(res => res.json())
    //   .then(data => console.log(data));

    this.props.createPosts(User);
    this.handleClear();

    
  }

  handleClear() {
    this.setState({
      firstName: "",
      lastName: "",
      storeName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  }

  render() {
    return (
      <div>
        <RegisterView
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          storeName={this.state.storeName}
          email={this.state.email}
          password={this.state.password}
          confirmPassword={this.state.confirmPassword}
          onhandleChange={this.onhandleChange}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
SignUp.protoTypes = {
  createPost: Proptypes.func.isRequired
}

export default connect(null , {createPosts}) (SignUp);

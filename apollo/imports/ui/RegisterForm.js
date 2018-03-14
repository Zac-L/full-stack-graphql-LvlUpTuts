import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class RegisterForm extends Component {

  registerUser = event => {
    event.preventDefault();

    Accounts.createUser({
      email: this.email.value,
      password: this.password.value
    }, error => console.log(error))
  }

  render() {

    return (

    <form onSubmit={this.registerUser}>

    <input type="email" ref={input => this.email = input} />
    <input type="password" ref={input => this.password = input} />
    <button type="submit">Register User</button>

    </form>
    );
  }
}
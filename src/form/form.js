import React from 'react';
import Input from './input';
import './form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validationErrors: {},
    };
  }

  onChange(e) {
    console.log('t');
    const { validationErrors } = this.state;

    this.setState({
      [e.target.name]: e.target.value,
      validationErrors: {
        ...validationErrors,
        [e.target.name]: '',
      },
    });
  }

  onSubmit(e) {
    console.log('hhhh');
    e.preventDefault();

    if (this.validateFormInput()) {
      window.location.href = '/board';
    }
  }

  validateFormInput() {
    const errors = {};
    const emailRegx = /^\S+@\S+\.[\w]+$/;

    Object.entries(this.state).forEach(([property, value]) => {
      const input = typeof value === 'string' ? value.trim() : '';

      switch (property) {
        case 'email':
          if (input.length === 0) {
            errors[property] = 'Email address is required';
          } else if (!emailRegx.test(input)) {
            errors[property] = 'Enter a valid email address';
          }
          break;
        case 'password':
          if (input.length === 0) {
            errors[property] = 'Password is required';
          }
          break;
        default:
          break;
      }
    });

    if (Object.keys(errors).length !== 0) {
      this.setState({
        validationErrors: { ...errors },
      });
      return false;
    }

    this.setState({
      validationErrors: {},
    });
    return true;
  }


  render() {
    const { email, password } = this.state.validationErrors;
    return (
      
  <div className="container">
    <h2 className="title">Login form with validation</h2>
      <Input
        onChange={(e) => this.onChange(e)}
        onSubmit={(e) => this.onSubmit(e)}
        email={this.state.email}
        password={this.state.password}
        emailError={email}
        passError={password}
      />
      </div>
    );
  }
}

export default Form;
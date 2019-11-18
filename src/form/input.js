import React from 'react';

const Input = ({onChange, onSubmit, email, password, emailError, passError}) => (
  <form className="form" onSubmit={onSubmit}>
    <h2 className="title">Welcome back!</h2>
    <h4 className="sub-title">It’s pretty easy, we provide you with the information you need.</h4>
   <input
   id="email"
   label="Email Address"
   name="email"
   onChange={onChange}
   value={email}
   />
   <br />
   <span className="error">{emailError}</span>
   <br />
    <input
    name="password"
    label="Password"
    type="password"
    id="password"
    onChange={onChange}
    value={password}
   />
   <br />
    <span className="error">{passError}</span>
    <br />
    <button
      type="submit"
      className="submit"
    >
      Login
    </button>
  </form>

);

export default Input;
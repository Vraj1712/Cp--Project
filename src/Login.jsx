import React, { useState } from 'react';
import './Login.css';
import './B7D729D5-572D-47B3-B87E-C14E9F58C3A9 2.JPG';

function Login() {
  const [showLogin, setShowLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleToggleClick = () => {
    setShowLogin(!showLogin);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (showLogin) {
      // handle login
      console.log(`Logging in with email: ${email} and password: ${password}`);
    } else {
      // handle signup
      console.log(`Signing up with name: ${name}, email: ${email}, and password: ${password}`);
    }
  };

  return (
    <div>
      <div className='background-image'>
      <div className="app-container">
        <h1>Medicine Expiry Reminder App</h1>
        <form onSubmit={handleSubmit} className="form-container">
          <h2>{showLogin ? 'Log in' : 'Sign up'}</h2>
          {!showLogin && (
            <div className="input-container">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" value={name} onChange={handleNameChange} />
            </div>
          )}
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </div>
          {!showLogin && (
            <div className="input-container">
              <label htmlFor="confirm-password">Confirm Password:</label>
              <input type="password" id="confirm-password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
            </div>
          )}
          <button type="submit">{showLogin ? 'Log in' : 'Sign up'}</button>
        </form>
        <div className="toggle-container">
          {showLogin ? 'Need an account?' : 'Already have an account?'}
          <button onClick={handleToggleClick}>{showLogin ? 'Sign up' : 'Log in'}</button>
        </div>
      </div>
      </div>
  </div>
  );
}

export default Login;
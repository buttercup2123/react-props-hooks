import React from "react"
import { useState } from 'react';

function Features() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
  
    const validateEmail = (value) => {
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      return emailPattern.test(value);
    };
  
    const validatePassword = (value) => {
      return value.length >= 6;
    };
  
    const handleEmailChange = (e) => {
      const newValue = e.target.value;
      setEmail(newValue);
      setEmailValid(validateEmail(newValue));
    };
  
    const handlePasswordChange = (e) => {
      const newValue = e.target.value;
      setPassword(newValue);
      setPasswordValid(validatePassword(newValue));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
  
      // Check if email and password are valid before submitting
      if (emailValid && passwordValid) {
        alert('Form submitted successfully!');
      } else {
        alert('Form submission failed. Please check your inputs.');
      }
    };
  
    return (
      <div>
        <h2>Email and Password Validation</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
            {emailValid ? null : <p style={{ color: 'red' }}>Invalid email</p>}
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
            {passwordValid ? null : <p style={{ color: 'red' }}>Password must be at least 6 characters</p>}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }

export default Features;

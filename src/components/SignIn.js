// src/components/SignIn.js
import React, { useState } from 'react';
import './SignIn.css';

function SignIn() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    address: '',
  });

  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'emailAddress') {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setInvalidEmail(!isValid);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="signing-page">
      <img src="assets/logo.png" alt="Company Logo" className="logo" />
      <h2 className="heading">We'd love to hear from you.</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="firstName" className="first-name-field">First Name*</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="first-name-input"
            placeholder="Please type your first name"
          />
        </div>
        <div className="form-field">
          <label htmlFor="lastName" className="last-name-field">Last Name*</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="last-name-input"
            placeholder="Please type your last name"
          />
        </div>
        <div className="form-field">
          <label htmlFor="emailAddress" className="email-field">Email Address*</label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            required
            className={`email-input ${invalidEmail ? 'invalid-email' : ''}`}
            placeholder="Please type your email address"
          />
          {invalidEmail && (
            <div className="invalid-message">Invalid email address</div>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="address" className="address-field">Address*</label>
          <textarea
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="address-input"
            placeholder="Please type your address"
          />
        </div>
        <button className="submit-button"></button>
        <span className="submit-text">Submit</span>
      </form>
      <img src="assets/background.png" alt="Image" className="right-image" />
    </div>
  );
}

export default SignIn;

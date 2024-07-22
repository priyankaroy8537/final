// src/CustomerRegistrationForm.jsx

import React, { useState } from 'react';
import axios from 'axios';

const CustomerRegistrationForm = () => {
  const [customer, setCustomer] = useState({
    name: '',
    dob: '',
    address: '',
    mobile: '',
    pan: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({
      ...customer,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/customers', customer);
      console.log('Customer registered successfully:', response.data);
      // Reset the form after successful submission
      setCustomer({
        name: '',
        dob: '',
        address: '',
        mobile: '',
        pan: '',
        email: ''
      });
    } catch (error) {
      console.error('Error registering customer:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={customer.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={customer.dob}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={customer.address}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Mobile:</label>
        <input
          type="text"
          name="mobile"
          value={customer.mobile}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>PAN:</label>
        <input
          type="text"
          name="pan"
          value={customer.pan}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={customer.email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Register Customer</button>
    </form>
  );
};

export default CustomerRegistrationForm;

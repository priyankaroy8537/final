// src/pages/MainLayout.jsx

import React, { useState } from 'react';
import '../style/MainLayout.css';
import '../style/NavBar.css';
import CustomerLoginForm from './CustomerLoginForm';
import CustomerRegistrationForm from './CustomerRegistrationForm';
import MerchantLoginForm from './MerchantLoginForm';
import MerchantRegistrationForm from './MerchantRegistrationForm';

const MainLayout = () => {
  const [selectedForm, setSelectedForm] = useState('CustomerLoginForm');

  const renderForm = () => {
    switch (selectedForm) {
      case 'CustomerLoginForm':
        return <CustomerLoginForm />;
      case 'CustomerRegistrationForm':
        return <CustomerRegistrationForm />;
      case 'MerchantRegistrationForm':
        return <MerchantRegistrationForm />;
      case 'MerchantLoginForm':
        return <MerchantLoginForm />;
      default:
        return <CustomerLoginForm />;
    }
  };

  return (
    <div className="main-layout">
      <nav>
        <ul>
          <li>
            <select onChange={(e) => setSelectedForm(e.target.value)}>
              <option value="CustomerLoginForm">Customer Login</option>
              <option value="MerchantLoginForm">Merchant Login</option>
            </select>
          </li>
          <li>
            <select onChange={(e) => setSelectedForm(e.target.value)}>
              <option value="CustomerRegistrationForm">Register Customer</option>
              <option value="MerchantRegistrationForm">Register Merchant</option>
            </select>
          </li>
        </ul>
      </nav>
      <div className="content">
        <div className="image-container">
          <img src="C:\Users\Priyanka Roy\OneDrive\Desktop\ccs-frontend\ccs\src\pages\free-images.avif" alt="Main Visual" />
        </div>
        <div className="form-container">
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

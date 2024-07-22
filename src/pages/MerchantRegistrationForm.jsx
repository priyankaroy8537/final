// src/MerchantRegistrationForm.jsx

import axios from 'axios';
import React, { useState } from 'react';

const MerchantRegistrationForm = () => {
  const [merchant, setMerchant] = useState({
    merchantName: '',
    merchantAddress: '',
    merchantMobile: '',
    merchantEmail: '',
    merchantBankAcc: '',
    merchantIFSC: '',
    merchantBankName: '',
    merchantLocation: '',
    merchantCode: '',
    merchantStatus: 'ACTIVE'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMerchant({
      ...merchant,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/merchants', merchant);
      console.log('Merchant registered successfully:', response.data);
      // Reset the form after successful submission
      setMerchant({
        merchantName: '',
        merchantAddress: '',
        merchantMobile: '',
        merchantEmail: '',
        merchantBankAcc: '',
        merchantIFSC: '',
        merchantBankName: '',
        merchantLocation: '',
        merchantCode: '',
        merchantStatus: 'ACTIVE'
      });
    } catch (error) {
      console.error('Error registering merchant:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="merchant-registration-form">
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="merchantName"
          value={merchant.merchantName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="merchantAddress"
          value={merchant.merchantAddress}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Mobile:</label>
        <input
          type="text"
          name="merchantMobile"
          value={merchant.merchantMobile}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="merchantEmail"
          value={merchant.merchantEmail}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Bank Account:</label>
        <input
          type="text"
          name="merchantBankAcc"
          value={merchant.merchantBankAcc}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>IFSC:</label>
        <input
          type="text"
          name="merchantIFSC"
          value={merchant.merchantIFSC}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Bank Name:</label>
        <input
          type="text"
          name="merchantBankName"
          value={merchant.merchantBankName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          name="merchantLocation"
          value={merchant.merchantLocation}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Code:</label>
        <input
          type="text"
          name="merchantCode"
          value={merchant.merchantCode}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Status:</label>
        <select name="merchantStatus" value={merchant.merchantStatus} onChange={handleChange}>
        <option value="ACTIVE">ACTIVE</option>
        <option value="CLOSED">CLOSED</option>
        </select>
    </div>
    <button type="submit">Register Merchant</button>
    </form>
  );
};

export default MerchantRegistrationForm;

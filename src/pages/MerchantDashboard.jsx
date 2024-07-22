// src/pages/MerchantDashboard.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MerchantNavBar from './MerchantNavBar';
import '../style/MerchantDashboard.css';

const MerchantDashboard = () => {
  const { merchantId } = useParams();
  const [merchant, setMerchant] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMerchantDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/merchants/${merchantId}`);
        setMerchant(response.data);
      } catch (error) {
        console.error('Error fetching merchant details:', error);
        setError('Failed to fetch merchant details');
      }
    };

    fetchMerchantDetails();
  }, [merchantId]);

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!merchant) {
    return <p>Loading...</p>;
  }

  return (
    <div className="merchant-dashboard">
    <MerchantNavBar merchantId={merchantId} />
      
      <h2>Merchant Details</h2>
      <p><strong>Merchant ID:</strong> {merchant.merchantID}</p>
      <p><strong>Name:</strong> {merchant.merchantName}</p>
      <p><strong>Address:</strong> {merchant.merchantAddress}</p>
      <p><strong>Mobile:</strong> {merchant.merchantMobile}</p>
      <p><strong>Email:</strong> {merchant.merchantEmail}</p>
      <p><strong>Bank Account:</strong> {merchant.merchantBankAcc}</p>
      <p><strong>IFSC:</strong> {merchant.merchantIFSC}</p>
      <p><strong>Bank Name:</strong> {merchant.merchantBankName}</p>
      <p><strong>Location:</strong> {merchant.merchantLocation}</p>
      <p><strong>Code:</strong> {merchant.merchantCode}</p>
      <p><strong>Status:</strong> {merchant.merchantStatus}</p>
    </div>
  );
};

export default MerchantDashboard;

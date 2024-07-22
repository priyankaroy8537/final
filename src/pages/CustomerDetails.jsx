import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../style/CustomerDetails.css';

const CustomerDetails = (props) => {
  const [customer, setCustomer] = useState(null);
  const { customerId } = useParams();
  //const id=Number(customerId);
  console.log("9",props.customerId);
//   const id = parseInt(customerId, 10);
  //console.log(id);
  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/customers/${customerId}`); // Adjust endpoint as needed
        setCustomer(response.data);
      } catch (error) {
        console.error('Error fetching customer details:', error);
      }
    };

    fetchCustomer();
  }, []);

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="customer-details">
      <h1>Customer Details</h1>
      <p>Name: {customer.name}</p>
      <p>Date of Birth: {customer.dob}</p>
      <p>Address: {customer.address}</p>
      <p>Mobile: {customer.mobile}</p>
      <p>PAN: {customer.pan}</p>
      <p>Email: {customer.email}</p>
    </div>
  );
};

export default CustomerDetails;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import '../style/CustomerNavBar.css'; // Ensure this path is correct for your CSS

// const CustomerNavBar = () => {
    
//   return (
//     <nav className="customer-nav-bar">
//       <NavLink to="/customer-dashboard/:customerId/customer-details" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//         Customer Details
//       </NavLink>
//       <NavLink to="/customer-dashboard/transactions" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//         Transactions
//       </NavLink>
//       <NavLink to="/customer-dashboard/issue-credit-card" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//         Issue Credit Card
//       </NavLink>

//     </nav>
//   );
// };

// export default CustomerNavBar;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import '../style/CustomerNavBar.css'; // Ensure this path is correct for your CSS

// const CustomerNavBar = ({ customerId }) => {
//   return (
//     <nav className="customer-nav-bar">
//       <NavLink to={`/customer-dashboard/${customerId}/customer-details`} className={({ isActive }) => (isActive ? 'active-link' : '')}>
//         Customer Details
//       </NavLink>
//       <NavLink to={`/customer-dashboard/${customerId}/transactions`} className={({ isActive }) => (isActive ? 'active-link' : '')}>
//         Transactions
//       </NavLink>
//       <NavLink to={`/customer-dashboard/${customerId}/credit-carddetails`} className={({ isActive }) => (isActive ? 'active-link' : '')}>
//         Credit Card Details
//       </NavLink>
      
//     </nav>
//   );
// };

// export default CustomerNavBar;

// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import '../style/CustomerNavBar.css'; // Ensure this path is correct for your CSS

// const CustomerNavBar = ({ customerId }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Perform logout operations if needed
//     navigate('/login');
//   };

//   return (
//     <nav className="customer-nav-bar">
//       <NavLink to={`/customer-dashboard/${customerId}/customer-details`} className={({ isActive }) => (isActive ? 'active-link' : '')}>
//         Customer Details
//       </NavLink>
//       <NavLink to={`/customer-dashboard/${customerId}/transaction-form`} className={({ isActive }) => (isActive ? 'active-link' : '')}>
//         Transaction Form
//       </NavLink>
//       <NavLink to={`/customer-dashboard/${customerId}/credit-carddetails`} className={({ isActive }) => (isActive ? 'active-link' : '')}>
//         Credit Card Details
//       </NavLink>
//       <button onClick={handleLogout} className="logout-button">Logout</button>
//     </nav>
//   );
// };

// export default CustomerNavBar;

// src/components/CustomerNavBar.jsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../style/CustomerNavBar.css'; // Ensure this path is correct for your CSS

const MerchantNavBar = ({ merchantId }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout operations if needed
    navigate('/');
  };

  return (
    <nav className="customer-nav-bar">
      <NavLink to={`/merchant-dashboard/${merchantId}`} className={({ isActive }) => (isActive ? 'active-link' : '')}>
        Merchant Details
      </NavLink>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </nav>
  );
};

export default MerchantNavBar;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MainLayout from './pages/MainLayout';
// import CustomerLoginForm from './pages/CustomerLoginForm';
// import CustomerDashboard from './pages/CustomerDashboard';
// import ProductType from './pages/ProductType';


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MainLayout />} />
//         <Route path="/login" element={<CustomerLoginForm />} />
//         <Route path="/customer-dashboard/:customerId/*" element={<CustomerDashboard />} />
//          <Route path="/products" element={<ProductType />} /> 
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import CustomerLoginForm from './pages/CustomerLoginForm';
import CustomerDashboard from './pages/CustomerDashboard';
import ProductType from './pages/ProductType';
//import CustomerNavBar from './pages/CustomerNavBar';
import TransactionForm from './pages/TransactionForm';
import TransactionDetails from './pages/TransactionDetails';
// import MerchantLoginForm from './pages/MerchantLoginForm';
 import MerchantDashboard from './pages/MerchantDashboard';
import CustomerList from './pages/CustomerList';
import MerchantList from './pages/MerchantList';
import Admin from './pages/Admin';
import RecentCustomer from './pages/RecentCustomer';
import ProductCarousel from './pages/ProductType';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/login" element={<CustomerLoginForm />} />
        <Route path="/merchant-dashboard/:merchantId" element={<MerchantDashboard />} />
        <Route path="/customer-list" element={<CustomerList />} />
        <Route path="/recent-customer-list" element={<RecentCustomer />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/merchant-list" element={<MerchantList/>} />
        {/* <Route path="/merchant-dashboard/:merchantId" element={<MerchantDashboard />} /> */}
        <Route path="/customer-dashboard/:customerId/*" element={<CustomerDashboard />}>
          <Route path="transaction-form" element={<TransactionForm />} />
          <Route path="transactions/:transactionType" element={<TransactionDetails />} />
          {/* <Route path="/products" element={<ProductCarousel />} /> */}
           {/* <Route path="/merchant-login" element={<MerchantLoginForm />} /> */}
          
          
        </Route>
       
      </Routes>
    </Router>
  );
};

export default App;

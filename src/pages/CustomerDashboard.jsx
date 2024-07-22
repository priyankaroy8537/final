// // import React from 'react';
// // import { Routes, Route } from 'react-router-dom';
// // import CustomerNavBar from '../pages/CustomerNavBar';
// // import CustomerDetails from './CustomerDetails';
// // import Transactions from './Transactions';
// // import IssueCreditCard from './IssueCreditCard';

// // const CustomerDashboard = () => {
// //   return (
// //     <div>
// //       <CustomerNavBar />
// //       <Routes>
// //         <Route path="customer-details" element={<CustomerDetails />} />
// //         <Route path="transactions" element={<Transactions />} />
// //         <Route path="issue-credit-card" element={<IssueCreditCard />} />
// //       </Routes>
// //     </div>
// //   );
// // };

// // export default CustomerDashboard;
// import React from 'react';
// import { Routes, Route, useParams } from 'react-router-dom';
// import CustomerNavBar from '../pages/CustomerNavBar';
// import CustomerDetails from './CustomerDetails';
// import Transactions from './Transactions';
// import IssueCreditCard from './IssueCreditCard';

// const CustomerDashboard = () => {
//   const { customerId } = useParams();
// console.log("31",customerId);
//   return (
//     <div>
//       <CustomerNavBar />
//       <Routes>
//         <Route path=":customerId/customer-details" element={<CustomerDetails customerId={customerId} />} />
//         <Route path="transactions" element={<Transactions customerId={customerId} />} />
//         <Route path="issue-credit-card" element={<IssueCreditCard customerId={customerId} />} />
//       </Routes>
//     </div>
//   );
// };

// export default CustomerDashboard;

import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import CustomerNavBar from '../pages/CustomerNavBar';
import CustomerDetails from './CustomerDetails';
import TransactionForm from '../pages/TransactionForm';
import TransactionDetails from '../pages/TransactionDetails';
import IssueCreditCard from '../pages/IssueCreditCard';
import ProductCarousel from './ProductType';

const CustomerDashboard = () => {
  const { customerId } = useParams();

  return (
    <div>
      <CustomerNavBar customerId={customerId} />
      <Routes>
        <Route path="customer-details" element={<CustomerDetails customerId={customerId}/>} />
        {/* <Route path="transactions" element={<Transactions customerId={customerId}/>} />
       */}
        <Route path="transaction-form" element={<TransactionForm />} />
        <Route path="transactions/:transactionType" element={<TransactionDetails />} />
        <Route path="issueCreditCard" element={<IssueCreditCard customerId={customerId} />} />
        <Route path="products" element={<ProductCarousel customerId={customerId} />} />
      </Routes>
    </div>
  );
};

export default CustomerDashboard;


// import React from 'react';
// import { Routes, Route, useParams } from 'react-router-dom';
// import CustomerNavBar from '../pages/CustomerNavBar';
// import CustomerDetails from './CustomerDetails';
// import TransactionForm from '../pages/TransactionForm';
// import TransactionDetails from '../pages/TransactionDetails';
// import IssueCreditCard from '../pages/IssueCreditCard';

// const CustomerDashboard = () => {
//   const { customerId } = useParams();

//   return (
//     <div>
//       <CustomerNavBar customerId={customerId} />
//       <Routes>
//         <Route path="customer-details" element={<CustomerDetails />} />
//         <Route path="transaction-form" element={<TransactionForm />} />
//         <Route path="transactions/:transactionType" element={<TransactionDetails />} />
//         <Route path="issueCreditCard" element={<IssueCreditCard />} />
//       </Routes>
//     </div>
//   );
// };

// export default CustomerDashboard;

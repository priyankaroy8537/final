// // src/components/TransactionForm.jsx
// import React, { useState } from 'react';
// import TransactionService from '../Services/TransactionService';

// const TransactionForm = () => {
//   const [transactionType, setTransactionType] = useState('');
//   const [creditcardNumber, setCreditcardNumber] = useState('');
//   const [merchantID, setMerchantID] = useState('');
//   const [currency, setCurrency] = useState('');
//   const [authCode, setAuthCode] = useState('');
//   const [transactionAmount, setTransactionAmount] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     TransactionService.postTransaction(transactionType, creditcardNumber, merchantID, currency, authCode, transactionAmount)
//       .then((response) => {
//         console.log('Transaction posted:', response.data);
//         // Handle success (e.g., show a success message or redirect)
//       })
//       .catch((error) => {
//         console.error('Error posting transaction:', error);
//         // Handle error (e.g., show an error message)
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Transaction Type:</label>
//         <select value={transactionType} onChange={(e) => setTransactionType(e.target.value)} required>
//           <option value="">Select Transaction Type</option>
//           <option value="1">Balance Enquiry</option>
//           <option value="2">Payments</option>
//           <option value="3">Purchases</option>
//           <option value="4">Cancellation</option>
//         </select>
//       </div>
//       <div>
//         <label>Credit Card Number:</label>
//         <input type="text" value={creditcardNumber} onChange={(e) => setCreditcardNumber(e.target.value)} required />
//       </div>
//       <div>
//         <label>Merchant ID:</label>
//         <input type="number" value={merchantID} onChange={(e) => setMerchantID(e.target.value)} required />
//       </div>
//       <div>
//         <label>Currency:</label>
//         <input type="text" value={currency} onChange={(e) => setCurrency(e.target.value)} required />
//       </div>
//       <div>
//         <label>Auth Code:</label>
//         <input type="text" value={authCode} onChange={(e) => setAuthCode(e.target.value)} required />
//       </div>
//       <div>
//         <label>Transaction Amount:</label>
//         <input type="number" value={transactionAmount} onChange={(e) => setTransactionAmount(e.target.value)} required />
//       </div>
//       <button type="submit">Submit Transaction</button>
//     </form>
//   );
// };

// export default TransactionForm;

// src/components/TransactionForm.jsx
import React, { useState } from 'react';
import TransactionService from '../Services/TransactionService';
import '../style/TransactionForm.css';

const TransactionForm = () => {
  const [transactionType, setTransactionType] = useState('');
  const [creditcardNumber, setCreditcardNumber] = useState('');
  const [merchantID, setMerchantID] = useState('');
  const [currency, setCurrency] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [serverAuthCode, setServerAuthCode] = useState('');
  const [enteredAuthCode, setEnteredAuthCode] = useState('');
  const [transactionDetails, setTransactionDetails] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const authCode = "123";
    TransactionService.postTransaction(parseInt(transactionType), creditcardNumber, merchantID, currency, transactionAmount,authCode)
      .then((response) => {
        console.log('Transaction posted:', response.data);
        setServerAuthCode(response.data.authCode); // Store the auth code from the server
        setTransactionDetails(response.data); // Store transaction details
        setSubmitted(true); // Indicate form submission
      })
      .catch((error) => {
        console.error('Error posting transaction:', error);
        setError('Error posting transaction');
      });
  };

  const handleAuthCodeSubmit = (e) => {
    e.preventDefault();
    if (enteredAuthCode === serverAuthCode) {
      setError(''); // Clear any previous errors
      // Auth code matched, display transaction details
    } else {
      setError('Auth code did not match');
    }
  };

  if (transactionDetails && enteredAuthCode === serverAuthCode) {
    return (
      <div className="transaction-form-container">
        <h2>Transaction Details</h2>
        <p><strong>Transaction ID:</strong> {transactionDetails.transactionID}</p>
        <p><strong>Transaction Type:</strong> {transactionDetails.transactionType}</p>
        <p><strong>Credit Card Number:</strong> {transactionDetails.creditcard.creditcardNumber}</p>
        <p><strong>Merchant Name:</strong> {transactionDetails.merchant.merchantName}</p>
        <p><strong>Transaction Amount:</strong> {transactionDetails.transactionAmount}</p>
        <p><strong>Currency:</strong> {transactionDetails.currency}</p>
      </div>
    );
  }

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Transaction Type:</label>
            <select value={transactionType} onChange={(e) => setTransactionType(e.target.value)} required>
              <option value="">Select Transaction Type</option>
              <option value="1">Balance Enquiry</option>
              <option value="2">Payments</option>
              <option value="3">Purchases</option>
             {/* <option value="4">Cancellation</option> */}
            </select>
          </div>
          <div>
            <label>Credit Card Number:</label>
            <input type="text" value={creditcardNumber} onChange={(e) => setCreditcardNumber(e.target.value)} required />
          </div>
          <div>
            <label>Merchant ID:</label>
            <input type="number" value={merchantID} onChange={(e) => setMerchantID(e.target.value)} required />
          </div>
          <div>
            <label>Currency:</label>
            <input type="text" value={currency} onChange={(e) => setCurrency(e.target.value)} required />
          </div>
          <div>
            <label>Transaction Amount:</label>
            <input type="number" value={transactionAmount} onChange={(e) => setTransactionAmount(e.target.value)} required />
          </div>
          <button type="submit">Submit Transaction</button>
        </form>
      ) : (
        <form onSubmit={handleAuthCodeSubmit}>
          <div>
            <label>Enter Auth Code:</label>
            <input type="text" value={enteredAuthCode} onChange={(e) => setEnteredAuthCode(e.target.value)} required />
          </div>
          <button type="submit">Verify Auth Code</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default TransactionForm;

// src/services/TransactionService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/transactions';

const postTransaction = (transactionType, creditcardNumber, merchantID, currency, transactionAmount,authCode) => {
  return axios.post(`${API_URL}`, null, {
    params: {
      transactionType,
      creditcardNumber,
      merchantID,
      currency,
      transactionAmount,
      authCode
    }
  });
};

export default {
  postTransaction,
};

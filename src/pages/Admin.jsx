// Admin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(true);
  const navigate = useNavigate();

  const handlePasswordSubmit = () => {
    if (password === 'admin') {
      setShowPopup(false);
      navigate('/customer-list');
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div>
      {showPopup && (
        <div className="popup">
          <h2>Enter System Password</h2>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button onClick={handlePasswordSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Admin;

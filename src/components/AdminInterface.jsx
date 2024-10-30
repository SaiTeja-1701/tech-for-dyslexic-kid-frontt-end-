// src/components/AdminInterface.js
import React, { useState } from 'react';
import AdminDashboard from './AdminDashboard';

function AdminInterface() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // For simplicity, just assume any non-empty login works
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="container">
      {!isLoggedIn ? (
        <div>
          <h1>Admin Login</h1>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="form-control mt-2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-primary mt-3" onClick={handleLogin}>
            Login
          </button>
        </div>
      ) : (
        <AdminDashboard />
      )}
    </div>
  );
}

export default AdminInterface;

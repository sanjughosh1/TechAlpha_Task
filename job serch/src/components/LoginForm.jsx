import React, { useState } from 'react';

const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logged in with email:', email);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl mb-4">Login</h2>
      <div className="mb-4">
        <label className="block">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white p-2">Login</button>
      <button type="button" onClick={onClose} className="bg-gray-600 text-white p-2 ml-2">Cancel</button>
    </form>
  );
};

export default LoginForm;

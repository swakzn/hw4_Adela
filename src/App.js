import React, { useState } from 'react';
import classes from './App.module.css';

export default function App() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const numRegExp = /^996[0-9]{9}$/;
  const emailRegExp = /^[a-zA-Z0-9]{6,}@gmail.com$/;

  const addUser = (event) => {
    event.preventDefault();

    if (!fullName.trim() || !phoneNumber.match(numRegExp) || !email.match(emailRegExp)) {
      alert('Please enter valid information.');
      return;
    }

    console.log(`
      Full Name: ${fullName}
      Phone Number: ${phoneNumber}
      Email: ${email}
    `);

    setFullName('');
    setPhoneNumber('');
    setEmail('');
  };

  const handleChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value.replace(/\D/g, ''));
  };

  return (
      <div className={classes.container}>
        <form onSubmit={addUser} className={classes.FormUser}>
          <h1>Create User</h1>
          <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Enter your full name"
          />
          <input
              value={phoneNumber}
              onChange={handleChangePhoneNumber}
              type="text"
              placeholder="Enter your phone number"
          />
          <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter your email"
          />
          <button type="submit">Add user</button>
        </form>
      </div>
  );
}

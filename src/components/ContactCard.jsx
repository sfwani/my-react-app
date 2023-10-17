// src/components/ContactCard.js
import React, { useState, useEffect } from 'react';
import { fetchRandomUser } from '../api';

const ContactCard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getNewContact = () => {
    setLoading(true);
    fetchRandomUser()
      .then((userData) => {
        setUser(userData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getNewContact();
  }, []);

  return (
    <div className="bg-white shadow-md rounded p-4">
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500">Error: {error.message}</div>
      ) : (
        <div>
          <div className="text-2xl font-semibold">
            {user.name.title} {user.name.first} {user.name.last}
          </div>
          <div>Phone: {user.phone}</div>
          <div>Email: {user.email}</div>
          <div>Age: {user.dob.age}</div>

          <img src={user.picture.large} alt="User" className="w-32 h-32 rounded-full mx-auto my-4" />

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={getNewContact}
          >
            Get New Contact
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactCard;

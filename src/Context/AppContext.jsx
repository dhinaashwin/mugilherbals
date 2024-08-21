import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const AppContext = createContext();

// Create a Provider Component
export const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // Fetch items from the API
  const fetchItems = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/items');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };
  useEffect(() => {
    fetchItems(); // Fetch items on component mount
  }, []);

  return (
    <AppContext.Provider value={{ items}}>
      {children}
    </AppContext.Provider>
  );
};

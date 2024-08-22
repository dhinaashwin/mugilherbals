import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const AppContext = createContext();

// Create a Provider Component
export const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await fetch('https://server-22aug-demo.vercel.app/items');
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
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

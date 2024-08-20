import React, { createContext, useState } from 'react';

// Create a context
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [globalVariable, setGlobalVariable] = useState('12312312222222'); // Initialize your global variable

  return (
    <GlobalContext.Provider value={{ globalVariable, setGlobalVariable }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };

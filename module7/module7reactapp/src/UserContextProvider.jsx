import React, { useState, createContext } from 'react';

// 1. Create the context
export const UserContext = createContext();

// 2. Create the provider component
function UserProvider({ children }) {
  // Store the current user in state
  const [currentUser, setCurrentUser] = useState({});

  // Function to update the user
  const handleUpdateUser = (user) => {
    setCurrentUser(user);
  };

  return (
    // 3. Provide the state and function to children
    <UserContext.Provider value={{ currentUser, handleUpdateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
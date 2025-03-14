import React, { createContext, useContext, useState } from 'react';

const ActiveSectionContext = createContext();

export const useActiveSection = () => {
  return useContext(ActiveSectionContext);
};

export const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('timelines');
  
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

import React, { createContext, useContext, useState } from 'react';

const TabsContext = createContext();

export const useTabsContext = () => {
  return useContext(TabsContext);
};

export const TabsContextProvider = ({ children }) => {
    
    const [tabs, setTabs] = useState([
        { id: 1, title: "نواجه مشكلة في عدم عمل واجهة", number: "4545", active: true },
        { id: 2, title: "نواجه مشكلة في عدم عمل واجهة", number: "4546", active: false },
        { id: 3, title: "نواجه مشكلة في عدم عمل واجهة", number: "4547", active: false }
    ]);

    const addTab = () => {
        const newTab = {
            id: tabs.length + 1,
            title: "نواجه مشكلة في عدم عمل واجهة",
            number: "4545",
            active: false
        };
        setTabs([...tabs, newTab]);
    };

    const removeTab = (id) => {
        setTabs(tabs.filter(tab => tab.id !== id));
    };

    const setActiveTab = (id) => {
        setTabs(tabs.map(tab => ({ ...tab, active: tab.id === id })));
    };

    
    return (
        <TabsContext.Provider value={{ tabs, addTab, removeTab, setActiveTab }}>
            {children}
        </TabsContext.Provider>
    );
};
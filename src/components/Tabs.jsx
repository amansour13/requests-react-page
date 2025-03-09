import React, { useState } from "react";
import LeftSideBar from "./LeftSideBar";
import "./Tabs.css";
import TabContent from "./TabContent";

const Tabs = () => {
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
        
        <>
        <div className="tabs-container">
            <div className="tabs-titles-container">
                {tabs.map(tab => (
                    <div
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`tab ${tab.active ? "active" : ""}`}
                    >
                        <div className="tab-name">
                            <span className="tab-title">{tab.title}...</span>
                            
                            <span className="tab-number">رقم الطلب: {tab.number}</span>
                        </div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                removeTab(tab.id);
                            }}
                            className="close-tab"
                        >
                            ×
                        </button>
                    </div>
                ))}

                <button onClick={addTab} className="add-tab">
                    +
                </button>
            </div>
            
            <div className="tabs-content-conatiner">
                
                <TabContent title={tabs.find(tab => tab.active).title} id={tabs.find(tab => tab.active).id} />
                <LeftSideBar />
            </div>

        </div>
        </>
    );
};

export default Tabs;

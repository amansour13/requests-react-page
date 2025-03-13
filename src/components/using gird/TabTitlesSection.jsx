import { useState } from "react";


function TabTitlesSection() {
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
        {tabs.map(tab => (
            <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`h-full flex items-center gap-3 px-3 py-2 border-l-[0.05rem] border-[var(--secondary-color)] cursor-pointer transition-all ${
                    tab.active 
                        ? "border-b-yellow-400 border-b-2 shadow-[inset_0px_10px_0px_white] z-10" 
                        : "opacity-40"
                    }`}
                >
                <div className="flex flex-col ">
                    <span className="text-[#373E5D] text-[11px]">{tab.title}...</span>
                    
                    <span className="text-[7px] text-[#98A2B2]">رقم الطلب: {tab.number}</span>
                </div>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        removeTab(tab.id);
                    }}
                    className="text-[#373E5D] text-[18px] hover:text-[#FF0000] cursor-pointer"
                >
                    ×
                </button>
            </div>
        ))}

        <button onClick={addTab} className="text-[18px] mr-3 w-[40px] rounded-[20%] text-center text-[#373E5D] p-1.5 border-[0.05rem] border-[var(--secondary-color)] cursor-pointer hover:bg-[var(--dark-green)] hover:text-white ">
            +
        </button>
    </>
  );
}

export default TabTitlesSection;
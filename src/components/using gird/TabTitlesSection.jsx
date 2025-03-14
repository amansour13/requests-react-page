
import { useTabsContext } from "./TabsContext.jsx";


function TabTitlesSection() {
    const { tabs, addTab, removeTab, setActiveTab } = useTabsContext();


    return (
        <>
        {tabs.map(tab => (
            <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`h-full flex items-center gap-3 px-3 py-2 border-l-[0.05rem] border-[var(--secondary-color)] cursor-pointer transition-all ${
                    tab.active 
                        ? "border-b-[#373E5D] border-b-2" 
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
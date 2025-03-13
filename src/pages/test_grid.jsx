import NavMenu from '../components/using gird/NavMenu.jsx';
import RightSideMenu from '../components/using gird/RightSideMenu.jsx';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import LeftSideMenu from '../components/using gird/LeftSideMenu.jsx';
import LeftSideBar from '../components/using gird/LeftSideBar.jsx';
import { ActiveSectionProvider } from '../components/using gird/ActiveSectionContext.jsx';
import PageTopBar from '../components/using gird/PageTopBar.jsx';
import TabTitlesSection from '../components/using gird/TabTitlesSection.jsx';
import EmailsSection from '../components/using gird/EmailsSection.jsx';
import { TabsContextProvider } from '../components/using gird/TabsContext.jsx';
import ResponseSection from '../components/using gird/ResponseSection.jsx';

function TestGrid(){
    const [isRightMenuOpen, setIsRightMenuOpen] = useState(true);
    const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(true);

    return (
        <div className="grid grid-cols-12 grid-rows-[1fr_5fr] w-screen h-full ">
            <div className={`${isRightMenuOpen ? 'col-span-2' : 'col-span-1'} row-span-2 grid grid-cols-3 relative border-l-[0.05rem] border-[var(--secondary-color)]`}>
                <div className={`bg-white ${isRightMenuOpen ? 'col-span-1' : 'col-span-3'} flex flex-col items-center`}>
                    <NavMenu />
                </div>

                        {isRightMenuOpen && 
                            <div className="bg-white col-span-2">
                                <RightSideMenu title="الطلبات" items={["الطلبات"]}/>
                            </div>
                
                        }
                        <button className="group rounded-full absolute bottom-[15%] left-[-12.5px] box-border p-3 bg-white border-[1px] border-[#E2E8F0] hover:bg-[#00ca7d] cursor-pointer" onClick={() => setIsRightMenuOpen(!isRightMenuOpen)}>
                        {isRightMenuOpen ? <ChevronRight className='text-[#475370] group-hover:text-white' style={{fontSize: '20px', margin: '0px', position: 'absolute ', top: '2px',right: '2px'}}/> : <ChevronLeft className='text-[#475370] group-hover:text-white' style={{fontSize: '20px', margin: '0px', position: 'absolute ', top: '2px',right: '2px'}}/>}
                        </button>
            </div>
            
            <TabsContextProvider> 
                <div className={`${isRightMenuOpen ? 'col-span-10' : 'col-span-11'} grid grid-rows-2 gap-[0.05rem] min-w-0`}>
                    <div className="bg-white min-w-0 w-full"><PageTopBar title="الطلبات"/></div>
                    <div className="bg-white flex items-center min-w-0 w-full overflow-x-auto scrollbar-hide border-b-[0.05rem] border-[var(--secondary-color)]"><TabTitlesSection /></div>
                </div>

                <div className={`w-full min-h-0 ${isRightMenuOpen && isLeftMenuOpen ? 'col-span-7' : isRightMenuOpen ? 'col-span-9' : isLeftMenuOpen ? 'col-span-8' : 'col-span-10'} grid grid-rows-[4fr_3fr] gap-[0.05rem]`}>
                        <div className="bg-white relative w-full min-h-0 h-full overflow-y-auto scrollbar-hide"><EmailsSection  /></div>
                        <div className="bg-white min-h-0 h-full p-5 gap-2 flex flex-col"><ResponseSection /></div>
                </div>
            </TabsContextProvider>
            
            <div className={`${isLeftMenuOpen ? 'col-span-3' : 'col-span-1'} row-span-2 grid relative border-r-[0.05rem] border-[var(--secondary-color)]`}>
                    <ActiveSectionProvider>
                        <div className="grid grid-cols-[3fr_1fr] gap-[0.05rem] min-h-0">
                        {isLeftMenuOpen &&
                            <div className="bg-white h-full overflow-y-auto min-h-0"><LeftSideMenu /></div>
                        }
                            <div className={`bg-white h-full overflow-y-auto min-h-0  ${isLeftMenuOpen ? '' : "col-span-full"}`}><LeftSideBar /></div>
                        </div>
                    </ActiveSectionProvider>

                <button className="group rounded-full absolute top-[10%] right-[-12.5px] box-border p-3 bg-white border-[1px] border-[#E2E8F0] hover:bg-[#00ca7d] cursor-pointer" onClick={() => setIsLeftMenuOpen(!isLeftMenuOpen)}>
                {isLeftMenuOpen ? <ChevronLeft className='text-[#475370] group-hover:text-white' style={{fontSize: '20px', margin: '0px', position: 'absolute ', top: '2px',right: '2px'}}/> : <ChevronRight className='text-[#475370] group-hover:text-white' style={{fontSize: '20px', margin: '0px', position: 'absolute ', top: '2px',right: '2px'}}/>}
                </button>
            </div>
        </div>
    )
}

export default TestGrid;
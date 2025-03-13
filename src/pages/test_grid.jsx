import NavMenu from '../components/using gird/NavMenu.jsx';
import RightSideMenu from '../components/using gird/RightSideMenu.jsx';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import LeftSideMenu from '../components/using gird/LeftSideMenu.jsx';
import LeftSideBar from '../components/using gird/LeftSideBar.jsx';
import { ActiveSectionProvider } from '../components/using gird/ActiveSectionContext.jsx';
import PageTopBar from '../components/using gird/PageTopBar.jsx';

function TestGrid(){
    const [isRightMenuOpen, setIsRightMenuOpen] = useState(true);
    const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(true);

    return (
        <div className="grid grid-cols-12 grid-rows-[1fr_5fr] w-full h-screen gap-[0.05rem] ">
            <div className={`${isRightMenuOpen ? 'col-span-2' : 'col-span-1'} row-span-2 grid grid-cols-3 relative`}>
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
            
            <div className={`${isRightMenuOpen ? 'col-span-10' : 'col-span-11'} grid grid-rows-2 gap-[0.05rem]`}>
                <div className="bg-white"><PageTopBar title="الطلبات"/></div>
                <div className="bg-white">tabs titles</div>
            </div>

            <div className={`${isRightMenuOpen && isLeftMenuOpen ? 'col-span-7' : isRightMenuOpen ? 'col-span-9' : isLeftMenuOpen ? 'col-span-8' : 'col-span-10'} grid grid-rows-[3fr_2fr] gap-[0.05rem]`}>
                <div className="bg-white">emails section</div>
                <div className="bg-white">response section</div>
            </div>
            
            <div className={`${isLeftMenuOpen ? 'col-span-3' : 'col-span-1'} row-span-2 grid relative`}>
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
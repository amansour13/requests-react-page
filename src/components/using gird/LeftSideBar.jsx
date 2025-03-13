import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import GolfCourseOutlinedIcon from '@mui/icons-material/GolfCourseOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { useActiveSection } from './ActiveSectionContext';


function LeftSideBar() {
    
    const {activeSection, setActiveSection} = useActiveSection();
    


  return (
    <>
        <ul className='list-none flex flex-col items-center'>
            <li className='p-1 hover:bg-[#00CA7C0D] w-full'>
                <a href="#" className='group flex flex-col items-center' onClick={() => setActiveSection("transc")}>
                    <SyncAltRoundedIcon  className="rounded-[10px] p-1 text-[#B8BFCC] group-focus:text-[#00CA7C] group-focus:bg-[#00ca7d15]"/>
                    <h6 className='text-center text-[#666C83] leading-[14px] text-[9px] group-focus:text-[#29304C] font-bold' >الإجراءات</h6>
                </a>
            </li>

            <li className='p-1 hover:bg-[#00CA7C0D] w-full'>
                <a href="#" className='group flex flex-col items-center' onClick={() => setActiveSection("contacts")}>
                    <PermContactCalendarOutlinedIcon className="rounded-[10px] p-1 text-[#B8BFCC] group-focus:text-[#00CA7C] group-focus:bg-[#00ca7d15]"/>
                    <h6 className='text-center text-[#666C83] leading-[14px] text-[9px] group-focus:text-[#29304C] font-bold' >جهات الاتصال</h6>
                </a>
            </li>

            <li className='p-1 hover:bg-[#00CA7C0D] w-full'>
                <a href="#" className='group flex flex-col items-center' onClick={() => setActiveSection("relatedTicket")}>
                    <InboxOutlinedIcon className="rounded-[10px] p-1 text-[#B8BFCC] group-focus:text-[#00CA7C] group-focus:bg-[#00ca7d15]"/>
                    <h6 className='text-center text-[#666C83] leading-[14px] text-[9px] group-focus:text-[#29304C] font-bold' >تذاكر مرتبطة</h6>
                </a>
            </li>
            
            <li className='p-1 hover:bg-[#00CA7C0D] w-full'>
                <a href="#" className='group flex flex-col items-center' onClick={() => setActiveSection("details")}>
                    <DescriptionOutlinedIcon className="rounded-[10px] p-1 text-[#B8BFCC] group-focus:text-[#00CA7C] group-focus:bg-[#00ca7d15]"/>
                    <h6 className='text-center text-[#666C83] leading-[14px] text-[9px] group-focus:text-[#29304C] font-bold' >التفاصيل</h6>
                </a>
            </li>
            
            <li className='p-1 hover:bg-[#00CA7C0D] w-full'>
                <a href="#" className='group flex flex-col items-center' onClick={() => setActiveSection("timelines")}>
                    <GolfCourseOutlinedIcon  className="rounded-[10px] p-1 text-[#B8BFCC] group-focus:text-[#00CA7C] group-focus:bg-[#00ca7d15]"/>
                    <h6 className='text-center text-[#666C83] leading-[14px] text-[9px] group-focus:text-[#29304C] font-bold' >السجلات الزمنية</h6>
                </a>
            </li>

            <li className='p-1 hover:bg-[#00CA7C0D] w-full'>
                <a href="#" className='group flex flex-col items-center'  onClick={() => setActiveSection("activities")}>
                    <ArticleOutlinedIcon className="rounded-[10px] p-1 text-[#B8BFCC] group-focus:text-[#00CA7C] group-focus:bg-[#00ca7d15]"/>
                    <h6 className='text-center text-[#666C83] leading-[14px] text-[9px] group-focus:text-[#29304C] font-bold' >الأنشطة</h6>
                </a>
            </li>
        </ul>
    </>
  );
}

export default LeftSideBar;
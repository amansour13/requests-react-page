import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import GolfCourseOutlinedIcon from '@mui/icons-material/GolfCourseOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FeedIcon from '@mui/icons-material/Feed';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import Typography from '@mui/material/Typography';
import { useState } from 'react';


function LeftSideBar() {

    const [activeSection, setActiveSection] = useState("timelines");


    const timelineData = [
        {
          time: "02:32 22-09-2024 - م",
          title: "أحدث الطلبات",
          description: "قام @محمد صفر بإنشاء تذكرة باسم مواجهة مشكلة في عدم عمل واجهة المستخدم الحالية، أرجو الرد.",
          icon: <LocalActivityIcon sx={{fontSize: '14px'}}/>,
          color: "primary"
        },
        {
          time: "02:32 22-09-2024 - م",
          title: "أحدث الطلبات",
          description: "قام @فهد فهد بالرد على التذكرة، جاري العمل على إصلاح المشكلة.",
          icon: <ReplyAllIcon sx={{fontSize: '14px'}}/>,
          color: "secondary"
        },
        {
          time: "02:32 22-09-2024 - م",
          title: "أحدث الطلبات",
          description: "قام @العميل بالرد على التذكرة، شكرًا لمجهوداتكم وأريد الإسراع.",
          icon: <AccountCircleIcon sx={{fontSize: '14px'}}/>,
          color: "success"
        },
        {
          time: "02:32 22-09-2024 - م",
          title: "أحدث الطلبات",
          description: "قام @فهد فهد بإضافة ملاحظة، سنحاول العمل على حل المشكلة بأسرع ما يمكن.",
          icon: <FeedIcon sx={{fontSize: '14px'}}/>,
          color: "warning"
        },
        {
          time: "02:32 22-09-2024 - م",
          title: "أحدث الطلبات",
          description: "قام @محمد صفر بتغيير حالة التذكرة إلى مفتوح أم مغلق.",
          icon: <ViewAgendaOutlinedIcon sx={{fontSize: '14px'}}/>,
          color: "info"
        }
      ];

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
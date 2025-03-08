import * as React from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
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
import './leftsidebar.css';

function LeftSideBar() {
    const [isOpen, setIsOpen] = useState(true);
    const [activeSection, setActiveSection] = useState("transc");


    const timelineData = [
        {
          time: "02:32 22-09-2024 - م",
          title: "أحدث الطلبات",
          description: "قام @محمد صفر بإنشاء تذكرة باسم مواجهة مشكلة في عدم عمل واجهة المستخدم الحالية، أرجو الرد.",
          icon: <LocalActivityIcon sx={{fontSize: '16px'}}/>,
          color: "primary"
        },
        {
          time: "02:32 22-09-2024 - م",
          title: "أحدث الطلبات",
          description: "قام @فهد فهد بالرد على التذكرة، جاري العمل على إصلاح المشكلة.",
          icon: <ReplyAllIcon sx={{fontSize: '16px'}}/>,
          color: "secondary"
        },
        {
          time: "02:32 22-09-2024 - م",
          title: "أحدث الطلبات",
          description: "قام @العميل بالرد على التذكرة، شكرًا لمجهوداتكم وأريد الإسراع.",
          icon: <AccountCircleIcon sx={{fontSize: '16px'}}/>,
          color: "success"
        },
        {
          time: "02:32 22-09-2024 - م",
          title: "أحدث الطلبات",
          description: "قام @فهد فهد بإضافة ملاحظة، سنحاول العمل على حل المشكلة بأسرع ما يمكن.",
          icon: <FeedIcon sx={{fontSize: '16px'}}/>,
          color: "warning"
        },
        {
          time: "02:32 22-09-2024 - م",
          title: "أحدث الطلبات",
          description: "قام @محمد صفر بتغيير حالة التذكرة إلى مفتوح أم مغلق.",
          icon: <ViewAgendaOutlinedIcon sx={{fontSize: '16px'}}/>,
          color: "info"
        }
      ];

    return (
        <>
            <div className="left-sidebar">
                <div className="left-menu">
                    <ul className='left-icons-list'>
                        <li className='left-icon'>
                            <a href="#" className={`link ${activeSection == 'transc' ? 'active' : ''}`} onClick={() => setActiveSection("transc")}>
                                <SyncAltRoundedIcon  style={{color: 'var(--secondary-color)'}}/>
                                <h6 className='icon-text' >الإجراءات</h6>
                            </a>
                        </li>

                        <li className='left-icon'>
                            <a href="#" className={`link ${activeSection == 'contacts' ? 'active' : ''}`} onClick={() => setActiveSection("contacts")}>
                                <PermContactCalendarOutlinedIcon style={{color: 'var(--secondary-color)'}}/>
                                <h6 className='icon-text' >جهات الاتصال</h6>
                            </a>
                        </li>

                        <li className='left-icon'>
                            <a href="#" className={`link ${activeSection == 'relatedTicket' ? 'active' : ''}`} onClick={() => setActiveSection("relatedTicket")}>
                                <InboxOutlinedIcon style={{color: 'var(--secondary-color)'}}/>
                                <h6 className='icon-text' >تذاكر مرتبطة</h6>
                            </a>
                        </li>
                        
                        <li className='left-icon'>
                            <a href="#" className={`link ${activeSection == 'details' ? 'active' : ''}`} onClick={() => setActiveSection("details")}>
                                <DescriptionOutlinedIcon style={{color: 'var(--secondary-color)'}}/>
                                <h6 className='icon-text' >التفاصيل</h6>
                            </a>
                        </li>
                        
                        <li className='left-icon'>
                            <a href="#" className={`link ${activeSection == 'timelines' ? 'active' : ''}`} onClick={() => setActiveSection("timelines")}>
                                <GolfCourseOutlinedIcon  style={{color: 'var(--secondary-color)'}}/>
                                <h6 className='icon-text' >السجلات الزمنية</h6>
                            </a>
                        </li>

                        <li className='left-icon'>
                            <a href="#" className={`link ${activeSection == 'activities' ? 'active' : ''}`} onClick={() => setActiveSection("activities")}>
                                <ArticleOutlinedIcon style={{color: 'var(--secondary-color)'}}/>
                                <h6 className='icon-text' >الأنشطة</h6>
                            </a>
                        </li>
                    </ul>
                </div>
                {

                isOpen && <div className="menu-content">
                    {
                        activeSection === "timelines" && 
                        <div className="content">
                            <h3>السجلات الزمنية</h3>
                            <Timeline sx={{padding: '0px'}}>
                                {timelineData.map((item, index) => (
                                    <TimelineItem key={index} sx={{ '&::before': { display: 'none', marginTop: '100px' }}}>
                                        <TimelineSeparator >
                                        <TimelineConnector />
                                        <TimelineDot color={item.color}>{item.icon}</TimelineDot>
                                        {index !== timelineData.length - 1 && <TimelineConnector />}
                                        </TimelineSeparator>
                                        <TimelineContent >
                                            <Typography variant="h6" sx={{ textAlign: 'right',fontSize: '14px', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif;' }}>{item.title}</Typography>
                                            <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'right', fontSize: '12px',marginBottom: '10px', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif;' }}>{item.time}</Typography>
                                            <Typography sx={{ textAlign: 'right', fontSize: '12px', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif;' }}>{item.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </Timeline>
                        </div>
                    }

                    {
                        activeSection === "activities" &&
                        <div className="content">
                            <h3>الأنشطة</h3>
                            <p>لا توجد أنشطة</p>
                        </div>
                    }

                    {
                        activeSection === "transc" &&
                        <div className="content">
                            <h3>الإجراءات</h3>
                            <p>لا توجد إجراءات</p>
                        </div>
                    }

                    {
                        activeSection === "contacts" &&
                        <div className="content">
                            <h3>جهات الاتصال</h3>
                            <p>لا توجد جهات اتصال</p>
                        </div>
                    }

                    {
                        activeSection === "relatedTicket" &&
                        <div className="content">
                            <h3>تذاكر مرتبطة</h3>
                            <p>لا توجد تذاكر مرتبطة</p>
                        </div>
                    }

                    {
                        activeSection === "details" &&
                        <div className="content">
                            <h3>التفاصيل</h3>
                            <p>لا توجد تفاصيل</p>
                        </div>
                    }

                </div>
                }

                <div className="resizer-container">
                    <div className="resizer-line"></div>
                    <button className="toggle-button" style={{top: '3%'}} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <ChevronLeft style={{fontSize: '20px', margin: '0px', position: 'absolute ', top: '-1px',right: '0px'}}/> : <ChevronRight style={{fontSize: '20px', margin: '0px', position: 'absolute ', top: '-1px',right: '0px'}}/>}
                    </button>
                </div>



            </div>
        </>
    );
}   

export default LeftSideBar;
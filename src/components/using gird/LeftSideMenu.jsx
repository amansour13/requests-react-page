import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import Typography from '@mui/material/Typography';
import TimelineDot from '@mui/lab/TimelineDot';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FeedIcon from '@mui/icons-material/Feed';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import { useActiveSection } from "./ActiveSectionContext";

function LeftSideMenu() {
  const {activeSection, setActiveSection} = useActiveSection();

  
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
    {
          activeSection === "timelines" && 
          <div className="relative p-4 overflow-y-auto h-full scrollbar-hide">
              <div className='sticky top-0 bg-white z-1'>
                  <h2 className='text-[#29304C] text-[20px]/[50px] max-lg:text-[16px]/[25px]'>السجلات الزمنية</h2>
              </div>
              <Timeline sx={{padding: '0px'}}>
                  {timelineData.map((item, index) => (
                      <TimelineItem key={index} sx={{ '&::before': { display: 'none', marginTop: '100px' }}}>
                          <TimelineSeparator >
                          <TimelineConnector />
                          <TimelineDot color={item.color}>{item.icon}</TimelineDot>
                          {index !== timelineData.length - 1 && <TimelineConnector />}
                          </TimelineSeparator>
                          <TimelineContent >
                              <Typography className="max-lg:!text-[9px]" variant="h6" sx={{ color: '#29304C', textAlign: 'right',fontSize: '12px', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif;' }}>{item.title}</Typography>
                              <Typography className="!text-[9px] max-lg:!text-[6px] !text-[#7A8699] !text-right !mb-[10px] !font-sans">{item.time}</Typography>
                              <Typography className="max-lg:!text-[6px]" color="#29304C" sx={{ textAlign: 'right', fontSize: '9px', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif;' }}>{item.description}</Typography>
                          </TimelineContent>
                      </TimelineItem>
                  ))}
              </Timeline>
          </div>
      }

      {
          activeSection === "activities" &&
          <div className="p-4 overflow-y-auto h-full scrollbar-hide">
              <h2 className='text-[#29304C] text-[20px]/[50px]'>الأنشطة</h2>
              <p>لا توجد أنشطة</p>
          </div>
      }

      {
          activeSection === "transc" &&
          <div className="p-4 overflow-y-auto h-full scrollbar-hide">
              <h2 className='text-[#29304C] text-[20px]/[50px]'>الإجراءات</h2>
              <p>لا توجد إجراءات</p>
          </div>
      }

      {
          activeSection === "contacts" &&
          <div className="p-4 overflow-y-auto h-full scrollbar-hide">
              <h2 className='text-[#29304C] text-[20px]/[50px]'>جهات الاتصال</h2>
              <p>لا توجد جهات اتصال</p>
          </div>
      }

      {
          activeSection === "relatedTicket" &&
          <div className="p-4 overflow-y-auto h-full scrollbar-hide">
              <h2 className='text-[#29304C] text-[20px]/[50px]'>تذاكر مرتبطة</h2>
              <p>لا توجد تذاكر مرتبطة</p>
          </div>
      }

      {
          activeSection === "details" &&
          <div className="p-4 overflow-y-auto h-full scrollbar-hide">
              <h2 className='text-[#29304C] text-[20px]/[50px]'>التفاصيل</h2>
              <p>لا توجد تفاصيل</p>
          </div>
      }
    </>
  );
}

export default LeftSideMenu;
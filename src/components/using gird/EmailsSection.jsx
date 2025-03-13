import { useTabsContext } from "./TabsContext.jsx";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ZoomOutMapOutlinedIcon from '@mui/icons-material/ZoomOutMapOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import avatar from "../../assets/avatar.jpg";
import { useEffect, useState } from "react";


function EmailsSection(){
    const {tabs, setTabs} = useTabsContext();
    const [title, setTitle] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        const activeTab = tabs.find(tab => tab.active);
        if (activeTab) {
            setTitle(activeTab.title);
            setId(activeTab.id);
        }
    }, [tabs]);

    const emailData = {
        emails: [
          {
            id: 1,
            sender: {
              name: "محمد صقر",
              email: "ahmed@example.com",
              image: avatar,
            },
            recipient: {
                name: "راشد فهد",
                email: "rashedf@example.com",
                image: avatar,
            },
            timestamp: "22-09-2024 02:32",
            body: `وصف مطول للتذكرة مثل نحتاج عرض سعر لخدمات الصيانة اللازمة للمعدات.
            يرجى تزويدنا بالتفاصيل المطلوبة والتكلفة المتوقعة.`,
        },
        {
            id: 2,
            sender: {
                name: "محمد صقر",
                email: "ahmed@example.com",
                image: avatar,
            },
            recipient: {
                name: "عبدالله الناصر",
                email: "abdullah@example.com",
                image: avatar,
            },
            timestamp: "23-09-2024 10:15",
                body: `أود متابعة الطلب السابق والتأكد من استلام جميع البيانات المطلوبة.
                هل يمكنكم تأكيد ذلك؟`,
            },
        {
            id: 3,
            sender: {
              name: "نورة العتيبي",
              email: "noura@example.com",
              image: avatar,
            },
            recipient: {
                name: "خالد السعيد",
                email: "khaled@example.com",
                image: avatar,
            },
            timestamp: "24-09-2024 14:45",
            body: `أرغب في معرفة آخر تحديث بخصوص المشروع الحالي.
                    هل هناك أي تعديلات أو تغييرات يجب أن نكون على دراية بها؟`,
        },
        ],
    };

    return (

        <>
    <div className='message-title'>
        <h4>{title}</h4>
        
        <div className='message-title-left-section'>
            <div className='play-time'>
                <button className='btn-type1'>
                    <PlayCircleFilledWhiteOutlinedIcon />
                </button>
                <span className='play-time-text'>00:00:00</span>
            </div>

            <ul className='message-btns'>
                <li>
                    <button className='btn-type1'> <MoreVertOutlinedIcon /></button>
                </li>

                <li>
                    <button className='btn-type1'> <ZoomOutMapOutlinedIcon /></button>
                </li>
                <li>
                    <button className='btn-type1 btn1-w-text'> <CheckBoxOutlinedIcon sx={{marginLeft: '5px'}}/> <span>تحويل مهمة</span> </button>
                </li>
            </ul>
        </div>


    </div>


    </>
    );
}

export default EmailsSection;
import { useTabsContext } from "./TabsContext.jsx";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ZoomOutMapOutlinedIcon from '@mui/icons-material/ZoomOutMapOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import avatar from "../../assets/avatar.jpg";
import { useEffect, useState } from "react";


function EmailsSection(){
    const {tabs, setTabs} = useTabsContext();
    const [title, setTitle] = useState('');
    const [id, setId] = useState('');
    const [highlight, setHighlight] = useState(0);
    const [openMessages, setOpenMessages] = useState({});
    const [searchValue, setSearchValue] = useState("");
    const [text, setText] = useState("");

    const toggleMessage = (id) => {
        setOpenMessages(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

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
    <div className='flex justify-between sticky top-0 w-full p-5 bg-white'>
        <h1 className="text-[#181C34] text-[18px]/[38px]">{title}</h1>
        
        <div className='flex gap-3'>
            <div className='flex flex-row-reverse items-center gap-1'>
                <button className='btn-type1 group' style={{color: '#7A8699', border: 'none', padding: '0px'}}>
                    <PlayCircleFilledWhiteOutlinedIcon className="group-hover:text-white" sx={{fontSize: '20px'}}/>
                </button>
                <span className='text-[#7A8699] text-[11px]'>00:00:00</span>
            </div>

            <ul className='message-btns'>
                <li>
                    <button className='btn-type1 text-[#7A8699] text-[11px]'> <MoreVertOutlinedIcon sx={{width: '14px'}}/></button>
                </li>

                <li>
                    <button className='btn-type1'> <ZoomOutMapOutlinedIcon sx={{width: '14px', marginLeft:'4px', marginRight:'4px'}}/></button>
                </li>
                <li>
                    <button className='btn-type1 btn1-w-text'> <CheckBoxOutlinedIcon sx={{width: '14px', marginLeft: '5px'}}/> <span>تحويل مهمة</span> </button>
                </li>
            </ul>
        </div>


    </div>
    
    <div className="w-full p-5 flex flex-col gap-3 box-border"> 

        {
            emailData.emails.map(email => (
                <div className={`gap-2 p-3 w-full flex flex-col items-start justify-center rounded-2xl border-[1px] border-[#E2E8F0] ${highlight === email.id ? 'active-card' : ''}`} key={email.id} onClick={() => {setHighlight(email.id);setEmailR(email.sender.email)}}>
                    <div className='w-full flex justify-between'>
                        <div className='flex gap-3 items-center'>
                            <img src={email.sender.image} alt='avatar' style={{width: '30px', height: '30px', objectFit:'cover', borderRadius: '100%'}}/>
                            
                            <div className='flex flex-col items-start'>
                                <div className='flex items-end gap-4'>
                                    <h5 className="font-bold text-[#181C34] text-[11px]">{email.sender.name}</h5>
                                    <h6 className="text-[9px] text-[#7A8699]">{email.timestamp}</h6>
                                </div>
                                <div className='message-card-header-text'>
                                    <h6 className="text-[11px] text-[#7A8699]"><ReplyOutlinedIcon style={{fontSize: '20px'}}/>موجه إلي  {email.recipient.name}</h6>
                                    <h6 className="text-[11px] text-[#7A8699]"><EmailOutlinedIcon style={{fontSize:'20px'}}/> &lt;{email.sender.email}&gt; , &lt;{email.recipient.email}&gt;</h6>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-1'>
                            <button className='text-[#7A8699] cursor-pointer hover:bg-[var(--dark-green)] hover:text-white rounded-xl' style={{ border: 'none', padding: '0px'}} onClick={() => toggleMessage(email.id)}> 
                                {openMessages[email.id] ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownOutlinedIcon />}
                            </button>
                            <button className='text-[#7A8699] cursor-pointer hover:bg-[var(--dark-green)] hover:text-white rounded-xl' style={{ border: 'none', padding: '0px'}}> <MoreVertOutlinedIcon /></button>
                        </div>
                    </div>
                    {
                        openMessages[email.id] &&( 
                            <div className=''>
                            <p className="text-[11px] text-[#29304C]">{email.body}</p>
                        </div>)
                    }
                </div>
            ))
        }
    </div>
    </>
    );
}

export default EmailsSection;
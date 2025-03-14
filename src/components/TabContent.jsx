import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ZoomOutMapOutlinedIcon from '@mui/icons-material/ZoomOutMapOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import { Paperclip, Sparkles, Type, Search, CaseSensitive } from "lucide-react";

import avatar from '../assets/avatar.jpg';
import './tabcontent.css';
import { useState } from 'react';

function TabContent(props){

    const [cc, setCC] = useState(false);
    const [emailR, setEmailR] = useState("");

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

    const [openMessages, setOpenMessages] = useState({});
    const [highlight, setHighlight] = useState(0);
    const [searchValue, setSearchValue] = useState("");
    const [text, setText] = useState("");
    const [isExpanded, setIsExpanded] = useState(false);

    const handleTagClick = (email) => {
      setSearchValue(email);
    };

    const toggleMessage = (id) => {
        setOpenMessages(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };
    return (
        <div className="tab-main-content">
            <div className='message-section'>
                <div className='message-title'>
                    <h4>{props.title}</h4>
                    
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
                {
                    emailData.emails.map(email => (
                        <div className={`message-card ${highlight === email.id ? 'active-card' : ''}`} key={email.id} onClick={() => {setHighlight(email.id);setEmailR(email.sender.email)}}>
                            <div className='message-card-header'>
                                <div className='message-card-header-right'>
                                    <img src={email.sender.image} alt='avatar' style={{width: '30px', height: '30px', objectFit:'cover', borderRadius: '100%'}}/>
                                    
                                    <div className='message-card-header-data'>
                                        <div className='message-card-header-up'>
                                            <h5>{email.sender.name}</h5>
                                            <h6>{email.timestamp}</h6>
                                        </div>
                                        <div className='message-card-header-text'>
                                            <h6><ReplyOutlinedIcon style={{fontSize: '20px'}}/>موجه إلي  {email.recipient.name}</h6>
                                            <h6><EmailOutlinedIcon style={{fontSize:'20px'}}/> &lt;{email.sender.email}&gt; , &lt;{email.recipient.email}&gt;</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='message-card-header-left'>
                                    <button className='btn-type1' style={{border: 'none', padding: '0px'}} onClick={() => toggleMessage(email.id)}> 
                                       {openMessages[email.id] ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownOutlinedIcon />}
                                    </button>
                                    <button className='btn-type1' style={{border: 'none', padding: '0px'}}> <MoreVertOutlinedIcon /></button>
                                </div>
                            </div>
                            {
                                openMessages[email.id] &&( 
                                <div className='message-card-body'>
                                    <p>{email.body}</p>
                                </div>)
                            }
                        </div>
                    ))
                }
            </div>

            <div className='response-section'>

                <div className='fast-response'>
                    <h5>ردود سريعة</h5>
                    <div className='fast-response-text'>
                        <ul>
                            <li><h6>مرحباً بك، سيتم تحويل المشكلة للفريق المختص</h6></li>
                            <li><h6>أهلاً، تم استلام طلبكم وجاري معالجته</h6></li>
                            <li><h6>مرحباً بك، سيتم تحويل المشكلة للفريق المختص</h6></li>
                            <li><h6>مرحباً بك، سيتم تحويل المشكلة للفريق المختص</h6></li>
                        </ul>
                    </div>
                    <button className='btn-type1' ><NoteAddOutlinedIcon sx={{fontSize: '20px'}}/>استدعاء من قالب</button>
                </div>

                <div className='response-main'>
                    <div className='response-main-header'>
                        <div className='response-main-header-btns'>
                            <button className={cc ? 'btn-type2' : 'btn-type1'} onClick={() => {setCC(!cc)}}>CC</button>
                            <button className='btn-type1'> <ZoomOutMapOutlinedIcon sx={{fontSize: '18px'}}/></button>
                        </div>
                        <div className='response-main-header-data'>
                            <div className='response-email-section'>
                                <h5>رد الي:</h5>
                                <input type="email" name="email" id="email-input" className='text-input' value={emailR} disabled/>
                            </div>
                            { <div className='response-cc-section'>
                                <h5>cc:</h5>
                                <div className="search-container">
                                    <input type="text" placeholder="ادخل اسم" className="search-input" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                                    <Search className="search-icon" size={10} />
                                </div>

                                <div className="email-tags">
                                        <div className="email-tag" onClick={() => handleTagClick(event.target.innerText.replace("×", "").trim())}>
                                        ahmed@example.com
                                        <span className="close-btn">&times;</span>
                                    </div>
                                    <div className="email-tag">
                                        ahmed@example.com
                                        <span className="close-btn">&times;</span>
                                    </div>
                                    <div className="email-tag">
                                        ahmed@example.com
                                        <span className="close-btn">&times;</span>
                                    </div>
                                </div>

                            </div>}
                        </div>
                    </div>
                    <div className='response-main-body'>
                        <div className="textarea-container">
                            <textarea className="custom-textarea" placeholder="إضافة رد..." value={text} onChange={(e) => setText(e.target.value)} onFocus={() => setIsExpanded(true)} onBlur={() => setIsExpanded(false)} />

                            <div className='textarea-footer'>

                                <div className="icons">
                                    <CaseSensitive size={24} color="#A3A3A3" />
                                    <Sparkles size={18} color="#A3A3A3" />
                                    <Paperclip size={18} color="#A3A3A3" />
                                </div>

                                {(
                                    <div className="buttons">
                                        <button className="btn-type2 add-reply">
                                            إضافة رد | <KeyboardArrowUpOutlinedIcon/>
                                        </button>
                                        <button className="btn-type1 close-reply">
                                            <span className="close-btn">&times;&nbsp;</span>
                                            إلغاء
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabContent;
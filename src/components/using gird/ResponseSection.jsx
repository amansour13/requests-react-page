import { useState } from 'react';
import ZoomOutMapOutlinedIcon from '@mui/icons-material/ZoomOutMapOutlined';
import { Paperclip, Sparkles, Type, Search, CaseSensitive } from "lucide-react";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';


function ResponseSection(){
    const [cc, setCC] = useState(false);
    const [emailR, setEmailR] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [text, setText] = useState("");

    const handleTagClick = (email) => {
        setSearchValue(email);
      };

    return(
        <>
            <div className='w-full items-center gap-5 grid grid-cols-[0.6fr_6fr_1.2fr]'>
                    <h5 className='text-[13px]'>ردود سريعة</h5>
                    <div className='fast-response-text'>
                        <ul>
                            <li><h6 className='text-[9px]'>مرحباً بك، سيتم تحويل المشكلة للفريق المختص</h6></li>
                            <li><h6 className='text-[9px]'>أهلاً، تم استلام طلبكم وجاري معالجته</h6></li>
                            <li><h6 className='text-[9px]'>مرحباً بك، سيتم تحويل المشكلة للفريق المختص</h6></li>
                            <li><h6 className='text-[9px]'>مرحباً بك، سيتم تحويل المشكلة للفريق المختص</h6></li>
                        </ul>
                    </div>
                    <button className='btn-type1' ><NoteAddOutlinedIcon sx={{fontSize: '13px'}}/>استدعاء من قالب</button>
            </div>

            <div className='w-full flex flex-col gap-1 border-[1.5px] rounded-2xl border-[#E2E8F0] overflow-hidden'>
                <div className='flex flex-row-reverse items-start justify-between p-3'>
                    <div className='flex gap-2'>
                        <button className={cc ? 'btn-type2' : 'btn-type1'} onClick={() => {setCC(!cc)}}>CC</button>
                        <button className='btn-type1'> <ZoomOutMapOutlinedIcon sx={{fontSize: '18px'}}/></button>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-2'>
                            <h5 className='text-[13px] text-[#7A8699] font-[400]'>رد الي:</h5>
                            <input type="email" name="email" id="email-input" className='text-input' value={emailR} disabled/>
                        </div>

                        <div className='flex flex-col w-full'>
                        { <div className='flex gap-2 items-end justify-center'>
                            <h5 className='text-[13px] text-[#7A8699] font-[400]'>CC:</h5>
                            <div className="relative mr-4 flex-1">
                                <input type="text" placeholder="ادخل اسم" className="search-input" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                                <Search className="search-icon" size={10} />
                            </div>

                            <div className="flex gap-2 justify-start flex-wrap-reverse">
                                    <div className="rounded-[20px] text-[9px] flex items-center bg-transparent border border-[#7A8699] text-[#7A8699] cursor-pointer px-2 py-0.5 hover:bg-[var(--dark-green)] hover:text-white gap-1" onClick={() => handleTagClick(event.target.innerText.replace("×", "").trim())}>
                                    ahmed@example.com
                                    <span className="text-[9px]">&times;</span>
                                </div>
                                    <div className="rounded-[20px] text-[9px] flex items-center bg-transparent border border-[#7A8699] text-[#7A8699] cursor-pointer px-2 py-0.5 hover:bg-[var(--dark-green)] hover:text-white gap-1" onClick={() => handleTagClick(event.target.innerText.replace("×", "").trim())}>
                                    ahmed@example.com
                                    <span className="text-[9px]">&times;</span>
                                </div>
                                    <div className="rounded-[20px] text-[9px] flex items-center bg-transparent border border-[#7A8699] text-[#7A8699] cursor-pointer px-2 py-0.5 hover:bg-[var(--dark-green)] hover:text-white gap-1" onClick={() => handleTagClick(event.target.innerText.replace("×", "").trim())}>
                                    ahmed@example.com
                                    <span className="text-[9px]">&times;</span>
                                </div>
                            </div>

                        </div>}
                        </div>
                    </div>
                </div>
                <div className='w-full border-t-[#E2E8F0] border-t-[1px]'>
                    <div className="bg-white">
                        <textarea className="p-3 text-[14px] w-full h-full resize-none border-none outline-none scrollbar-hide box-border" placeholder="إضافة رد..." value={text} onChange={(e) => setText(e.target.value)} onFocus={() => setIsExpanded(true)} onBlur={() => setIsExpanded(false)} />

                        <div className='w-full flex justify-between pb-3 px-3 items-center box-border'>

                            <div className="w-full flex items-center gap-2">
                                <h3 className='text-[#A3A3A3] font-[400] text-[19px] '>A</h3>
                                <Sparkles size={18} color="#A3A3A3" />
                                <Paperclip size={18} color="#A3A3A3" />
                            </div>

                            {(
                                <div className="w-full flex flex-row-reverse h-full gap-2">
                                    <button className="btn-type2 add-reply">
                                        إضافة رد | <KeyboardArrowUpOutlinedIcon/>
                                    </button>
                                    <button className="btn-type1">
                                        <span className="text-[12px]">&times;&nbsp;</span>
                                        إلغاء
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ResponseSection;
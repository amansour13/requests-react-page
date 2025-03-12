import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';

function NavMenu() {
    const [active, setActive] = useState(true);
    let navItems ={ 
        dashboard: {
            icon: <DashboardIcon className="rounded-[10px] p-1 text-[#B8BFCC] group-focus:text-[#00CA7C] group-focus:bg-[#00ca7d15]"/>,
            text: 'اللوحة'
        },
        clients: {
            icon: <FolderRoundedIcon className="rounded-[10px] p-1 text-[#B8BFCC] group-focus:text-[#00CA7C] group-focus:bg-[#00ca7d15]"/>,
            text: 'العملاء'
        },
        contacts: {
            icon: <DescriptionRoundedIcon className="rounded-[10px] p-1 text-[#B8BFCC] group-focus:text-[#00CA7C] group-focus:bg-[#00ca7d15]"/>,
            text: 'العقود'
        },
        hr: {
            icon: <GroupsRoundedIcon className="rounded-[10px] p-1 text-[#B8BFCC] group-focus:text-[#00CA7C] group-focus:bg-[#00ca7d15]"/>,
            text: 'الموارد البشرية'
        },
        projects: {
            icon: <CategoryRoundedIcon  className="rounded-[10px] p-1 text-[#B8BFCC] group-focus:text-[#00CA7C] group-focus:bg-[#00ca7d15]"/>,
            text: 'المشاريع'
        },
        finance: {
            icon: <PaidRoundedIcon className="rounded-[10px] p-1 text-[#B8BFCC] group-focus:text-[#00CA7C] group-focus:bg-[#00ca7d15]"/>,
            text: 'المالية'
        },
        calender: {
            icon: <CalendarTodayIcon className="rounded-[10px] p-1 text-[#B8BFCC] group-focus:text-[#00CA7C] group-focus:bg-[#00ca7d15]"/>,
            text: 'التقويم'
        },
        requests: {
            icon: <ConfirmationNumberIcon className="rounded-[10px] p-1 text-[#B8BFCC] group-focus:text-[#00CA7C] group-focus:bg-[#00ca7d15]"/>,
            text: 'الطلبات'
        },
        settings: {
            icon: <SettingsIcon className="rounded-[10px] p-1 text-[#B8BFCC] group-focus:text-[#00CA7C] group-focus:bg-[#00ca7d15]"/>,
            text: 'إعدادات'
        },

        };
    return (
        <>
                <ul className='list-none flex flex-col items-center'>
                    <li className='p-3'>
                        <a href="#" className=''>
                            <HistoryToggleOffOutlinedIcon className="text-[#00CA7C] box-border" style={{ fontSize: "40px" }}/>
                        </a>
                    </li>

                    {
                        Object.entries(navItems).map(([key, value]) => {
                            return(
                                <li className='p-1 hover:bg-[#00CA7C0D] w-full'>
                                    <a href='#' className='group flex flex-col items-center'>
                                        {value.icon}
                                        <h6 className='text-center text-[#666C83] leading-[14px] text-[9px] group-focus:text-[#00CA7C]'>{value.text}</h6>
                                    </a>
                                </li>
                            );
                        })
                    }

                </ul>
        </>
    );
}

export default NavMenu;



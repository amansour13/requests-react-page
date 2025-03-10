import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import SettingsIcon from '@mui/icons-material/Settings';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import './sidebar.css';

function Sidebar() {
    const [active, setActive] = useState(true);
    let navItems ={ 
        dashboard: {
            icon: <DashboardIcon style={{color:'#c1c3cd'}}/>,
            text: 'اللوحة'
        },
        clients: {
            icon: <FolderRoundedIcon style={{color: '#c1c3cd'}}/>,
            text: 'العملاء'
        },
        contacts: {
            icon: <DescriptionRoundedIcon style={{color: '#c1c3cd'}}/>,
            text: 'العقود'
        },
        hr: {
            icon: <GroupsRoundedIcon style={{color: '#c1c3cd'}}/>,
            text: 'الموارد البشرية'
        },
        projects: {
            icon: <CategoryRoundedIcon style={{color: '#c1c3cd'}}/>,
            text: 'المشاريع'
        },
        finance: {
            icon: <PaidRoundedIcon style={{color: '#c1c3cd'}}/>,
            text: 'المالية'
        },
        calender: {
            icon: <CalendarTodayIcon style={{color: '#c1c3cd'}}/>,
            text: 'التقويم'
        },
        requests: {
            icon: <ConfirmationNumberIcon style={{color: '#c1c3cd'}}/>,
            text: 'الطلبات'
        },
        settings: {
            icon: <SettingsIcon style={{color: '#c1c3cd'}}/>,
            text: 'إعدادات'
        },

        };
    return (
        <>
            <div className="sidebar">
                <ul className='nav'>
                    <li className='nav-logo'>
                        <a href="#" className='link'>
                            <HistoryToggleOffOutlinedIcon style={{color: 'var(--dark-green)', fontSize: 40 , padding: '20px'}}/>
                        </a>
                    </li>

                    {
                        Object.entries(navItems).map(([key, value]) => {
                            return(
                                <li className='nav-item'>
                                    <a href='#' className='link'>
                                        {value.icon}
                                        <h6 className='nav-text'>{value.text}</h6>
                                    </a>
                                </li>
                            );
                        })
                    }

                </ul>
            </div>
        </>
    );
}

export default Sidebar;
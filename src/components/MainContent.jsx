import SearchIcon from '@mui/icons-material/Search';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import './maincontent.css';
import Tabs from './Tabs.jsx';

function MainContent(props){
    return(
        <>
            <div className="main-content">
                <div className="title">
                    <h4 className="title-text">{props.title}</h4>
                    <ul className="icons">
                        <li className='icon'><SearchIcon style={{color: 'var(--secondary-color)'}}/></li>
                        <li className='icon'><FileOpenOutlinedIcon style={{color: 'var(--secondary-color)'}}/></li>
                        <li className='icon'><AccessTimeOutlinedIcon style={{color: 'var(--secondary-color)'}}/></li>
                        <li className='icon'><AddCircleOutlineOutlinedIcon style={{color: 'var(--secondary-color)'}}/></li>
                        <li className='icon notification-container'><NotificationsOutlinedIcon style={{color: 'var(--secondary-color)'}}/><span className="notification-badge">6</span></li>
                    </ul>
                </div>
                {/* <div className='divider'></div> */}

                <Tabs />
            </div>

        </>
    );

};

export default MainContent;
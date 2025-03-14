import SearchIcon from '@mui/icons-material/Search';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

function PageTopBar(props) {
  return (
    <div className="grid grid-cols-[6fr_2fr] pr-5 pl-5 justify-between items-center">
        <h4 className="font-bold text-[24px]/[60px]">{props.title}</h4>
        <ul className="flex justify-around">
            <li className=''><SearchIcon style={{color: 'var(--secondary-color)'}}/></li>
            <li className=''><FileOpenOutlinedIcon style={{color: 'var(--secondary-color)'}}/></li>
            <li className=''><AccessTimeOutlinedIcon style={{color: 'var(--secondary-color)'}}/></li>
            <li className=''><AddCircleOutlineOutlinedIcon style={{color: 'var(--secondary-color)'}}/></li>
            <li className="relative inline-block">
                <NotificationsOutlinedIcon className="text-[var(--secondary-color)]" />
                <span className="absolute -top-1 -right-1 bg-[var(--dark-green)] text-white text-xs font-bold px-1 rounded-[30%] min-w-[18px] text-center">
                    6
                </span>
            </li>
        </ul>
    </div>
  );
}

export default PageTopBar;
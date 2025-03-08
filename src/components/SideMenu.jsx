import { useState } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import './sidemenu.css';

function SideMenu(props) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="side-menu">
        {
                isOpen && 
                <ul className='orders'>
                    <li className=''>
                        <a href="#" className='link'>
                            <h4 className='order-title'>{props.title}</h4>
                        </a>
                    </li>
                        
                    <div className="divider"></div>

                    {props.items.map((item, index) => (
                        <li key={index} className='order-item'>
                            <a href="#" className='link'>
                                <h5 className='order-text'>{item}</h5>
                            </a>
                        </li>
                    ))}
                </ul>

            }

            <div className="resizer-container">
                <div className="resizer-line"></div>
                <button className="toggle-button" style={{bottom: '10%'}} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <ChevronRight style={{fontSize: '20px', margin: '0px', position: 'absolute ', top: '-1px',right: '0px'}}/> : <ChevronLeft style={{fontSize: '20px', margin: '0px', position: 'absolute ', top: '-1px',right: '0px'}}/>}
                </button>
            </div>
        </div>
    );
}

export default SideMenu;
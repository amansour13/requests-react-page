import { useState } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

function RightSideMenu(props) {
    return (
        <>
        { 
                <>
                <h2 className='font-bold  text-[24px]/[65px] border-b-[0.05rem] border-[var(--secondary-color)]'>{props.title}</h2>
                <ul className=''>
                    <li className=''>
                        <a href="#" className=''>
                        </a>
                    </li>
                        

                    {props.items.map((item, index) => (
                        <li key={index} className=''>
                            <a href="#" className=''>
                                <h6 className='font-medium text-[13px]/[27px] bg-[#F7F8FA] p-2'>{item}</h6>
                            </a>
                        </li>
                        ))}
                </ul>
                    
                
                
            </>
            }
        </>
    );
}

export default RightSideMenu;
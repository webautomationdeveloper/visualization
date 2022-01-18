import './widgetSm.css';
import React from 'react';
import {Visibility}  from '@material-ui/icons';

function Widgetsm() {
    return (
        <div className='widgetSm'>
           <span className='widgetSmTitle'>New Join members</span>
           <ul className="widgetSmList">
               <li className="widgetSmListItem">
                   <img src="https://avatars.githubusercontent.com/u/25339515?v=4" alt="Profile pic" className='widgetSmImg' />
                   <div className="widgetSmuser"> 
                   <span className="username">Yogi</span>
                   <span className="title">Web Programmer</span>
                   </div>
                   <button className='widgetSmButton'><Visibility className='widgetSmIcon'/>Display</button>
               </li>


               <li className="widgetSmListItem">
                   <img src="https://avatars.githubusercontent.com/u/25339515?v=4" alt="Profile pic" className='widgetSmImg' />
                   <div className="widgetSmuser"> 
                   <span className="widgetSmusername">Yogi</span>
                   <span className="widgetSmtitle">Web Programmer</span>
                   </div>
                   <button className='widgetSmButton'><Visibility className='widgetSmIcon'/>Display</button>
               </li>

               <li className="widgetSmListItem">
                   <img src="https://avatars.githubusercontent.com/u/25339515?v=4" alt="Profile pic" className='widgetSmImg' />
                   <div className="widgetSmuser"> 
                   <span className="username">Yogi</span>
                   <span className="title">Web Programmer</span>
                   </div>
                   <button className='widgetSmButton'><Visibility className='widgetSmIcon'/>Display</button>
               </li>
           </ul>
        </div>
    )
}

export default Widgetsm;

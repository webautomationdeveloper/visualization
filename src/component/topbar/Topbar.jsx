import React from 'react';
import './topbar.css';
import {NotificationsNone,Language,Settings} from '@material-ui/icons';

function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className='logo'>Webastral</span>
                </div>
                <div className="topRight">
                    <div className='topbarIconContainer'>
                   <NotificationsNone/>
                   <span className='topIconbadge'>2</span>
                    </div>

                    <div className='topbarIconContainer'>
                   <Language/>
                   <span className='topIconbadge'>2</span>
                    </div>

                    <div className='topbarIconContainer'>
                   <Settings/>
                    </div>

                    <img src="https://avatars.githubusercontent.com/u/25339515?v=4" alt="" className='topAvatar' />
                </div>
               </div>
           </div>
    )
}

export default Topbar;

import React from 'react';
import './sidebar.css';
import {LineStyle,Timeline,TrendingUp,Store,PermIdentity,AttachMoney,BarChart,Email,DynamicFeed,ChatBubbleOutline,Error,Work} from '@material-ui/icons';

function Sidebar() {
    return (
        <div className='sideBar'>
        <div className='sidebarWrapper'>

           <div className='sidebarMenu'>
               <h3 className='sidebarTitle'>Dashboard</h3>
               <ul className='sidebarList'>
                   <li className='sidebarListItem active'>
                       <LineStyle className='sidebarIcon' />
                       Home
                   </li>
                   <li className='sidebarListItem'>
                       <Timeline className='sidebarIcon'/>
                       Analytics
                   </li>
                   <li className='sidebarListItem'>
                       <TrendingUp className='sidebarIcon' />
                       Sales
                   </li>
               </ul>
            </div>


           <div className='sidebarMenu'>
               <h3 className='sidebarTitle'>Quick Menu</h3>
               <ul className='sidebarList'>
                   <li className='sidebarListItem active'>
                       <PermIdentity className='sidebarIcon' />
                       Users
                   </li>
                   <li className='sidebarListItem'>
                       <Store className='sidebarIcon'/>
                       Products
                   </li>
                   <li className='sidebarListItem'>
                       <AttachMoney className='sidebarIcon' />
                       Transactions
                   </li>
                   <li className='sidebarListItem'>
                       <BarChart className='sidebarIcon' />
                       Reports
                   </li>
               </ul>
            </div>



           <div className='sidebarMenu'>
               <h3 className='sidebarTitle'>Notification</h3>
               <ul className='sidebarList'>
                   <li className='sidebarListItem active'>
                       <Email className='sidebarIcon' />
                       Mail
                   </li>
                   <li className='sidebarListItem'>
                       <DynamicFeed className='sidebarIcon'/>
                       Feedback
                   </li>
                   <li className='sidebarListItem'>
                       <ChatBubbleOutline className='sidebarIcon' />
                       Message
                   </li>
               </ul>
            </div>



           <div className='sidebarMenu'>
               <h3 className='sidebarTitle'>Staff</h3>
               <ul className='sidebarList'>
                   <li className='sidebarListItem active'>
                       <Work className='sidebarIcon' />
                       Manage
                   </li>
                   <li className='sidebarListItem'>
                       <Timeline className='sidebarIcon'/>
                       Analytics
                   </li>
                   <li className='sidebarListItem'>
                       <Error className='sidebarIcon' />
                       Report
                   </li>
               </ul>
            </div>

            
           </div>
        </div>
    )
}

export default Sidebar

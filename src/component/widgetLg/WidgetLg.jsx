import React from 'react';
import './widgetLg.css';

const WidgetLg = () => {
    const Button=({type})=>{
        return  <button className={'widgetLgButton '+type}>{type}</button>
    }
    return (
        <div className='widgetLg'>
           <h3 className="widgetLgTitle">Latest Transactions</h3>
           <table className='widgetLgTable'>
               <thead>
               <tr className="widgetLgTr">
                   <th className="widgetLgTh">Customer</th>
                   <th className="widgetLgTh">Date</th>
                   <th className="widgetLgTh">Amount</th>
                   <th className="widgetLgTh">Status</th>
               </tr>
               </thead>
               <tbody>
                   
               <tr className='widgetLgTr'>  
                  <td className="widgetLguser">
                      <img src="https://avatars.githubusercontent.com/u/25339515?v=4" alt="Yogi" className='widgetLgImg' />
                      <span className="widgetLgName">Yogi</span>
                  </td>
                  <td className='widgetLgDate'>
                      2 jun 2021
                  </td>
                  <td className='widgetLgAmount'>
                        $122
                  </td>
                  <td className='widgetLgStatus'>
                        <Button type='Approved' />
                  </td>
               </tr>

               <tr className='widgetLgTr'>  
                  <td className="widgetLguser">
                      <img src="https://avatars.githubusercontent.com/u/25339515?v=4" alt="Yogi" className='widgetLgImg' />
                      <span className="widgetLgName">Yogi</span>
                  </td>
                  <td className='widgetLgDate'>
                      2 jun 2021
                  </td>
                  <td className='widgetLgAmount'>
                        $122
                  </td>
                  <td className='widgetLgStatus'>
                        <Button type='Declined' />
                  </td>
               </tr>

               <tr className='widgetLgTr'>  
                  <td className="widgetLguser">
                      <img src="https://avatars.githubusercontent.com/u/25339515?v=4" alt="Yogi" className='widgetLgImg' />
                      <span className="widgetLgName">Yogi</span>
                  </td>
                  <td className='widgetLgDate'>
                      2 jun 2021
                  </td>
                  <td className='widgetLgAmount'>
                        $122
                  </td>
                  <td className='widgetLgStatus'>
                        <Button type='Pending' />
                  </td>
               </tr>


               <tr className='widgetLgTr'>  
                  <td className="widgetLguser">
                      <img src="https://avatars.githubusercontent.com/u/25339515?v=4" alt="Yogi" className='widgetLgImg' />
                      <span className="widgetLgName">Yogi</span>
                  </td>
                  <td className='widgetLgDate'>
                      2 jun 2021
                  </td>
                  <td className='widgetLgAmount'>
                        $122
                  </td>
                  <td className='widgetLgStatus'>
                        <Button type='Approved' />
                  </td>
               </tr>
               </tbody>
           </table>
        </div>
    )
}  

export default WidgetLg
 
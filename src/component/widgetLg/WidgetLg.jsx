import React from 'react';
import './widgetLg.css';

const WidgetLg = () => {
    return (
        <div className='widgetLg'>
           <h3 className="widgetLgTitle">Latest Transactions</h3>
           <table className='widgetLgTable'>
               <tr className="widgetLgTr">
                   <th className="widgetLgTh">Customer</th>
                   <th className="widgetLgTh">Date</th>
                   <th className="widgetLgTh">Amount</th>
                   <th className="widgetLgTh">Status</th>
               </tr>
               <tr className='widgetLgTr'>  
                  <td className="widgetLguser">
                      <img src="https://avatars.githubusercontent.com/u/25339515?v=4" alt="Yogi" className='widgetLgImg' />
                  </td>
                  <td className='widgetLgDate'>
                      2 jun 2021
                  </td>
                  <td className='widgetLgAmount'>
                        $122
                  </td>
                  <td className='widgetLgAmount'>

                  </td>
               </tr>
           </table>
        </div>
    )
}  

export default WidgetLg
 
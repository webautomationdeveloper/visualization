import React, { useEffect, useState } from 'react';
import data from '../importdata';

import {ResponsiveContainer,LineChart,Line} from 'recharts';

const Graph=()=> {
    const [userData,setUserdata] = useState([]);
    useEffect(()=>{ data.then(item=>setUserdata(item));},[]);
    console.log(userData[0]);  
    return (
        <div>
           <h1>Line Chart</h1>
           <ResponsiveContainer>
               <LineChart width={500} height={300} data={userData}>
                    <Line dataKey={"GoalsAccomplished"}></Line>
               </LineChart>
           </ResponsiveContainer>
        </div>
    )
}

export default Graph;
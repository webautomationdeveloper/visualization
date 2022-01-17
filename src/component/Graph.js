import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, { useEffect, useState } from 'react';
import data from '../importdata';

const Graph=({...props})=> {
    const [userData,setUserdata] = useState({});
    useEffect(()=>{ getUserData()},[]);
    const getUserData=async ()=>{
        const user=await data
        setUserdata(user)
    }
    return (
        <div>
           <h1>Line Chart</h1>  
           <ResponsiveContainer width="100%" aspect={3}>
                    <LineChart
                    width={500}
                    height={300}
                    data={userData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={'Week Ended'} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey={'Voltage'} stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
                   
        </div>
    )
}

export default Graph;
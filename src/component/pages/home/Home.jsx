import './home.css';

import React, { useEffect, useState } from 'react';

import Featuredinfo from '../../featuredinfo/Featuredinfo';
import GraphChart from '../../chart/GraphChart';
import data from '../../../importdata';

function Home() {
    const [userData,setUserdata] = useState({});
    useEffect(()=>{ getUserData()},[]);
    const getUserData=async ()=>{
        const user=await data
        setUserdata(user)
    }
    return (
        <div className='home'>
           <Featuredinfo />
            <GraphChart data={userData} title= {'Staff Reporting'} xaxis= {'Week Ended'} line={'Voltage'}/>   
        </div>
    )
}

export default Home

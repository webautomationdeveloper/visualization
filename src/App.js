import GraphChart from './component/Graph';
import React from 'react';
import Topbar from './component/topbar/Topbar';
import Sidebar from './component/sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <div >
      
        <Topbar/>
        <div className='container'>
          <Sidebar />
          <div className='content'>
            <GraphChart />
          </div>
        </div>
      
    </div>
  );
}

export default App;





// https://www.youtube.com/watch?v=aTPkos3LKi8&ab_channel=LamaDev
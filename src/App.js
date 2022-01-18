
import React from 'react';
import Topbar from './component/topbar/Topbar';
import Sidebar from './component/sidebar/Sidebar';
import './App.css';
import Home from './component/pages/home/Home';



function App() {
  return (
    <div >
      
        <Topbar/>
        <div className='container'>
          <Sidebar />
          <div className='content'>
           <Home />
          </div>
        </div>
      
    </div>
  );
}

export default App;





// https://www.youtube.com/watch?v=aTPkos3LKi8&ab_channel=LamaDev
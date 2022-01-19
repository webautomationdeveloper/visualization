
import React from 'react';
import Topbar from './component/topbar/Topbar';
import Sidebar from './component/sidebar/Sidebar';
import './App.css';
import Home from './component/pages/home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserList from './component/pages/userList/UserList';


function App() {
  return (
    <BrowserRouter>
        <Topbar/>
        <div className='container'>
          <Sidebar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<UserList />} />
           
          </Routes>
  
         
         
        
          
        </div>
   </BrowserRouter>
  );
}

export default App;





// https://www.youtube.com/watch?v=aTPkos3LKi8&ab_channel=LamaDev
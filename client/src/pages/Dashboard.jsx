import React from 'react'
import { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import DashProfile from '../components/DashProfile'
import DashSidebar from '../components/DashSidebar'

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    console.log(tabFromUrl);
    if(tabFromUrl){
      setTab(tabFromUrl);
    }
  },
  [location.search])
  return (
  <>
  <div className='min-h-screen flex flex-col md:flex-row'> 
  <div className='md:w-55'>
    {/* sidebar */}
    <DashSidebar/>
  </div>

   
     {/* Profile */}
     
     { tab === 'profile' && <DashProfile/>  }

  </div>
  
  
  </>
  )
}

export default Dashboard

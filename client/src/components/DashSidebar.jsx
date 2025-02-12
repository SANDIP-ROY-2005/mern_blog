import { Sidebar } from 'flowbite-react'
import React, { useRef } from 'react'
import { HiArrowSmRight, HiUser } from 'react-icons/hi'
import { useState,useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

 

const DashSidebar = () => {
    const location = useLocation();
    const [tab, setTab] = useState('');
    
    useEffect(()=>{
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if(tabFromUrl){
            setTab(tabFromUrl);
        }
    },[location.search]);
  return (
     <>
     <Sidebar className='w-full md:w-55'> 
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Link to='/dashboard?tab=profile'>
                <Sidebar.Item active={tab==='profile'} icon={HiUser} label={'user'} labelColor='dark' as='div'>
                    Profile
                </Sidebar.Item>
                </Link>
                <Sidebar.Item   icon={HiArrowSmRight} className='cursor-pointer' >
                    Sign-out
                </Sidebar.Item>

            </Sidebar.ItemGroup>
        </Sidebar.Items>
     </Sidebar>
     
     </>
  )
}

export default DashSidebar

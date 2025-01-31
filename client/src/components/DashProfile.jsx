import { Button, TextInput } from 'flowbite-react';
import React from 'react'
import { useSelector } from 'react-redux'

const DashProfile = () => {
    const {currentUser} = useSelector(state=>state.user);
  return (
    <>

    <div className='max-w-lg mx-auto p-3 w-full'>
        <h1 className='text-center font-semibold my-7 text-3xl'>Profile</h1>
        <form className='flex flex-col gap-4'>
            <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'>
                <img src={currentUser.profilePicture} alt='user'className='rounded-full w-full h-full object-cover border-8 border-[lightgray]'/>
            </div>
     <TextInput type='text' id='username' placeholder='username' defaultValue={currentUser.username}/>
     <TextInput type='email' id='email' placeholder='email' defaultValue={currentUser._id}/>
     <TextInput type='passoword' id='passoword' placeholder='**********'  />
     <Button type='submit' gradientDuoTone='purpleToBlue' outline>UPDATE INFO</Button>      
        </form>
        <div className='text-red-600 flex justify-between mt-5 '>
            <span>Delete Account</span>
            <span>Sign OUT</span>
        </div>
    </div>
    
    
    </>
  )
}

export default DashProfile

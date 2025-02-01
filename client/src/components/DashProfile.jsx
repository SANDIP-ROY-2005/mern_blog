import { Button, TextInput } from 'flowbite-react';
import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'

const DashProfile = () => {
    const {currentUser} = useSelector(state=>state.user);
    const [imageFile, setImageFile] = useState(null);
    const [imageFileUrl,setImageFileUrl] = useState(null);
    const filePickerRef =  useRef();

    const handleImageChange = (e)=>{
      const file = e.target.files[0]; // upon change we are trying to access the details of the img uploaded 
      // console.log(file);
      if(file){
        setImageFile(file);
        setImageFileUrl(URL.createObjectURL(file)); // with the img file uploaded we are trying to make an  url out of the img file and that to be displayed in the profile pic of user 

      }
     
    };
    console.log(imageFile,imageFileUrl);
    
    // now we need to write a logic that upon choosing an img file we will upload the img

    useEffect( ()=>{

      if(imageFile) {
        uploadImage();
      }

    },[imageFile]);
    
    const uploadImage = ()=>{
      console.log("uploading image....");
    }
    
  return (
    <>

    <div className='max-w-lg mx-auto p-3 w-full'>
        <h1 className='text-center font-semibold my-7 text-3xl'>Profile</h1>
        <form className='flex flex-col gap-4'>
          <input  type='file' accept='image/*' onChange={handleImageChange} ref={filePickerRef} hidden/>
            <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full' onClick={()=>{
               filePickerRef.current.click() // this enables to select img when we tap on the rounded pic 
            }}>
                <img src={ imageFileUrl ||  currentUser.profilePicture} alt='user'className='rounded-full w-full h-full object-cover border-8 border-[lightgray]'/>
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

import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import { set } from 'mongoose';
import React, { lazy, useState } from 'react'
import { Link ,useNavigate } from 'react-router-dom'

const Signup = () => {
  const [formData, setformData] = useState({ });
  const [errorMessage,seterrorMessage] = useState(null);
  const [loading,setloading]= useState(false);
  const navigate = useNavigate();
   const handleChange = (e)=>{
    // console.log(e.target.value);
    setformData({...formData,[e.target.id]:e.target.value.trim()}); // trim is used to remove white spaces if present
    seterrorMessage(null);
  };
  // console.log(formData);
  const handleSubmit =async(e)=>{
  
    e.preventDefault();// this ensures that the page does not get refreshed when the form is submitted
        // setformData({});
        if(!formData.username || !formData.email || !formData.password){
          return seterrorMessage("fill out all fields");
        } 
        try{
          // upon submisson of the signup form we want to store the data of the form ,so we basically should fetch data from the signup form i.e we should acces the route of signup form: /api/auth/signup
          setloading(true);
          seterrorMessage(null);
          const response = await fetch('/api/auth/signup',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(formData),
          });
         const data = await response.json();
        //  console.log(data)
        if(data.success === false){
          return seterrorMessage(data.message);
        }
        setloading(false); //since form is submitted successfully we have closed the loading spinner
        // after the submission of form we want the user to be redirected to signin page
        if(response.ok){
          navigate('/sign-in');
        }


        }catch(error){
           // this is the error on the client side 
           seterrorMessage(error.message);
           setloading(false);

        }
  };
  
  return (
     <>
     <div className='min-h-screen mt-20'>
       <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>

        <div className='flex-1'>
          <Link to="/" className=' font-bold dark:text-white text-4xl'>
              <span className='px-2 py-1 bg-gradient-to-r from-cyan-700 rounded-lg text-white  '>BLOG</span>app
          </Link>
          <p className='text-sm mt-5'>
          This is a demo project. You can sign in with your email and password or with Google.
          </p>
        </div>

        
          <div className='flex-1'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>

              <div>
                <Label value='Your Username' />
                <TextInput
                 type='text'
                 placeholder='Username'
                 id='username'
                 onChange={handleChange}
                />
              </div>

              <div>
                <Label value='Your Email'/>
                <TextInput
                 type='text'
                 placeholder='Email'
                 id='email'
                 onChange={handleChange}
                />
              </div>

              <div>
                <Label value='Your Passoword' />
                <TextInput
                 type='password'
                 placeholder='Passoword'
                 id='password'
                 onChange={handleChange}
                />
              </div>
             <Button gradientDuoTone='purpleToBlue'type='submit' outline disabled={loading}>
               
               {
                loading ? (
                  <>
                  <Spinner size='sm'/> 
                  <span className='pl-3'>LOADING.....</span>
                  </>

                ) : 'SIGN UP'
               }

             </Button>

            </form>
            <div className='flex gap-5 text-sm mt-5'>
              <span>have an account</span>
              <Link to='/sign-in' className='text-blue-500'>
                 SIGN IN
              </Link> 
            </div>
            {
              errorMessage && (
                <Alert className='mt-5' color='failure'>
                    {errorMessage}
                </Alert>
              )
            }
          </div>
 

       </div>
     </div>
     </>
  )
}

export default Signup

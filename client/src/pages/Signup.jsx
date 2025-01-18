import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
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
            <form className='flex flex-col gap-4'>

              <div>
                <Label value='Your Username' />
                <TextInput
                 type='text'
                 placeholder='Username'
                 id='username'
                />
              </div>

              <div>
                <Label value='Your Email'/>
                <TextInput
                 type='text'
                 placeholder='Email'
                 id='email'
                />
              </div>

              <div>
                <Label value='Your Passoword' />
                <TextInput
                 type='password'
                 placeholder='Passoword'
                 id='password'
                />
              </div>
             <Button gradientDuoTone='purpleToBlue'type='submit' outline>SIGN UP</Button>

            </form>
            <div className='flex gap-5 text-sm mt-5'>
              <span>have an account</span>
              <Link to='/sign-in' className='text-blue-500'>
                 SIGN IN
              </Link> 
            </div>
          </div>
 

       </div>
     </div>
     </>
  )
}

export default Signup

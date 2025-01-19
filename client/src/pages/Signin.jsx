import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {
  const [formData, setformData] = useState({});
  const [errorMessage, seterrorMessage] = useState(null);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    // console.log(e.target.value);
    setformData({ ...formData, [e.target.id]: e.target.value.trim() }); // trim is used to remove white spaces if present
    seterrorMessage(null);
  };
  // console.log(formData);
  const handleSubmit = async (e) => {

    e.preventDefault();// this ensures that the page does not get refreshed when the form is submitted
    // setformData({});
    if (!formData.username || !formData.password) {
      return seterrorMessage("fill out all fields");
    }
    try {
      // upon submisson of the signup form we want to store the data of the form ,so we basically should fetch data from the signup form i.e we should acces the route of signup form: /api/auth/signup
      setloading(true);
      seterrorMessage(null);
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      //  console.log(data)
      if (data.success === false) {
        return seterrorMessage(data.message);
      }
      setloading(false); //since form is submitted successfully we have closed the loading spinner
      // after the submission of form we want the user to be redirected to signin page
      if (response.ok) {
        navigate('/');
      }


    } catch (error) {
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
                <Label value='Your Password' />
                <TextInput
                  type='password'
                  placeholder='Password'
                  id='password'
                  onChange={handleChange}
                />
              </div>
              <Button gradientDuoTone='purpleToBlue' type='submit' outline disabled={loading}>

                {
                  loading ? (
                    <>
                      <Spinner size='sm' />
                      <span className='pl-3'>LOADING.....</span>
                    </>

                  ) : 'SIGN IN'
                }

              </Button>

            </form>
            <div className='flex gap-5 text-sm mt-5'>
              <span> dont have an account</span>
              <Link to='/sign-up' className='text-blue-500'>
                SIGN UP
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

export default Signin


// import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// // import { useDispatch, useSelector } from 'react-redux';
// // import {
// //   signInStart,
// //   signInSuccess,
// //   signInFailure,
// // } from '../redux/user/userSlice';
// // import OAuth from '../components/OAuth';

// export default function SignIn() {
//   const [formData, setFormData] = useState({});
//   const { loading, error: errorMessage } = useSelector((state) => state.user);
//   // const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.email || !formData.password) {
//       return dispatch(signInFailure('Please fill all the fields'));
//     }
//     try {
//       dispatch(signInStart());
//       const res = await fetch('/api/auth/signin', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       if (data.success === false) {
//         dispatch(signInFailure(data.message));
//       }

//       if (res.ok) {
//         dispatch(signInSuccess(data));
//         navigate('/');
//       }
//     } catch (error) {
//       dispatch(signInFailure(error.message));
//     }
//   };
//   return (
//     <div className='min-h-screen mt-20'>
//       <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
//         {/* left */}
//         <div className='flex-1'>
//           <Link to='/' className='font-bold dark:text-white text-4xl'>
//             <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
//               Sahand's
//             </span>
//             Blog
//           </Link>
//           <p className='text-sm mt-5'>
//             This is a demo project. You can sign in with your email and password
//             or with Google.
//           </p>
//         </div>
//         {/* right */}

//         <div className='flex-1'>
//           <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
//             <div>
//               <Label value='Your email' />
//               <TextInput
//                 type='email'
//                 placeholder='name@company.com'
//                 id='email'
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <Label value='Your password' />
//               <TextInput
//                 type='password'
//                 placeholder='**********'
//                 id='password'
//                 onChange={handleChange}
//               />
//             </div>
//             <Button
//               gradientDuoTone='purpleToPink'
//               type='submit'
//               disabled={loading}
//             >
//               {loading ? (
//                 <>
//                   <Spinner size='sm' />
//                   <span className='pl-3'>Loading...</span>
//                 </>
//               ) : (
//                 'Sign In'
//               )}
//             </Button>
//             <OAuth />
//           </form>
//           <div className='flex gap-2 text-sm mt-5'>
//             <span>Dont Have an account?</span>
//             <Link to='/sign-up' className='text-blue-500'>
//               Sign Up
//             </Link>
//           </div>
//           {errorMessage && (
//             <Alert className='mt-5' color='failure'>
//               {errorMessage}
//             </Alert>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
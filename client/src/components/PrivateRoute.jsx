import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet ,Navigate } from 'react-router-dom';

 

export default  function PrivateRoute(){

    const {currentUser} = useSelector(state=>state.user);
    return currentUser ? <Outlet/> :<Navigate to='/sign-in'/> ;
    //outlet:  if the current user exists then redirect the user to its children component,in this case the children component of PrivateRoute.jsx is the Dashboard.jsx so if the current user exists then we will be redirected to the dashboard page if the user isnt signed in then will be redirected to the sign-up page 
}

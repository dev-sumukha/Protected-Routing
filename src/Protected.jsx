import React from 'react'
import SignIn from './Sigin';
import { Outlet } from 'react-router-dom';

// const useAuth = ()=>{
//   const user = {loggedIn:true}
//   return user && user.loggedIn;
// }

const Auth = ({isLogin}) => {

  return isLogin?<Outlet/>: <SignIn/>;
}

export default Auth
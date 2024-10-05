import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Browse from '../Browse/Browse'
import './Body.css'
import Login from '../Login/Login';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { AUTH } from '../../Utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../../Store/Slices/UserSlice';
import Error from '../Error/Error';
const Body = () => {

    const dispatch=useDispatch();


    const appRouter=createBrowserRouter(
        [{
            path:'/',
            element:<Login/>
           },
           {
            path:'/browse',
            element:<Browse/>
           },
           {
            path:'/error',
            element:<Error/>
           }
        ]);

        useEffect(()=>{
          onAuthStateChanged(AUTH, (user) => {
            if (user) {
              const {uid,email,displayName,photoURL} = user;
              console.log('UID:', uid);
              console.log('Email:', email);
              console.log('Name:', displayName);
              console.log('URL:', photoURL);
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
              
              // User Sign In
            } else {
              // User is signed out
            dispatch(removeUser);
            
            }
          });
        },[]);

  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body
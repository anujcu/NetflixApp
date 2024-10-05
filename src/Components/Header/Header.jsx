import { useNavigate } from 'react-router-dom';
import { NETFLIX_LOGO } from '../../Constants/Constants';
import './Header.css';
import {signOut } from "firebase/auth";
import {useSelector } from 'react-redux';
import { addUser, removeUser } from '../../Store/Slices/UserSlice';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { AUTH } from '../../Utils/Firebase';
import { useDispatch } from 'react-redux';

const Header = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const user=useSelector(appStore=>appStore.user);
    const [userName,setUserName]=useState(user.uid);


useEffect(()=>{
  onAuthStateChanged(AUTH, (user) => {
    if (user) {
                    // User Sign In
      const {uid,email,displayName,photoURL} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      navigate("/browse");
    } else {
                   // User is signed out
    dispatch(removeUser());
    navigate("/");
    }
  });
},[]);


     const handleSignOut=()=>{
          signOut(AUTH).then(() => {
            setUserName('Guest');
         
            navigate("/");
          }).catch((error) => {
           navigate("/error");
          });
          
    }
  return (
    <div className='headerWrapper'>
    
      <img src={NETFLIX_LOGO} alt='netflix logo' className='netFlixHeaderLogo'/>
  {    userName && <div className='headerProfileInfo'>
    <img className='userProfileImage' src={user.photoURL} alt='user'/>
    <p>Welcome,<span> {user.displayName}</span></p>
    <button type='button' onClick={handleSignOut}>Sign Out</button>
    </div>
  }
        
  
       
     
    </div>
  )
}

export default Header
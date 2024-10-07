import { useNavigate } from 'react-router-dom';
import { NETFLIX_LOGO } from '../../Constants/Constants';
import './Header.css';
import {signOut } from "firebase/auth";
import {useSelector } from 'react-redux';
import { addUser, removeUser } from '../../Store/Slices/UserSlice';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { AUTH } from '../../Utils/Firebase';
import { useDispatch } from 'react-redux';

const Header = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const user=useSelector(appStore=>appStore.user);
    useEffect(()=>{
    const unsubscribe= onAuthStateChanged(AUTH, (user) => {
     
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
      // this will be called when component unmount
      return ()=> unsubscribe();
    },[]);


     const handleSignOut=()=>{
          signOut(AUTH).then(() => {})
          .catch((error) => {
           navigate("/error");
          }); 
    }
    

  return (
    <div className='headerWrapper'>
    
      <img src={NETFLIX_LOGO} alt='netflix logo' className='netFlixHeaderLogo'/>
      {/* <button type='button' onClick={handleSignOut}>Logout</button> */}
  { user.user?  <div className='headerProfileInfo'>
        <img className='userProfileImage' src={user.user.photoURL} alt='user'/>
        <p><span> {user.user.displayName}</span></p>
        <button type='button' onClick={handleSignOut}>Logout</button>
    </div>:''
  }
        
  
       
     
    </div>
  )
}

export default Header
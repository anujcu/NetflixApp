import { useNavigate } from 'react-router-dom';
import { NETFLIX_LOGO } from '../../Constants/Constants';
import './Header.css';
import {signOut } from "firebase/auth";
import {AUTH} from '../../Utils/Firebase'
import {useSelector } from 'react-redux';
import appStore from '../../Store/AppStore';
import { useEffect, useState } from 'react';


const Header = () => {

const navigate=useNavigate();
const user=useSelector(appStore=>appStore.user);

const [userName,setUserName]=useState(user.uid);


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
    {/* <img className='userProfileImage' src={user.photoURL} alt='user'/> */}
    <p>Welcome,<span> {user.displayName}</span></p>
    <button type='button' onClick={handleSignOut}>Sign Out</button>
    </div>
  }
        
  
       
     
    </div>
  )
}

export default Header